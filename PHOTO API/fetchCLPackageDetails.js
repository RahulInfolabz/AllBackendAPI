const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/db_connect");

async function fetchCLPackageDetails(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Packages");

    const { package_id } = req.params;

    const data = await collection.findOne({ _id: new ObjectId(package_id) });

    if (data.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(data.length);
      return res.status(200).json({ message: "Data Fetched", Data: data });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchCLPackageDetails };
