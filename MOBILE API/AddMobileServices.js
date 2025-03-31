const ConnectDB = require('../DB/m_db_connect');

async function AddMobileService(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("Services");

        const { serviceTypeId, mobileId, name, price, details } = req.body;

        await collection.insertOne({
            serviceTypeId,
            mobileId,
            name,
            price,
            details,
            status: "Active",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Service Added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddMobileService };
