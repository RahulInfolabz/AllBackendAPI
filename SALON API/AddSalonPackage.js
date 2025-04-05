const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/s_db_connect");

async function AddPackage(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Package");

    const {
      serviceId, // single service ID as foreign key
      packageName,
      details,
      features,
      gender,
      image,
      durationMinutes,
      price,
      rating,
      isPopular,
      stylistLevel,
      packageType,
      suitableFor,
    } = req.body;

    console.log(req.body);

    await collection.insertOne({
      serviceId: ObjectId.createFromHexString(serviceId),
      packageName,
      details,
      features,
      gender,
      image,
      durationMinutes,
      price,
      rating,
      isPopular,
      stylistLevel,
      packageType,
      suitableFor,
    });

    return res.status(200).json({ message: "Package Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddPackage };
