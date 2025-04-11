const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/m_db_connect");

async function AddMobileAccessory(req, res) {
  try {
    const db = await ConnectDB();
    const accessoriesCollection = db.collection("MobileAccessories");
    const mobilesCollection = db.collection("Mobiles");

    const {
      mobileId,
      accessoryName,
      accessoryType,
      brand,
      image,
      price,
      description,
      availabilityStatus,
      warranty,
      officialWebsite,
    } = req.body;

    // Validate required fields
    if (
      !mobileId ||
      !accessoryName ||
      !accessoryType ||
      !brand ||
      !image ||
      !price
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Convert mobileId to ObjectId
    let objectMobileId;
    try {
      objectMobileId = ObjectId.createFromHexString(mobileId);
    } catch (error) {
      return res.status(400).json({ message: "Invalid mobileId format" });
    }

    // Fetch mobile name from Mobiles collection
    const mobile = await mobilesCollection.findOne({ _id: objectMobileId });

    if (!mobile) {
      return res.status(404).json({ message: "Mobile not found" });
    }

    await accessoriesCollection.insertOne({
      mobileId: objectMobileId,
      mobileName: mobile.modelName,
      accessoryName,
      accessoryType,
      brand,
      image,
      price,
      description,
      availabilityStatus,
      warranty,
      officialWebsite,
      status : "Active"
    });

    return res.status(201).json({ message: "Accessory Added Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddMobileAccessory };
