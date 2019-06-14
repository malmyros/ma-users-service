const app = require('connect')();
const http = require('http');
const swaggerTools = require('swagger-tools');
const jsYaml = require('js-yaml');
const fs = require('fs');

const port = 3001;
const options = {
  swaggerUi: '/swagger.json',
};

const spec = fs.readFileSync('./swagger.yml', 'utf8');
const swaggerDoc = jsYaml.safeLoad(spec);

swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerMetadata());
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter(options));
  app.use(middleware.swaggerUi());
  http.createServer(app).listen(port);
});
