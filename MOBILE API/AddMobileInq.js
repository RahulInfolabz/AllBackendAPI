const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/m_db_connect");

async function AddMobileAccessoryInquiry(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("AccessoriesInquiry");

    const { name, email, phone, accessoryId, message } = req.body;

    await collection.insertOne({
      accessoryId: accessoryId
        ? ObjectId.createFromHexString(accessoryId)
        : null,
      name,
      email,
      phone,
      message,
      status: "Pending",
      timestamp: new Date(),
    });

    return res
      .status(200)
      .json({ success: true, message: "Accessory Inquiry Added !" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = { AddMobileAccessoryInquiry };
