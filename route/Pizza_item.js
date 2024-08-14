const express = require("express");
const router = express.Router();
let item = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic Italian-style pizza",
    price: 12.99,
    category: "vegetarian",
    status: "available",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Spicy pepperoni and mozzarella cheese",
    price: 14.99,
    category: "meat lovers",
    status: "available",
  },
  {
    id: 3,
    name: "Veggie Delight",
    description: "Assortment of fresh vegetables",
    price: 13.99,
    category: "vegetarian",
    status: "available",
  },
  {
    id: 4,
    name: "Meat Lover's",
    description: "Combination of pepperoni, sausage, and bacon",
    price: 16.99,
    category: "meat lovers",
    status: "available",
  },
  {
    id: 5,
    name: "Hawaiian",
    description: "Ham and pineapple pizza",
    price: 15.99,
    category: "meat lovers",
    status: "available",
  },
];
//Getting the all item//
router.get("/", (req, res) => {
  res.send(item);
});
// Geting item by Id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  fitered_item = item.filter((item) => item.id == id);
  res.send(fitered_item);
});
// Adding New item
router.post("/", (req, res) => {
  item.push({
    id: req.query.id,
    name: req.query.name,
    description: req.query.description,
    price: req.query.price,
    category: req.query.category,
    status: req.query.status,
  });
  res.send("New Item has been added...");
});

// Update the item
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const index = item.findIndex((item) => item.id == id);

  if (index !== -1) {
    const updatedItem = item[index];
    updatedItem.name = req.query.name || updatedItem.name;
    updatedItem.description = req.query.description || updatedItem.description;
    updatedItem.price = req.query.price || updatedItem.price;
    updatedItem.category = req.query.category || updatedItem.category;
    updatedItem.status = req.query.status || updatedItem.status;
    res.send(`Item of ${id} is updated`);
  } else {
    res.send(`Unable to find item`);
  }
});
//delete item by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = item.filter((item) => item.id === id);

  if (index !== -1) {
    item.splice(index, 1);
    res.send(`Item with ID ${id} has been deleted.`);
  } else {
    res.status(404).send(`Item with ID ${id} not found.`);
  }
});

module.exports = router;
