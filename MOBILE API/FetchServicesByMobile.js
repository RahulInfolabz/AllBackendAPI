const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/m_db_connect");

async function fetchServicesByMobiles(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Services");

    const { mobile_id } = req.params;

    const services = await collection
      .find({
        mobileId: ObjectId.createFromHexString(mobile_id),
        status: "Active",
      })
      .toArray();

    if (services.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(services.length);
      return res.status(200).json({ message: "Data Fetched", services });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchServicesByMobiles };
