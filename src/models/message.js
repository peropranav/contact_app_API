import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    sid : {
        type: String
    },
    messageReceiverId: {
        type: String
    },
    first: {
        type: String
    },
    date: {
        type: Date
    }
});
const messageModel = mongoose.model('messageSchema', messageSchema);
export default messageModel;