const fs = require("fs");
const path = require("path");

const logDir = path.join(process.cwd(), "tmp");
const logFile = path.join(logDir, "runtime.log");
const standaloneServer = path.join(
  process.cwd(),
  ".next",
  "standalone",
  "server.js"
);

function log(message) {
  try {
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    fs.appendFileSync(logFile, `[${new Date().toISOString()}] ${message}\n`);
  } catch (_) {}
}

process.on("uncaughtException", (err) => {
  log(`uncaughtException: ${err?.stack || err}`);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  log(`unhandledRejection: ${err?.stack || err}`);
  process.exit(1);
});

try {
  const port = String(process.env.PASSENGER_APP_PORT || process.env.PORT || 3000);
  process.env.PORT = port;
  process.env.HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
  process.env.NODE_ENV = process.env.NODE_ENV || "production";

  log(`BOOT start cwd=${process.cwd()} node=${process.version} port=${port}`);
  log(`BOOT standalone path=${standaloneServer}`);

  if (!fs.existsSync(standaloneServer)) {
    throw new Error(`Standalone server not found at ${standaloneServer}`);
  }

  log("BOOT requiring standalone server");
  require(standaloneServer);
} catch (err) {
  log(`BOOT failure: ${err?.stack || err}`);
  throw err;
}
