import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/results/results-[hash].xml",
    toConsole: true,
  },
  screenshotsFolder: "cypress/screenshots",
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
