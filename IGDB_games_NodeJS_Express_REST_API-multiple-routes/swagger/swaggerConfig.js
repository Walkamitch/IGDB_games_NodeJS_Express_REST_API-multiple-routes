const swaggerJSdoc = require("swagger-jsdoc");
const options = {
  definition: {
    opeapi: "3.0.0",
    info: {
      title: "Node.js Express IGDB Games RESTAPI",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], //points to the api route files
};
const swaggerSpec = swaggerJSdoc(options);

module.exports = swaggerSpec;
