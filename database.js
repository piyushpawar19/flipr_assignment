// const mongoose = require('mongodb');

// module.exports = {
//     // MongoDB connection string
//     dbURI: 'mongodb://localhost:27017/admin_panel'
//   };

// const dbURI='mongodb://localhost:27017/admin_panel';

// const configDB = ()=> {
//   mongoose.connect('mongodb://localhost:27017/admin_panel', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));
// };

// module.exports = configDB;
const URL = 'mongodb+srv://flipr_assignment:piyush123@cluster0.0pdtyn8.mongodb.net/admin_panel';

const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(URL);

        console.log(`Database Connected: ${conn.connection.host}`);

    }catch(e){
        console.log(e);
    };
}


module.exports = connectDB;