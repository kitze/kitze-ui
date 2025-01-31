const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

// Read package.json
const packagePath = path.join(__dirname, "..", "package.json");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

// Increment version (patch)
const version = pkg.version.split(".");
version[2] = parseInt(version[2]) + 1;
pkg.version = version.join(".");

// Write updated package.json
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + "\n");

// Execute build commands
console.log("🧹 Cleaning dist directory...");
execSync("rm -rf dist", { stdio: "inherit" });

console.log("🏗️ Building package...");
execSync("npm run build", { stdio: "inherit" });

console.log("📦 Committing changes...");
execSync("git add .", { stdio: "inherit" });
execSync(`git commit -m "chore: bump version to ${pkg.version}"`, {
  stdio: "inherit",
});
execSync("git push origin main", { stdio: "inherit" });

console.log("🚀 Publishing to npm...");
execSync("npm publish", { stdio: "inherit" });

console.log(`✨ Successfully bumped version to ${pkg.version} and published!`);
