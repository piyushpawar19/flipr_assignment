

const Instance = require('../models/Instance');

exports.getAllInstances = async (req, res) => {
  try {
    const instances = await Instance.find();
    res.render('instances', { instances });
  } catch (error) {
   
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.addInstance = async (req, res) => {
  try {
    const { name, host, port } = req.body;
    const newInstance = new Instance({ name, host, port });
    await newInstance.save();
    req.flash('success_msg', 'Instance added successfully');
    res.redirect('/instances');
  } catch (error) {
  
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.removeInstance = async (req, res) => {
  try {
    const { id } = req.params;
    await Instance.findByIdAndDelete(id);
    req.flash('success_msg', 'Instance removed successfully');
    res.redirect('/instances');
  } catch (error) {
    
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
