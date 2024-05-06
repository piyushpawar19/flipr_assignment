// databaseController.js

const Database = require('../models/Database');

exports.getAllDatabases = async (req, res) => {
  try {
    const databases = await Database.find();
    res.render('databases', { databases });
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createDatabase = async (req, res) => {
  try {
    const { name } = req.body;
    const newDatabase = new Database({ name });
    await newDatabase.save();
    req.flash('success_msg', 'Database created successfully');
    res.redirect('/databases');
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.removeDatabase = async (req, res) => {
  try {
    const { id } = req.params;
    await Database.findByIdAndDelete(id);
    req.flash('success_msg', 'Database deleted successfully');
    res.redirect('/databases');
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
