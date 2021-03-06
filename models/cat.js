var mongoose= require("mongoose");

var newCatBook = new mongoose.Schema({
	name : String,
	desc : String,
	author : String,
	price : String,
	cover : String,
	bookId : String,
	comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports= mongoose.model("Cat", newCatBook);