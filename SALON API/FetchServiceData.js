const ConnectDB = require("../DB/s_db_connect");

async function FetchServiceData(req, res) {
  try {
    const db = await ConnectDB();
    console.log(db);
    const collection = db.collection("Service");
    const data = await collection.find().toArray();

    if (data.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(data.length);
      return res.status(200).json({ message: "Data Fetched", services: data });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { FetchServiceData };
