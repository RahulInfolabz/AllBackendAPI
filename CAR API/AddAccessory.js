const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/c_db_connect");

async function AddAccessory(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Accessories");

    const {
      brandId,
      carId,
      partTypeId,
      name,
      price,
      stock,
      image,
      description,
    } = req.body;

    await collection.insertOne({
      brandId: ObjectId.createFromHexString(brandId),
      carId: ObjectId.createFromHexString(carId),
      partTypeId: ObjectId.createFromHexString(partTypeId),
      name,
      price,
      stock,
      image,
      description,
      status: "Active",
      timestamp: new Date(),
    });

    return res.status(200).json({ message: "Accessory Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddAccessory };
