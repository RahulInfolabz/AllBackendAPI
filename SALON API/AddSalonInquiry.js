const ConnectDB = require('../DB/s_db_connect');

async function AddSalonInquiry(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("Inquiry");

        const { packageId, customerName, email, phone, preferredDate, additionalDetails } = req.body;

        await collection.insertOne({
            packageId,  
            customerName,
            email,
            phone,
            preferredDate,
            additionalDetails,
            status: "Pending",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Inquiry Submitted" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddSalonInquiry };
