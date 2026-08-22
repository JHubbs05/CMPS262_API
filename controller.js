const pool = require('../../db');
const queries = require('./queries');

const getInventory = (req, res) => {
    pool.query(queries.getInventory,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

//controller filter based on Id
const getInventoryById = (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) {
        return res.status(400).json({error: "Invalid Value"})
    }
    console.log("Received Id");
    pool.query(queries.getInventoryById, [id], (error, results) => {
        if(error){
            console.error("Database Error", error);
            return res.status(500).json({error: "Not Found"});
        }
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getInventory,
    getInventoryById,
};