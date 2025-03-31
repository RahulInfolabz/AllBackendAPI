const ConnectDB = require('../DB/c_db_connect');

async function AddCarContact(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("ContactUs");

        const { name, email, phone, message } = req.body;

        await collection.insertOne({
            name,
            email,
            phone,
            message,
            status: "Pending",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Contact Inquiry Added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddCarContact };
