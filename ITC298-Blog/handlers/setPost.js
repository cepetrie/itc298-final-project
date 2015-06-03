var Post = require("../models/post");

module.exports = function(req, reply) {
  var payload = req.payload;
  var model = new Post(payload);
  model.save(function(err) {
    if (err) {
      console.error(err);
    }
    //reload data
    var response = reply("Saved!");
    response.statusCode = 302;
    response.headers.Location = "/posts";
  });
};