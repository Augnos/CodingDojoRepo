const express = require("express");
const cors = require("cors");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// This is where we import the products routes function from our product.routes.js file
const AllMyProductRoutes = require("./server/routes/product.routes");
AllMyProductRoutes(app);
// require("./server/routes/product.routes");

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
