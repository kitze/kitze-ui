import chokidar from "chokidar";
import { exec } from "child_process";

// Initialize watcher
const watcher = chokidar.watch("dist", {
  persistent: true,
  ignoreInitial: true,
});

// Function to run yalc push
const pushToYalc = () => {
  exec("yalc push --sig", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

// Add event listeners
watcher.on("add", pushToYalc).on("change", pushToYalc).on("unlink", pushToYalc);

console.log("Watching dist folder for changes...");
