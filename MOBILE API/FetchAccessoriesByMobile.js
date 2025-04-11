const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/m_db_connect");

async function fetchAccessoriesByMobiles(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("MobileAccessories");

    const { mobile_id } = req.params;

    const accessories = await collection
      .find({
        mobileId: ObjectId.createFromHexString(mobile_id),
        status: "Active",
      })
      .toArray();

    if (accessories.length == 0) {
      return res.status(404).json({ success: false, message: "No Data Found" });
    } else {
      console.log(accessories.length);
      return res
        .status(200)
        .json({ success: true, message: "Data Fetched", accessories });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = { fetchAccessoriesByMobiles };
