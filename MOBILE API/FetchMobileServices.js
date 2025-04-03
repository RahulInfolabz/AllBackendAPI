const ConnectDB = require("../DB/db_connect");

async function fetchMobileServices(req, res) {
  try {
    const db = await ConnectDB();
    console.log(db);
    const collection = db.collection("Services");
    const mobileBrands = await collection.find().toArray();

    if (mobileBrands.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(mobileBrands.length);
      return res.status(200).json({ message: "Data Fetched", mobileBrands });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchMobileServices };
