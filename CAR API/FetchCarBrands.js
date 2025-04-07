const ConnectDB = require("../DB/c_db_connect");

async function FetchCarBrands(req, res) {
  try {
    const db = await ConnectDB();
    console.log(db);
    const collection = db.collection("Brands");
    const Brands = await collection.find().toArray();

    if (Brands.length == 0) {
      return res.status(404).json({ message: "No Data Found" });
    } else {
      console.log(Brands.length);
      return res.status(200).json({ message: "Data Fetched", Brands });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { FetchCarBrands };
