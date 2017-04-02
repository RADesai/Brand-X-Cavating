module.exports = {
  sendMail: function(request, response) {
    console.log('REQ.body in Controller:', request.body);
    response.status(201).send('Success');
  }
}
