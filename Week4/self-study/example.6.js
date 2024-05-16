/*
Task: Product Inventory Management System
Background:

You're working on a project to develop an inventory management system for a retail company. The system needs to keep track of various products in stock, including their names, prices, and quantities available.

Requirements:

Define an initial array products that mimics the product data in your inventory database. Each product should have an id, name, price, and quantity property.
*/
const products = [
    {
      id: "p---1",
      name: "Laptop",
      price: 999.99,
      quantity: 10,
    },
    {
      id: "p---2",
      name: "Smartphone",
      price: 699.99,
      quantity: 20,
    },
    // Add more products as needed
  ];
  /*
  Write a function updateInventory that takes an array of purchased products and updates the inventory accordingly. 
  If a product already exists in the inventory, increase its quantity; otherwise, add it to the inventory.
  */
  const updateInventory = (purchasedProducts = []) => {
   purchasedProducts.forEach(purchaseProduct=>{
    const existingProductIndex=products.findIndex(product=>product.id===purchaseProduct.id)
   if(existingProductIndex!==-1){//if it exist 
     products[existingProductIndex].quantity+=purchaseProduct.quantity
   }else{
    const newProduct={
        id:purchaseProduct.id,
        name:'new product',
        price:0,
        quantity:purchaseProduct.quantity
    }
    products.push(newProduct)
   }
   })
return products

    // Iterate over purchased products
    // Check if each product already exists in the inventory
    // If yes, increase its quantity
    // If not, add it to the inventory
    // Return the updated inventory
  };
  /*
  Write test cases to ensure that updateInventory works correctly. Test cases should cover scenarios such as adding new products, increasing quantities of existing products, and edge cases like empty input.
  */
  const testPurchasedProducts = [
    { id: "p---1", quantity: 5 }, // Purchase 5 laptops
    { id: "p---2", quantity: 10 }, // Purchase 10 smartphones
    { id: "p---3", quantity: 3 }, // Purchase 3 tablets (new product)
  ];
 console.log(updateInventory(testPurchasedProducts)) 
  const updatedInventory = updateInventory(testPurchasedProducts);
  
  // Assert statements to validate the correctness of the updated inventory