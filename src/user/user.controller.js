const User = require("./user.model");

exports.findAll = function (req, res) {
  User.findAll(function (err, user) {
    // console.log("controller");
    if (err) res.send(err);
    // console.log("res", user);
    res.send(user);
  });
};
