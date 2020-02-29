const path = require('path');
const staticItpts = require('@my-mxp/jsonstore/lib/interpreters.json');

module.exports = function (app) {
  app.get('/api-static/interpreters.json', function (req, res) {
    res.send(staticItpts);
  });
  app.get('/media/*', function (req, res) {
    const noMediaPath = req.path.replace('/media/', '');
    res.sendFile(path.join(__dirname, './../assets/', noMediaPath));
  });
};
