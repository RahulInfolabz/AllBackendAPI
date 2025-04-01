const ConnectDB = require("../DB/c_db_connect");

async function AddAccessoryBrand(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("AccessoryBrands");

    const { name, description, logo } = req.body;

    await collection.insertOne({
      name,
      description,
      logo,
      status: "Active",
      timestamp: new Date(),
    });

    return res.status(200).json({ message: "Accessory Brand Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddAccessoryBrand };
