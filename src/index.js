const express = require("express");

const configHandlebars = require("./config/configHandlebars");
const configExpress = require("./config/configExpress");
const routes = require("./routes/routes");

const app = express();
const port = 5000;

// 1st way
configHandlebars(app);
configExpress(app);

// 2nd way require("./config/configHandlebars")(app);

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
