export const addContact = async (req, res) => {
let {first,last,phone} = req.body;
    console.log(req.body);
    const newContact = new contactModel({
        first,
        last,
        phone
        });
    console.log('newUser from body:', newContact);
    newUser.save(function (err, newContact) {
    console.log(newContact);    
    });
}