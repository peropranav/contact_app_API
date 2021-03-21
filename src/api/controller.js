import contactModel from '../models/contactList';
import messageModel from '../models/message';
export const addContact = async (req, res) => {
    console.log(req.body);
let {first,last,phone} = req.body;
    const newContact = await new contactModel({
        first,
        last,
        phone
        });
    await newContact.save(function (err, newContact) {
    res.send(newContact);    
    });
}

export const getContactList = async (req, res) => {
let contactListArr = await contactModel.find({});
res.send(contactListArr);
}

export const updateContact = async (req,res) => {
    let {first,last,phone,id} = req.body;
   const result =  await contactModel.findByIdAndUpdate({_id:id}, {
        first: first,
        last: last,
        phone: phone
    });
    console.log(result);
    res.send(result);    
}

export const getContactById = async (req,res) => {
    const id = req.params.id;
    let result = await contactModel.findById(id);
    res.send(result);
}

export const sendMessage = async (req,res) => {
const accountSid = 'AC5d53165ec7f81b58fa7223a3d6946c64';
const authToken = 'df0c0b9688aef1b5047d9de422e5bde9';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: req.body.text,
     from: '+13176535078',
     to: req.body.phone
   })
  .then(async (message) => {
    const newMessage = await new messageModel({
        text: req.body.text,
        phone: req.body.phone,
        first: req.body.first,
        sid: message.sid,
        messageReceiverId: req.body.id,
        date : new Date()
        });
    await newMessage.save(function (err, newMessage) {
    res.send(newMessage);    
    });
  }).catch(err=>{
      res.send(err);
  })
}

export const getMessage = async (req,res) => {
    let response = await messageModel.find({});
     res.send(response);
}