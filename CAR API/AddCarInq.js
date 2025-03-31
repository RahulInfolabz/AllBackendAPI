const { ObjectId } = require('mongodb');
const ConnectDB = require('../DB/c_db_connect');

async function AddCarInquiry(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("Inquiries");

        const { name, email, phone, brandId, carId, partTypeId, accessoryBrandId, accessoryId, message } = req.body;

        await collection.insertOne({
            name,
            email,
            phone,
            brandId: ObjectId.createFromHexString(brandId),
            carId: ObjectId.createFromHexString(carId),
            partTypeId: ObjectId.createFromHexString(partTypeId),
            accessoryBrandId: ObjectId.createFromHexString(accessoryBrandId),
            accessoryId: ObjectId.createFromHexString(accessoryId),
            message,
            status: "Pending",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Inquiry Added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddCarInquiry };
