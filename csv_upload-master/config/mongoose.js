/****************IMPORTING PACKAGE*******************************/
const mongoose = require("mongoose");


/*******************MAKING CONNECTION***************************/

//mongoose.connect("mongodb://localhost/CSV");  //mongodb://localhost/CSV
mongoose.connect("mongodb+srv://shreyashwaghmare0501:sS568LhHAgSLPOeD@cluster1.aw56i7y.mongodb.net/csv_upload_db?retryWrites=true&w=majority"); 

//setting it to db
const db = mongoose.connection;

/****************CHECKING CONNECTION****************************/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});
