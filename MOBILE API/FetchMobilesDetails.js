const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/m_db_connect");

async function fetchMobileDetails(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Mobiles");

    const { mobile_id } = req.params;

    const mobileDetails = await collection.findOne({
      _id: ObjectId.createFromHexString(mobile_id),
      status: "Active",
    });

    if (mobileDetails.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(mobileDetails.length);
      return res.status(200).json({ message: "Data Fetched", mobileDetails });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchMobileDetails };
