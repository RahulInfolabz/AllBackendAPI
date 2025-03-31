const ConnectDB = require ('../DB/db_connect');


async function AddCategory(req,res) {
    try {
        const db = await ConnectDB()
        const collection = db.collection("Category");

        const{name,description,image} = req.body;

        await collection.insertOne(
            {
                name,
                description,
                image,
                status: "Active",
                timestamp: new Date()
            }
        );

        return res.status(200).json({message: "Category Added"});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
    
}


module.exports = {AddCategory};