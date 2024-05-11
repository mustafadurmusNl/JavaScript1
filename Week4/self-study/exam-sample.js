/** DO NOT EDIT THE VISITOR LOGS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const visitorLogs = [
    { id: "visitor1", timestamp: 1620451200 }, // May 8, 2021 00:00:00 UTC
    { id: "visitor2", timestamp: 1620454800 }, // May 8, 2021 01:00:00 UTC
    { id: "visitor3", timestamp: 1620454800 }, // May 8, 2021 01:00:00 UTC
    { id: "visitor1", timestamp: 1620458400 }, // May 8, 2021 02:00:00 UTC
    { id: "visitor4", timestamp: 1620462000 }, // May 8, 2021 03:00:00 UTC
  ];
  /** DO NOT EDIT THE VISITOR LOGS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /**
   * Let's write a function that will count the number of unique visitors to the website based on the provided visitor logs.
   * Each visitor log entry has a visitor ID and a timestamp of their visit.
   * We want to count each visitor only once, even if they visited multiple times.
   *
   * You will need to iterate over the visitor logs array and count the number of unique visitors.
   * Hint: You may want to use array methods to help you achieve this.
   */
  const countUniqueVisitors = (logs = []) => {
    // Your code here
    const uniqueVisitors=[]
       let count=0;
       logs.filter(visitor=>{
     if(!uniqueVisitors.includes(visitor.id)){
        uniqueVisitors.push(visitor.id)
        count++;
            }
       })
       return count
  };
  console.log(countUniqueVisitors(visitorLogs))


  //ex2
  /** DO NOT EDIT THE MOVIE REVIEWS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const movieReviews = [
    { userId: "user1", rating: 4.5 },
    { userId: "user2", rating: 3.5 },
    { userId: "user3", rating: 5.0 },
    { userId: "user4", rating: 4.0 },
  ];
  /** DO NOT EDIT THE MOVIE REVIEWS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /**
   * Let's write a function that will calculate the average rating of a movie based on the provided reviews.
   * Each review contains a user ID and their rating for the movie.
   * We want to calculate the average rating by summing up all the ratings and dividing by the total number of reviews.
   *
   * You will need to iterate over the movie reviews array and calculate the average rating.
   * Hint: You may want to use array methods to help you achieve this.
   */
  const calculateAverageRating = (reviews = []) => {
    // Your code here
 const sum=reviews.reduce( (sum,current)=> sum+current.rating,0)
    return sum/reviews.length
};

console.log(calculateAverageRating(movieReviews))
//   const ratings=movieReviews.map(user=>user.rating 
// )
// console.log(ratings)



//ex3
/** DO NOT EDIT THE FOLLOWERS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const followers = [
    { id: "user1", username: "john_doe" },
    { id: "user2", username: "jane_smith" },
    { id: "user3", username: "alex123" },
  ];
  /** DO NOT EDIT THE FOLLOWERS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /** DO NOT EDIT THE FOLLOWING ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  const following = [
    { id: "user2", username: "jane_smith" },
    { id: "user4", username: "mike87" },
    { id: "user5", username: "sara_89" },
  ];
  /** DO NOT EDIT THE FOLLOWING ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /**
   * Let's write a function that will combine the user data from the followers and following arrays into a single array.
   * Each object in the resulting array should represent a unique user, containing their ID and username.
   * We want to remove any duplicate users.
   *
   * You will need to iterate over the followers and following arrays, combine the data, and remove duplicates.
   * Hint: You may want to use array methods like map(), filter(), and concat() to help you achieve this.
   */
  const combineUserData = (followers = [], following = []) => {
    // Your code here
    const resultingArray=[...followers]

    following.forEach(fallow=>{
       if(!resultingArray.some(result=>result.id===fallow.id)){//some() returns boolean
resultingArray.push(fallow)
       }
       
    })
return resultingArray

  };

  console.log(combineUserData(followers,following))

  //this gives only unique ids
    // const resultingArray=[]
    // followers.map(fallow=>{
    //    return resultingArray.push(fallow)
    // })
    //    following.forEach(fallow=>{
    //     if(!resultingArray.includes(fallow.id))
    //    return resultingArray.push(fallow.id)
    //    })
    //    return resultingArray


    //ex4
    /** DO NOT EDIT THE oldProfiles ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const oldProfiles = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];
  /** DO NOT EDIT THE oldProfiles ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /** DO NOT EDIT THE newProfiles ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  const newProfiles = [
    { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com" },
  ];
  /** DO NOT EDIT THE newProfiles ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /**
   * Let's write a function that will merge the user profiles from oldProfiles and newProfiles into a single array.
   * If a user exists in both arrays, the profile from newProfiles should overwrite the profile from oldProfiles.
   * 
   * You will need to iterate over the newProfiles array, check if each profile already exists in oldProfiles based on the ID,
   * and then either update the existing profile or add the new profile to the resulting array.
   */
  console.log(111)
  
  const mergeUserProfiles = (oldProfiles = [], newProfiles = []) => {
    const resultingArrayProfile = [];
  
    newProfiles.forEach(newProfile => {
      if (!oldProfiles.some(oldProfile => oldProfile.id === newProfile.id)) {
        resultingArrayProfile.push(newProfile);
      } else {
        const index = oldProfiles.findIndex(oldProfile => oldProfile.id === newProfile.id);
        oldProfiles[index] = newProfile; // Update the existing profile in oldProfiles with data from newProfile
      }
    });
  
    return [...oldProfiles, ...resultingArrayProfile];
  };
  
  
  // Test the function
  console.log(mergeUserProfiles(oldProfiles, newProfiles));


  //ex5

  /** DO NOT EDIT THE currentInventory ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const currentInventory = [
    { productId: 1, productName: "Product A", quantity: 10 },
    { productId: 2, productName: "Product B", quantity: 20 },
  ];
  /** DO NOT EDIT THE currentInventory ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /** DO NOT EDIT THE newInventory ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  const newInventory = [
    { productId: 2, productName: "Product B", quantity: 5 },
    { productId: 3, productName: "Product C", quantity: 15 },
  ];
  /** DO NOT EDIT THE newInventory ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /**
   * Let's write a function that will merge the product inventories from currentInventory and newInventory into a single array.
   * If a product exists in both arrays, the quantity from newInventory should be added to the quantity in currentInventory.
   * 
   * You will need to iterate over the newInventory array, check if each product already exists in currentInventory based on the productId,
   * and then either update the existing product's quantity or add the new product to the resulting array.
   */
  const mergeInventories = (currentInventory = [], newInventory = []) => {
    // Your code here
    const resultingArray=[...currentInventory]//  Yi creating a copy of currentInventory called resultingArray, which is a good practice to avoid mutating the original array.
      newInventory.forEach(newItem=>{
          const existingIndex=resultingArray.findIndex(currentItem=>currentItem.productId===newItem.productId)
          if(existingIndex!==-1){  //if the product exist
            resultingArray[existingIndex].quantity+=newItem.quantity
          }else{

            resultingArray.push(newItem)
          }
      })
        return resultingArray
  }; 
  
  // Test the function
  console.log(mergeInventories(currentInventory, newInventory));
  
  //ex6
  /** DO NOT EDIT THE currentUsers ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const currentUsers = [
    { userId: 1, username: "user1", email: "user1@example.com" },
    { userId: 2, username: "user2", email: "user2@example.com" },
  ];
  /** DO NOT EDIT THE currentUsers ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /** DO NOT EDIT THE newUsers ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  const newUsers = [
    { userId: 2, username: "newuser2", email: "newuser2@example.com" },
    { userId: 3, username: "newuser3", email: "newuser3@example.com" },
  ];
  /** DO NOT EDIT THE newUsers ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /**
   * Let's write a function that will merge the user lists from currentUsers and newUsers into a single array.
   * If a user exists in both arrays, the data from newUsers should overwrite the data from currentUsers.
   * 
   * You will need to iterate over the newUsers array, check if each user already exists in currentUsers based on the userId,
   * and then either update the existing user's data or add the new user to the resulting array.
   */
  const mergeUserLists = (currentUsers = [], newUsers = []) => {
    // Your code here
     const resultingArray=[...currentUsers]
     newUsers.forEach(newUser=>{
         const indexExit= resultingArray.findIndex(current=>current.userId===newUser.userId)
         if(indexExit!==-1){ // if there is a match
     const newX={
        userId: newUser.userId, username: newUser.username, email: newUser.email
  }
  resultingArray[indexExit]=newX
         }else{
      resultingArray.push(newUser)
         }
     })
return resultingArray

  };
  
  // Test the function
  console.log(mergeUserLists(currentUsers, newUsers));




  //ex7

/**
 * The developer team at your YouTube competitor company wants to add a colouring property to the tags.
 * This will require some data changes as right now every tag is a single string. The tags will have to become objects so that we can have a `name` and `color` property.
 *
 * Below you will find the beginning of the dbTags data (an array). Do not edit this, you will need to add things to this array in your function!
 */

/** DO NOT EDIT THE TAGS ARRAY MANUALLY! THIS IS MIMICING YOUR DATABASE **/
const dbTags = [
  {
    id: "t---1",
    name: "Programming",
    color: "#c4ef00",
  },
];
/** DO NOT EDIT THE TAGS ARRAY MANUALLY! THIS IS MIMICING YOUR DATABASE **/

/**
 * Let's write a function that will look at all the tags in the given videos array and adds the ones missing to our `dbTags` array.
 * Then we will have our tag data that we can later use to assign the tags with colors to our videos!
 *
 * You will need to go through the given videos array that will have the same structure as in question 2:
 * {
 *   id: string,
 *   title: string,
 *   tags: Array of strings
 * }
 *
 * Then per tag in the array, check if there is already a tag in `dbTags`, if not then add it and generate a new id and give it the default colour!
 */
const DEFAULT_COLOR = "#ffffff";
const extractTags = (videos = []) => {
      videos.forEach(video=>{
        video.tags.forEach(tag=>{
   const existingTag=dbTags.find(dbTag=>dbTag.name===tag)
   if(!existingTag){
    const newTag={
        id:`t---${dbTags.length+1}`,
        name:tag,
        color:DEFAULT_COLOR
    }
    dbTags.push(newTag)
   }
        })
      })
      return dbTags
};

/**
 * TEST CODE. DO NOT EDIT
 */
const testVideos = [
  {
    id: "v---1",
    title: "JavaScript for Beginners",
    tags: ["Programming", "JavaScript"],
  },
  {
    id: "v---2",
    title: "C# for Beginners",
    tags: ["Programming", "C#"],
  },
  {
    id: "v---3",
    title: "Cute panda begins to fall over",
    tags: ["Panda", "Animal"],
  },
];
console.log(extractTags(testVideos))

console.assert(dbTags.length === 5, "Should be 5 tags!");
console.assert(
  [...new Set(dbTags.map((dbTag) => dbTag.id))].length === 5,
  "All tag ids should be unique!"
);
console.assert(
  [...new Set(dbTags.map((dbTag) => dbTag.name))].length === 5,
  "All tag names should be unique!"
);


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
    const searchLowerCase=search.toLowerCase()
   return productList.filter(product=>{
    const nameMatchedProducts=product.name.toLowerCase().includes(searchLowerCase)
    const descMatchedProduct=product.description.toLowerCase().includes(searchLowerCase)
   const tagMatchedProducts= product.tags.some(tag=>tag.toLowerCase().includes(searchLowerCase))
   // Return true if either name, description, or tags match the search term
   return nameMatchedProducts||descMatchedProduct||tagMatchedProducts

   }
)
    
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
      tags: ["Gaming", "Computer"],
    },
    {
      id: "p3",
      name: "Digital Camera",
      description: "Capture beautiful moments with this camera",
      tags: ["Photography", "Camera"],
    },
  ];
 
 // console.log(findMatchingProducts(products, "phone")); // Expected output: [Product 1]
   console.log(findMatchingProducts(products, "camera")); // Expected output: [Product 1, Product 3]
   console.log(findMatchingProducts(products, "gaming")); // Expected output: [Product 2]
  console.log(findMatchingProducts(products, "powerful")); // Expected output: [Product 2]
  console.log(findMatchingProducts(products, "photography")); // Expected output: [Product 3]
  console.log(findMatchingProducts(products, "tablet")); // Expected output: []
  


//ex9  similar of aboce question
/**
 * You are building a music streaming platform where users can search for songs based on keywords.
 * Your task is to implement a function called findMatchingSongs that takes a list of songs and a search string as input
 * and returns the songs that match the search criteria.
 *
 * The song objects have the following structure:
 * {
 *   id: string,
 *   title: string,
 *   artist: string,
 *   genre: string,
 *   duration: number, // in seconds
 * }
 *
 * A song should be included in the result if the search string:
 * - Appears in the song title.
 * - Appears in the artist name.
 * - Matches the genre.
 *
 * The search should be case insensitive and can match anywhere in the word.
 * For example, the search string "love" should match a song with the title "Love Song"
 * and an artist named "John Love".
 *
 * Write a function called findMatchingSongs with the following signature:
 */

const findMatchingSongs = (songList = [], search = "") => {
    // Your code here
    const searchTerm=search.toLowerCase()
 return   songList.filter(song=>{
        const titleMatch= song.title.toLowerCase().includes(searchTerm)
        const artitstMatch=song.artist.toLowerCase().includes(searchTerm)
       const genreMatch= song.genre.toLowerCase().includes(searchTerm)
       return titleMatch||artitstMatch||genreMatch
    })
};

const songs = [
  {
    id: "s1",
    title: "Love Song",
    artist: "John Smith",
    genre: "Pop",
    duration: 240,
  },
  {
    id: "s2",
    title: "Summer Nights",
    artist: "Sara Johnson",
    genre: "Pop",
    duration: 200,
  },
  {
    id: "s3",
    title: "Rock Anthem",
    artist: "The Rock Band",
    genre: "Rock",
    duration: 180,
  },
  {
    id: "s4",
    title: "Jazz Vibes",
    artist: "Michael Jazz",
    genre: "Jazz",
    duration: 220,
  },
];

console.log(findMatchingSongs(songs, "love")); // Expected output: [Love Song]
console.log(findMatchingSongs(songs, "pop")); // Expected output: [Love Song, Summer Nights]
console.log(findMatchingSongs(songs, "rock")); // Expected output: [Rock Anthem]
console.log(findMatchingSongs(songs, "jazz")); // Expected output: [Jazz Vibes]
console.log(findMatchingSongs(songs, "summer")); // Expected output: [Summer Nights]
console.log(findMatchingSongs(songs, "john")); // Expected output: [Love Song]
console.log(findMatchingSongs(songs, "michael")); // Expected output: [Jazz Vibes]
