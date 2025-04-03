const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/m_db_connect");

async function AddMobile(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Mobiles");

    const {
      brandId,
      modelName,
      releaseYear,
      operatingSystem,
      batteryCapacity,
      displaySize,
      cameraSetup,
      officialWebsite,
      image,
      variants,
    } = req.body;

    // Validate required fields
    if (
      !brandId ||
      !modelName ||
      !image ||
      !variants ||
      variants.length === 0
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Convert brandId to ObjectId
    let objectBrandId;
    try {
      objectBrandId = ObjectId.createFromHexString(brandId);
    } catch (error) {
      return res.status(400).json({ message: "Invalid brandId format" });
    }

    // Validate variant pricing
    for (let variant of variants) {
      if (!variant.storage || !variant.ram || !variant.price) {
        return res.status(400).json({
          message: "Each variant must include storage, RAM, and price",
        });
      }
    }

    await collection.insertOne({
      brandId: objectBrandId,
      modelName,
      releaseYear,
      operatingSystem,
      batteryCapacity,
      displaySize,
      cameraSetup,
      officialWebsite,
      image,
      variants,
      status: "Active",
    });

    return res.status(201).json({ message: "Mobile Added Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddMobile };
