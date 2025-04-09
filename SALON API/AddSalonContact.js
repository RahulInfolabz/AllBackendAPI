const ConnectDB = require("../DB/s_db_connect");

async function AddSalonContact(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("ContactUs");

    const { name, email, subject, phone, message } = req.body;

    if (!name || !email || !subject || !phone || !message) {
      return res.status(200).json({ success:false, message: "All Fields Are Required!" });
    }
    await collection.insertOne({
      name,
      email,
      phone,
      subject,
      message,
      status: "Pending",
      timestamp: new Date(),
    });

    return res.status(200).json({success:true, message: "Contact Inquiry Submitted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddSalonContact };
