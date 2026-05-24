const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = Number(process.env.PASSENGER_APP_PORT || process.env.PORT || 3000);
const host = "0.0.0.0";

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/api/hello", (req, res) => {
      res.json({ message: "Hello from Express!" });
    });

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, host, () => {
      console.log(`> Ready on http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Startup failure:", err);
    process.exit(1);
  });
