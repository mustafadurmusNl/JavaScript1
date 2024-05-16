
/**
 * You are developing a library management system that helps users find books based on their title or author.
 * It's time to implement the search functionality, which means we need a function that takes a list of books and a search string, 
 * and then returns the books that match the search criteria.
 *
 * The backend developer has provided the following structure for books:
 * {
 *   id: string,
 *   title: string,
 *   author: string,
 *   genre: string
 * }
 *
 * A book should be included in the list if the search string:
 * - is in the title somewhere
 * - OR is in the author's name somewhere
 *
 * The search should be case insensitive and can be anywhere in the word as well! 
 * So the search string `harry` should match a book with a title that includes `Harry Potter`. 
 * And the search string `owli` should also match a book with the author's name that includes `J.K. Rowling`.
 */

const findBooks = (bookList = [], search = "") => {
    const searchTerm=search.toLowerCase()
     return bookList.filter(book=> book.title.toLowerCase().includes(searchTerm)||
       book.author.toLowerCase().includes(searchTerm)
    
)


     
    

    









    // const searhTerm=  search.toLowerCase()
    // return bookList.filter( book=>                //no {} so no return explicitly insdie arrow function
    //   book.title.toLowerCase().includes(searhTerm)||book.author.toLowerCase().includes(searhTerm) )
  
  };
  
  /**
   * TEST CODE. DO NOT EDIT
   */
  const books = [
    {
      id: "b---1",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
    },
    {
      id: "b---2",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
    },
    {
      id: "b---3",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
    },
  ];
  
  console.log(findBooks(books, "owli"));

console.log(11111)



//ex8
/*
You are working on an e-commerce platform where users can search for products based on keywords. Your task is to implement a function called findMatchingProducts
that takes a list of products and a search string as input and returns the products that match the search criteria.

The product objects have the following structure:
{
  id: string,
  name: string,
  description: string,
  tags: Array of strings,
}
A product should be included in the result if the search string:

Appears in the product name.
Appears in the product description.
Matches any of the product tags.
The search should be case insensitive and can match anywhere in the word. For example, the search string phone should match a product with the name Smartphone
 and a product with the description This phone has a great camera. Similarly, the search string camera should match a product with the tag Digital Camera.

Write a function called findMatchingProducts with the following signature:
*/
const findMatchingProducts = (productList = [], search = "") => {
    // Your code here
        const searchTerm= search.toLowerCase()

   return productList.filter(product=>{
    const matchedName=product.name.toLowerCase().includes(searchTerm)            //returns boolean
    const matchedDesc=product.description.toLowerCase().includes(searchTerm)      //returns boolean
     const matchedTag=product.tags.some(tag=>tag.toLowerCase().includes(searchTerm))  //returns boolean
 return matchedName||matchedDesc||matchedTag//even if there is one true then filter() will return that product

  })

  };
  
  
  const products = [
    {
      id: "p1",
      name: "Smartphone",
      description: "This phone has a great camera",
      tags: ["Phone", "Camera"],
    },
    {
      id: "p2",
      name: "Laptop",
      description: "Powerful laptop for gaming",
      tags: ["Gaming", "Computer","one"],
    },
    {
      id: "p3",
      name: "Digital Camera",
      description: "Capture beautiful moments with this camera",
      tags: ["Photography", "Camera"],
    },
  ];
 console.log(3333)
 // console.log(findMatchingProducts(products, "phone")); // Expected output: [Product 1]
   console.log(findMatchingProducts(products, "camera")); // Expected output: [Product 1, Product 3]
//    console.log(findMatchingProducts(products, "gaming")); // Expected output: [Product 2]
//   console.log(findMatchingProducts(products, "powerful")); // Expected output: [Product 2]
//   console.log(findMatchingProducts(products, "photography")); // Expected output: [Product 3]
//   console.log(findMatchingProducts(products, "tablet")); // Expected output: []



