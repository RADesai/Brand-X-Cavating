const path = require('path');

module.exports = function(app, express){
  const router = express.Router();

  //api endpoints and routes

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}
