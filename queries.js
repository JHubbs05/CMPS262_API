const getInventory = "SELECT * FROM 'Classes'";
const getInventoryById = "select * from classes where id = $1";

module.exports = {
    getInventory,
    getInventoryById,
};