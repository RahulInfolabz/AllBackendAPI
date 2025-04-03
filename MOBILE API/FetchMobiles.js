const ConnectDB = require("../DB/m_db_connect");

async function fetchMobiles(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Mobiles");
    const mobiles = await collection.find().toArray();

    if (mobiles.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(mobiles.length);
      return res.status(200).json({ message: "Data Fetched", mobiles });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchMobiles };
