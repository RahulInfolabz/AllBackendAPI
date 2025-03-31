const ConnectDB = require('../DB/db_connect');


async function fetchCaptureLensInquiries(req, res) {
    try {
        const db = await ConnectDB();
        console.log(db);
        const collection = db.collection("Inquiry");
        const sensordata = await collection.find().toArray();
        
        if (sensordata.length == 0){
        return res.status(404).json({message: "No Data Found"});
        }
        else{
            console.log(sensordata.length);
            return res.status(200).json({message: "Data Fetched",Data : sensordata})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
    
}


module.exports = {fetchCaptureLensInquiries};