const ConnectDB = require('../DB/t_db_connect');

async function AddEducationPackage(req, res) {
    try {
        const db = await ConnectDB();
        const collection = db.collection("Packages");

        const { name, classes, price, image } = req.body;

        await collection.insertOne({
            name,
            classes,  // Array of class IDs
            price,
            image,
            status: "Active",
            timestamp: new Date()
        });

        return res.status(200).json({ message: "Package Added Successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { AddEducationPackage };
