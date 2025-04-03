const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/m_db_connect");

async function AddMobileService(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Services");

    const {
      mobileId,
      serviceName,
      serviceType,
      brand,
      price,
      description,
      availabilityStatus,
      warranty,
      estimatedTime,
      serviceCenter,
      officialWebsite,
    } = req.body;

    // Ensure required fields are not null or empty
    if (!mobileId || !serviceName || !serviceType || !brand || !price) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    await collection.insertOne({
      mobileId: ObjectId.createFromHexString(mobileId),
      serviceName,
      serviceType,
      brand,
      price,
      description,
      availabilityStatus,
      warranty,
      estimatedTime,
      serviceCenter,
      officialWebsite,
    });

    return res.status(200).json({ message: "Service Added Successfully!" });
  } catch (error) {
    console.error("Error adding service:", error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddMobileService };
