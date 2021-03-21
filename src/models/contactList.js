import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var contactSchema = new Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: false
    },

    phone: {
        type: String,
        required: true
    }
});
const contactModel = mongoose.model('contactSchema', contactSchema);
export default contactModel;