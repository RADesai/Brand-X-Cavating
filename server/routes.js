const path = require('path');
const controller = require('./api/controller.js');

module.exports = function(app, express){
  const router = express.Router();

  //api endpoints and routes

  router.route('/mail')
    .post(controller.sendMail);

  app.use('/api', router);

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}
