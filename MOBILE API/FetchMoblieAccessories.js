const ConnectDB = require("../DB/m_db_connect");

async function fetchMobileAccessories(req, res) {
  try {
    const db = await ConnectDB();
    console.log(db);
    const collection = db.collection("MobileAccessories");
    const accessories = await collection
      .find({
        status: "Active",
      })
      .toArray();

    if (accessories.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(accessories.length);
      return res.status(200).json({ message: "Data Fetched", accessories });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchMobileAccessories };
