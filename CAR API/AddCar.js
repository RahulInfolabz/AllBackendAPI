const { ObjectId } = require('mongodb');
const ConnectDB = require('../DB/c_db_connect');

async function AddCar(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("Cars");

        const { brandId, name, year, image } = req.body;

        await collection.insertOne({
            brandId: ObjectId.createFromHexString(brandId),
            name,
            year,
            image,
            status: "Active",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Car Added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddCar };
