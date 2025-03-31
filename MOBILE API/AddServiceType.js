const ConnectDB = require('../DB/m_db_connect');

async function AddServiceType(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("ServiceTypes");

        const { name, description } = req.body;

        await collection.insertOne({
            name,
            description,
            status: "Active",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Service Type Added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddServiceType };
