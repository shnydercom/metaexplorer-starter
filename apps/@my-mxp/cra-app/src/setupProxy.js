const path = require('path');
const staticItpts = require('@my-mxp/jsonstore/lib/interpreters.json');
const itptEditorModServerBOM = require('@metaexplorer-mods/itpt-editor/lib/server-bom');
const qrCodeGenScanMod = require('@metaexplorer-mods/qr-code-genscan/lib/server-bom.js');

module.exports = function (app) {
  itptEditorModServerBOM(app);
  qrCodeGenScanMod(app);
  app.get('/api-static/interpreters.json', function (req, res) {
    res.send(staticItpts);
  });
  app.get('/media/*', function (req, res) {
    const noMediaPath = req.path.replace('/media/', '');
    res.sendFile(path.join(__dirname, './../assets/', noMediaPath));
  });
};
