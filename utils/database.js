import mongoose from 'mongoose';

let isconnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);
    if (isconnected) {
        console.log('ALready Connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isconnected = true;

        console.log('Connected to db');
    } catch (error) {
        console.log('Error connecting to db', error);
        
    }
}