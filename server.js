import app from "./app.js";
import config from "./config.js";

app.listen(config.server_port, () => {
  console.log(
    `Server listening in ${config.node_env} mode on port ${config.server_port}`,
  );
});
