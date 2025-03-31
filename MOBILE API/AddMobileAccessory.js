const ConnectDB = require('../DB/m_db_connect');

async function AddMobileAccessory(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("MobileAccessories");

        const { brandId, name, image, price, type, compatibleWith } = req.body;

        await collection.insertOne({
            brandId,
            name,
            image,
            price,
            type,
            compatibleWith,
            status: "Active",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Accessory Added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddMobileAccessory };
