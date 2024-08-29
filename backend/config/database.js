const mongoose = require('mongoose');


const connectedToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://faheemakhtar19730:course@cluster0.tvmmvdg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports = { connectedToDatabase }

