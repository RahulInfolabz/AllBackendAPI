const { ObjectId } = require('mongodb');
const ConnectDB = require ('../DB/db_connect');


async function AddInquiry(req,res) {
    try {
        const db = await ConnectDB()
        const collection = db.collection("Inquiry");

        const{packageId,customerName ,email,phone,eventDate,eventLocation,message} = req.body;

        if (!packageId || !customerName || !email || !phone || !eventDate || !eventLocation || !message) {
            return res.status(400).json({message: "All fields are required"});
        }

        
        await collection.insertOne(
            {
                packageId: ObjectId.createFromHexString(packageId),
                customerName,
                eventDate,
                eventLocation,
                email,
                phone,
                message,
                status: "Pending",
                timestamp: new Date()
            }
        );

        return res.status(200).json({message: "Inquiry Added"});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
    
}


module.exports = {AddInquiry};