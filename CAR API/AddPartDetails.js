const ConnectDB = require('../DB/c_db_connect');

async function AddPartType(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("PartTypes");

        const { name, description, image } = req.body;

        await collection.insertOne({
            name,
            description,
            image,
            status: "Active",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Part Type Added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddPartType };
