import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    }
});
const messageModel = mongoose.model('messageSchema', messageSchema);
export default messageModel;