const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/m_db_connect");

async function AddMobileServiceInquiry(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("ServicesInquiry");

    const { name, email, phone, serviceId, message } = req.body;

    await collection.insertOne({
      serviceId: serviceId ? ObjectId.createFromHexString(serviceId) : null,
      name,
      email,
      phone,
      message,
      status: "Pending",
      timestamp: new Date(),
    });

    return res
      .status(200)
      .json({ success: true, message: "Service Inquiry Added !" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = { AddMobileServiceInquiry };
