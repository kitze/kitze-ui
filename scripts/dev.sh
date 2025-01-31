#!/bin/bash

# Function to speak text based on OS
speak() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        say "$1"
    elif command -v espeak >/dev/null; then
        # Linux with espeak installed
        espeak "$1"
    else
        # Fallback to just echo
        echo "$1"
    fi
}

# Function to build and push
build_and_push() {
    speak "Changes detected, building"
    
    # Remove dist directory
    rm -rf dist
    
    # Run tsup
    tsup
    
    # Wait for .d.ts file to be generated
    while [ ! -f dist/index.d.ts ]; do 
        sleep 1
    done
    
    speak "Pushing changes to yalc"
    # Push to yalc with signature
    yalc push --sig
    
    speak "Pushed to yalc"
}

# Export the functions so they're available to child processes
export -f build_and_push
export -f speak

# Watch for changes using the exported function
nodemon --watch src -e ts,tsx --exec "bash -c build_and_push" --quiet 