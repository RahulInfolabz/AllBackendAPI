const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/s_db_connect");

async function FetchSalonPackageDetails(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Package");

    const { packageId } = req.params;

    const data = await collection.findOne({
      _id: ObjectId.createFromHexString(packageId),
    });

    if (data.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(data.length);
      return res
        .status(200)
        .json({ message: "Data Fetched", packageDetails: data });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { FetchSalonPackageDetails };
