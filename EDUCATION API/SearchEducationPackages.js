const ConnectDB = require("../DB/t_db_connect");

async function SearchEducationPackages(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Packages");

    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Convert to string just in case someone passes a number
    const searchValue = String(query).trim();

    // Case-insensitive regex filter across relevant fields
    const filter = {
      $or: [
        { packageName: { $regex: searchValue, $options: "i" } },
        { "classDetails.grade": { $regex: searchValue, $options: "i" } },
        { subjects: { $regex: searchValue, $options: "i" } },
        { "teachers.name": { $regex: searchValue, $options: "i" } },
      ],
    };

    const data = await collection.find(filter).toArray();

    if (data.length === 0) {
      return res.status(404).json({ message: "No Data Found" });
    }

    return res.status(200).json({ message: "Data Fetched", packages: data });
  } catch (error) {
    console.error("Search Error:", error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { SearchEducationPackages };
