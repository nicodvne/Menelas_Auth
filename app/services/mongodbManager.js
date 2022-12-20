import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const clientOptions = {
    useNewUrlParser   : true,
    dbName            : 'user_collection'
};
 
export const setupMongoConnect = () => {
    try {
        mongoose.connect(process.env.MONGODB, clientOptions);
        console.log("MongoDb linked");
    } catch (error) {
        console.log(error);
    }
}