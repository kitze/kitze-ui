#!/bin/bash

# Find and delete .js files (excluding dist and node_modules)
find . -type f -name "*.js" ! -path "./node_modules/*" ! -path "./dist/*" -delete

# Find and delete .d.ts files (excluding dist and node_modules)
find . -type f -name "*.d.ts" ! -path "./node_modules/*" ! -path "./dist/*" -delete 