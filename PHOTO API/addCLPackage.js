const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/db_connect");

async function AddCLPackages(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Packages");

    const { categoryId, name, description, price, features, duration, image } =
      req.body;

    await collection.insertOne({
      categoryId: ObjectId.createFromHexString(categoryId),
      name,
      description,
      price,
      features,
      duration,
      image,
      status: "Active",
    });

    return res.status(200).json({ message: "Package Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddCLPackages };
