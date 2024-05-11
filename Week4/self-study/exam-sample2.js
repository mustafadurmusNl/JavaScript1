//ex1
/**    very similar with sample question03
 * You are building a recipe app where users can search for recipes based on ingredients. Your task is to implement a function called findRecipes
 * that takes a list of recipes and a list of ingredients as input and returns the recipes that contain all of the specified ingredients.
 *
 * The recipe objects have the following structure:
 * {
 *   id: string,
 *   name: string,
 *   ingredients: Array of strings,
 * }
 *
 * A recipe should be included in the result if it contains all of the specified ingredients.
 *
 * Write a function called findRecipes with the following signature:
 */
const findRecipes = (recipeList = [], ingredients = []) => {
    // Your code here
     searchedRecipe = recipeList.filter(recipe => {
         return ingredients.every(ingredient=>recipe.ingredients.includes(ingredient) )
    });
return searchedRecipe[0].name
};

const recipes = [
  {
    id: "r1",
    name: "Pasta Carbonara",
    ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese"],
  },
  {
    id: "r2",
    name: "Chicken Curry",
    ingredients: ["Chicken", "Onion", "Tomato", "Curry Powder"],
  },
  {
    id: "r3",
    name: "Vegetable Stir-Fry",
    ingredients: ["Broccoli", "Carrot", "Bell Pepper", "Soy Sauce"],
  },
];

console.log(findRecipes(recipes, ["Spaghetti", "Bacon"])); // Expected output: [Pasta Carbonara]
console.log(findRecipes(recipes, ["Chicken", "Onion", "Tomato"])); // Expected output: [Chicken Curry]
console.log(findRecipes(recipes, ["Broccoli", "Carrot"])); // Expected output: [Vegetable Stir-Fry]
console.log(findRecipes(recipes, ["Chicken", "Tomato"])); // Expected output: []


//ex2
/**
 * You are building a user management system for a social media platform. Your task is to implement a function called findMatchingUsers
 * that takes a list of user profiles and a search string as input and returns the user profiles that match the search criteria.
 *
 * The user profile objects have the following structure:
 * {
 *   id: string,
 *   username: string,
 *   email: string,
 *   interests: Array of strings,
 * }
 *
 * A user profile should be included in the result if the search string:
 * - Appears in the username.
 * - Appears in the email.
 * - Matches any of the user's interests.
 *
 * The search should be case insensitive and can match anywhere in the word.
 *
 * Write a function called findMatchingUsers with the following signature:
 */
const findMatchingUsers = (userProfiles = [], searchString = "") => {
    // Your code here
    const searchTerm=searchString.toLowerCase()
     const userMatch= userProfiles.filter(user=>{

       const usernameMatch=user.username.toLowerCase().includes(searchTerm)
       const emailMatch=user.email.toLowerCase().includes(searchTerm)
     const interestMatch=  user.interests.some(interest=>interest.toLowerCase().includes(searchTerm))
     return usernameMatch||emailMatch||interestMatch
      })
      return userMatch
};

// Test data
const userProfiles = [
  {
    id: "u1",
    username: "john_doe",
    email: "john.doe@example.com",
    interests: ["Programming", "Reading", "Music"],
  },
  {
    id: "u2",
    username: "jane_smith",
    email: "jane.smith@example.com",
    interests: ["Hiking", "Cooking", "Photography"],
  },
  {
    id: "u3",
    username: "alex123",
    email: "alex123@gmail.com",
    interests: ["Traveling", "Gaming", "Movies"],
  },
];

// Test cases
//console.log(findMatchingUsers(userProfiles, "john")); // Expected output: [john_doe]
console.log(findMatchingUsers(userProfiles, "example")); // Expected output: [john_doe, jane_smith]
// console.log(findMatchingUsers(userProfiles, "music")); // Expected output: [john_doe]
// console.log(findMatchingUsers(userProfiles, "gaming")); // Expected output: [alex123]
// console.log(findMatchingUsers(userProfiles, "books")); // Expected output: []



//ex3
/**
 * You are building a task management system for a project management tool. Your task is to implement a function called filterTasks
 * that takes a list of tasks and a filter object as input and returns the tasks that match the filter criteria.
 *
 * The task objects have the following structure:
 * {
 *   id: string,
 *   title: string,
 *   description: string,
 *   priority: string, // Can be "High", "Medium", or "Low"
 *   status: string, // Can be "To Do", "In Progress", or "Done"
 *   assignedTo: string, // Username of the user assigned to the task
 *   dueDate: string, // Format: "YYYY-MM-DD"
 * }
 *
 * The filter object can have the following properties:
 * - priority: string // Can be "High", "Medium", or "Low"
 * - status: string // Can be "To Do", "In Progress", or "Done"
 * - assignedTo: string // Username of the user assigned to the task
 * - dueDate: string // Format: "YYYY-MM-DD"
 *
 * A task should be included in the result if it matches all of the specified filter criteria.
 *
 * Write a function called filterTasks with the following signature:
 */
const filterTasks = (tasks = [], filter = {}) => {
  // Your code here
  return tasks.filter(task=>{

    return (
      (!filter.priority || filter.priority === task.priority) &&
      (!filter.status || filter.status === task.status) &&
      (!filter.assignedTo || filter.assignedTo === task.assignedTo) &&
      (!filter.dueDate || filter.dueDate === task.dueDate)
  );
  })
};

// Test data
const tasks = [
{
  id: "t1",
  title: "Implement user authentication",
  description: "Implement user authentication using JWT",
  priority: "High",
  status: "In Progress",
  assignedTo: "john_doe",
  dueDate: "2024-06-15",
},
{
  id: "t2",
  title: "Design database schema",
  description: "Design the database schema for the project",
  priority: "Medium",
  status: "To Do",
  assignedTo: "jane_smith",
  dueDate: "2024-06-20",
},
{
  id: "t3",
  title: "Refactor codebase",
  description: "Refactor existing codebase to improve performance",
  priority: "High",
  status: "To Do",
  assignedTo: "alex123",
  dueDate: "2024-06-25",
},
];
console.log(11111)
// Test cases
console.log(filterTasks(tasks, { priority: "High", status: "To Do" })); // Expected output: [Task 3]
// console.log(filterTasks(tasks, { status: "In Progress", assignedTo: "john_doe" })); // Expected output: [Task 1]
// console.log(filterTasks(tasks, { priority: "Medium", dueDate: "2024-06-20" })); // Expected output: [Task 2]
// console.log(filterTasks(tasks, { status: "Done" })); // Expected output: []




//ex4
/**
 * Your team is working on a social media platform. Currently, posts are represented as strings, but the team wants to introduce
 *  more details by turning each post into an object.
 * Each post object will have properties like `id`, `content`, `author`, and `likes`.
 *
 * Below you will find the beginning of the posts data (an array). Do not edit this, you will need to add things to this array in your function!
 */

/** DO NOT EDIT THE POSTS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const posts = [
  {
    id: "p---1",
    content: "Hello, world!",
    author: "user123",
    likes: 10,
  },
];
/** DO NOT EDIT THE POSTS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/

/**
 * Write a function named `extractPosts` that will look at all the posts in the given feed array and adds the ones missing to our `posts` array.
 * Then we will have our post data that we can later use to display posts on our platform!
 *
 * You will need to go through the given feed array that will have the same structure as in question 2:
 * {
 *   id: string,
 *   user: string,
 *   posts: Array of strings
 * }
 *
 * Then per post in the array, check if there is already a post in `posts`, if not then add it and generate a new id and set
 *  the default value for `likes` to 0!
 */
const DEFAULT_LIKES = 0;
const extractPosts = (feed = []) => {
  // Your code here
  feed.forEach(testfeed=>{
     testfeed.posts.forEach(postfeed=>{
const existingPost=posts.find(post=>post.content===postfeed)
if(!existingPost){
  const newPost={
    id: `p---${posts.length+1}`,
    content: postfeed,
    author: testfeed.user,
    likes: DEFAULT_LIKES,
  }
  posts.push(newPost)
}
     })

  })
  return posts
};

/**
 * TEST CODE. DO NOT EDIT
 */
const testFeed = [
  {
    id: "u---1",
    user: "user123",
    posts: ["Good morning!", "Happy Friday!"],
  },
  {
    id: "u---2",
    user: "user456",
    posts: ["Just posted a new photo.", "Feeling excited!"],
  },
];

console.assert(posts.length === 4, "Should be 4 posts!");
console.assert(
  [...new Set(posts.map(post => post.id))].length === 4,
  "All post ids should be unique!"
);
console.assert(
  [...new Set(posts.map(post => post.content))].length === 4,
  "All post contents should be unique!"
);
console.log(11111)
console.log(posts);
console.log(2222)
console.log(extractPosts(testFeed))
console.log(3333)
console.log(extractPosts(testFeed))


//ex5
