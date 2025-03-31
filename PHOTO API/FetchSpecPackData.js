const { ObjectId } = require('mongodb');
const ConnectDB = require('../DB/db_connect');


async function FetchSpecPackageData(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("Packages");

        const {categoryId} = req.body;
        const sensordata = await collection.find({categoryId: ObjectId.createFromHexString(categoryId)}).toArray();
        
        if (sensordata.length > 0){
            return res.status(200).json({message: "Data Fetched",Data : sensordata})
        }
        else{
            console.log(sensordata.length);
            return res.status(404).json({message: "No Data Found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
    
}


module.exports = {FetchSpecPackageData};