const phonebook = require('../phonebook');
const Contact = require('../models/Contact');
let pattern = /\b[\d]+\b/
module.exports = {
  index: (req, res) => {
    res.render("index", {
      contacts: phonebook.getPhonebook()
    })
  },
  addPhonebookPost: (req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    let contact = new Contact(name, number);
    if (name !== "" && number !== "" && number.match(pattern)) {
      phonebook.addContact(contact);
    }
    console.log(req.body);
    res.redirect("/");
  }
}

