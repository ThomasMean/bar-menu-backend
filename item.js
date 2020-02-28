const items = require("./data/items.json");

var getItem = (args) => {
    const itemId = args.id;
    return items.filter(item => item.id == itemId)[0];
}
var retrieveItems = (args) => items

module.exports = { getItem, retrieveItems }