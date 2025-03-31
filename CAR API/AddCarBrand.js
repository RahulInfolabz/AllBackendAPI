const ConnectDB = require('../DB/c_db_connect');

async function AddBrand(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("Brands");

        const { name, logo, country } = req.body;

        await collection.insertOne({
            name,
            logo,
            country,
            status: "Active",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Brand Added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddBrand };
