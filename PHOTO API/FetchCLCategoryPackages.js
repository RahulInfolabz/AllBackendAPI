const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/db_connect");

async function fetchCLCategoryPackages(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Packages");

    const { category_id } = req.params;
    const packages = await collection
      .find({ categoryId: ObjectId.createFromHexString(category_id) })
      .toArray();

    if (packages.length > 0) {
      return res.status(200).json({ message: "Data Fetched", Data: packages });
    } else {
      return res.status(404).json({ message: "No Data Found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { fetchCLCategoryPackages };
