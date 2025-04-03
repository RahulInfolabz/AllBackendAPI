const ConnectDB = require ('../DB/db_connect');


async function AddCLContact(req,res) {
    try {
        const db = await ConnectDB()
        const collection = db.collection("Contact");

        const{name,email,phone,message} = req.body;

        await collection.insertOne(
            {
                name,
                email,
                phone,
                message,
                status: "Pending",
                timestamp: new Date()
            }
        );

        return res.status(200).json({message: "Contact Added"});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
    
}


module.exports = {AddCLContact};