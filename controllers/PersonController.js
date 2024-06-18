const Person = require('../models/Person');

exports.getPeople = async (req, res) => {
    const people = await Person.fetchAll();
    res.render('people/index', { people });
};

exports.getCreatePerson = (req, res) => {
    res.render('people/create');
};

exports.postCreatePerson = async (req, res) => {
    const { name, lastname, birthday } = req.body;
    const newPerson = new Person(null, name, lastname, birthday);
    await Person.save(newPerson);
    res.redirect('/people');
};

exports.getEditPerson = async (req, res) => {
    const { id } = req.params;
    const person = await Person.findById(id);
    if (!person) {
        return res.redirect('/people');
    }
    res.render('people/edit', { person });
};

exports.postEditPerson = async (req, res) => {
    const { params, body } = req;
    const { id } = params;
    const { name, lastname, birthday } = body;
    const updatedPerson = new Person(id, name, lastname, birthday);
    await Person.save(updatedPerson);
    res.redirect('/people');
};

exports.postDeletePerson = async (req, res) => {
    const { id } = req.params;
    await Person.deleteById(id);
    res.redirect('/people');
};
