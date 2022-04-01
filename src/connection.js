var mongoose = request('mongoose');
mongoose.connect("mongodb://localhost/taxi");
module.exports = mongoose;