const ConnectDB = require("../DB/m_db_connect");

async function AddMobileBrand(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Brands");

    const {
      brandName,
      logo,
      originCountry,
      foundedYear,
      popularModels,
      officialWebsite,
      category,
    } = req.body;

    // Validation: Check for missing required fields
    if (
      !brandName ||
      !logo ||
      !originCountry ||
      !foundedYear ||
      !popularModels ||
      !officialWebsite ||
      !category
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await collection.insertOne({
      brandName,
      logo,
      originCountry,
      foundedYear,
      popularModels,
      officialWebsite,
      category,
      status: "Active",
    });

    return res.status(200).json({ message: "Brand Added Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddMobileBrand };
