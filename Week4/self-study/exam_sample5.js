/**
 * Your e-commerce website is enhancing its recommendation engine to suggest products to users based on their purchase history.
 * You are tasked with implementing the algorithm to find the next recommended product for the user to maximize engagement.
 *
 * The function will be given a users array, a products array, and the userId for whom to provide the next recommended product.
 *
 * A user has the structure:
 * {
 *  id: string,
 *  purchasedProductIds: Array of strings
 * }
 *
 * A product has the structure:
 * {
 *  id: string,
 *  name: string,
 *  categories: Array of strings
 * }
 *
 * The decision has been made that the way to find the next recommended product is to look at the purchased products of the user
 * and find the product that has the most categories in common with the categories of the products the user already purchased.
 *
 * Some tips:
 *
 * First, you will need to find out which products were purchased by the user with the given `userId` parameter.
 * Then you will need to grab the categories from the purchased products.
 * With those categories, you can go through the products array and find the product that has the most categories in common!
 */
const recommendedNextProduct = (users = [], products = [], userId = null) => {
    // Find the categories of the purchased products
    const purchasedCategories = [];
    const purchasedProductIds = users.find(user => user.id === userId).purchasedProductIds;
  
    purchasedProductIds.forEach(productId => {
      const purchasedProduct = products.find(product => product.id === productId);
      purchasedProduct.categories.forEach(category => {
        purchasedCategories.push(category);
      });
    });
  
    // Create a list of products that the user has not purchased yet
    const nonPurchasedProducts = products.filter(product => !purchasedProductIds.includes(product.id));
  
    // Find the product with the most categories in common with the purchased product categories
    let currentRecommendedProduct = null;
    let currentRecommendedCount = 0;
    nonPurchasedProducts.forEach(product => {
      let count = 0;
      product.categories.forEach(category => {
        if (purchasedCategories.includes(category)) {
          count++;
        }
      });
  
      if (currentRecommendedProduct === null || count >= currentRecommendedCount) {
        currentRecommendedProduct = product;
        currentRecommendedCount = count;
      }
    });
  
    // Return the id of the most recommended product
    return currentRecommendedProduct.id;
  };
  
  /**
   * TEST CODE. DO NOT EDIT
   */
  const testCategories = [
    { id: "c---1", name: "Electronics" },
    { id: "c---2", name: "Clothing" },
    { id: "c---3", name: "Books" },
    { id: "c---4", name: "Home Decor" },
    { id: "c---5", name: "Fitness" },
  ];
  const testProducts = [
    {
      id: "p---1",
      name: "Smartphone",
      categories: ["c---1", "c---4"],
    },
    {
      id: "p---2",
      name: "T-shirt",
      categories: ["c---2", "c---5"],
    },
    {
      id: "p---3",
      name: "Fiction Book",
      categories: ["c---3"],
    },
    {
      id: "p---4",
      name: "Throw Pillow",
      categories: ["c---4"],
    },
  ];
  const testUsers = [
    {
      id: "u---1",
      purchasedProductIds: ["p---1"],
    },
    {
      id: "u---2",
      purchasedProductIds: ["p---2"],
    },
  ];
  const firstUserRecommendation = recommendedNextProduct(
    testUsers,
    testProducts,
    "u---1"
  );
  console.assert(
    firstUserRecommendation === "p---4" || firstUserRecommendation === "p---3"
  );
  console.assert(
    recommendedNextProduct(testUsers, testProducts, "u---2") === "p---1"
  );
  console.log(129)
  const purchasedProductIds = testUsers.find(user => user.id === 'u---1').purchasedProductIds;
  console.log(typeof purchasedProductIds)//object   but in js arrays are tecnically a type of object
  console.log(Array.isArray(purchasedProductIds)); // This will log 'true' if purchasedProductIds is an array and it logs  true
  console.log(11111)
  const array=["ali","veli"]
  console.log(array.includes("li"))//false
  const string="hello"
  console.log(string.includes("ello"))//true