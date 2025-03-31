const ConnectDB = require('../DB/m_db_connect');

async function AddMobile(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("Mobiles");

        const { brandId, name, image, price, specs } = req.body;

        await collection.insertOne({
            brandId,
            name,
            image,
            price,
            specs,
            status: "Active",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Mobile Added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddMobile };
