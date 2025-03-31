const ConnectDB = require('../DB/m_db_connect');

async function AddMobileInquiry(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("Inquiry");

        const { name, email, phone, brandId, mobileId, serviceTypeId, message } = req.body;

        await collection.insertOne({
            name,
            email,
            phone,
            brandId,
            mobileId,
            serviceTypeId,
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

module.exports = { AddMobileInquiry };
