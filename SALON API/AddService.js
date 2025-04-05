const ConnectDB = require("../DB/s_db_connect");

async function AddService(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Service");

    const { name, category, description, gender, image } = req.body;
    console.log(name);
    console.log(category);
    console.log(description);
    console.log(gender);
    console.log(image);

    await collection.insertOne({
      name,
      category,
      description,
      gender,
      image,
      status: "Active",
    });

    return res.status(200).json({ message: "Service Added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddService };
