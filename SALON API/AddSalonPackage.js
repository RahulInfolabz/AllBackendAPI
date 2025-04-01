const ConnectDB = require("../DB/s_db_connect");

async function AddPackage(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Package");

    const { name, servicesId, price, image } = req.body;

    await collection.insertOne({
      name,
      servicesId, // Expecting an array of service IDs
      price,
      image,
      description,
      status: "Active",
      timestamp: new Date(),
    });

    return res.status(200).json({ message: "Package Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddPackage };
