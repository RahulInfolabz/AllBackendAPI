const { ObjectId } = require("mongodb");
const ConnectDB = require("../DB/t_db_connect");

async function AddEducationPackage(req, res) {
  try {
    const db = await ConnectDB();
    const collection = db.collection("Packages");

    // Destructuring all the required fields from the request body
    const {
      packageName,
      gradeId,
      subjects,
      teachers,
      description,
      maxStudent,
      price,
      discount,
      finalPrice,
      currency,
      image,
      duration,
      startDate,
      endDate,
      liveClasses,
      recordedClasses,
      learningMaterials,
      communityAccess,
      subscriptionType,
      status,
      languages,
    } = req.body;

    // Insert data into the Packages collection
    await collection.insertOne({
      packageName,
      gradeId: new ObjectId(gradeId), // Reference to the Grade collection
      subjects,
      teachers: teachers.map((teacherId) => new ObjectId(teacherId)), // Array of teacher references
      description,
      maxStudent,
      price,
      discount,
      finalPrice,
      currency,
      image,
      duration,
      startDate,
      endDate,
      liveClasses,
      recordedClasses,
      learningMaterials,
      communityAccess,
      subscriptionType,
      status: status || "Active", // Default status to Active
      languages,
    });

    return res.status(200).json({ message: "Package Added Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { AddEducationPackage };
