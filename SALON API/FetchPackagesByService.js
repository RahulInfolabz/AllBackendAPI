const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/s_db_connect");

async function FetchSalonPackagesBySerivce(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Package");

    const { serviceId } = req.params;

    const data = await collection
      .find({ serviceId: ObjectId.createFromHexString(serviceId) })
      .toArray();

    if (data.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(data.length);
      return res
        .status(200)
        .json({ message: "Data Fetched", total: data.length, packages: data });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { FetchSalonPackagesBySerivce };
