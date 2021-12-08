const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: {
        type: String,
        trim: true,
        required: "Question is required!!",
        unique: true
    },
    keywords: {
        type:[String],
        required:"Atleast one keyword is required"
    },
    answer: {
        type:String,
        trim: true,
        required:"Answer is required!!"
    },
    code: {
        type:String,
        trim:true
    },
    tableData: {
        type:String,
        trim:true
    },
    diagram: {
        type:String,
        trim:true
    }
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;