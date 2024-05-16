/**
 * The development team at your project management tool company wants to add a "priority" property to tasks.
 * This will require some data changes as right now every task is a single object. The tasks will have to include a `priority` property.
 *
 * Below you will find the beginning of the tasks data (an array). Do not edit this, you will need to add things to this array in your function!
 */

/** DO NOT EDIT THE TASKS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const tasks = [
    {
      id: "t---1",
      title: "Design landing page",
      description: "Create wireframes and mockups for the landing page",
      status: "To Do",
    },
  ];
  /** DO NOT EDIT THE TASKS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /**
   * Let's write a function that will look at all the tasks in the given project and adds the ones missing to our `tasks` array.
   * Then we will have our task data that we can later use to assign priorities to our tasks!
   *
   * You will need to go through the given project tasks array that will have the same structure as in the initial tasks array:
   * {
   *   id: string,
   *   title: string,
   *   description: string,
   *   status: string
   * }
   *
   * Then for each task in the array:
   * - Check if there is already a task in `tasks` with the same id. If not, then add it with a default priority.
   */
  const DEFAULT_PRIORITY = "Medium";
  
  const updateTasks = (projectTasks = []) => {
    // for each task in the project tasks array
   
   projectTasks.forEach(projectTask=>{
        const existingId=tasks.find(task=>task.id===projectTask.id)
        if(!existingId){
            newTask={
                id:projectTask.id,
                title:projectTask.title,
                describtion:projectTask.describtion,
                status:projectTask.status,
                priority:DEFAULT_PRIORITY
            }
            tasks.push(newTask)
        }
   })
return tasks

  };
  
  /**
   * TEST CODE. DO NOT EDIT
   */
  const projectTasks = [
    {
      id: "t---1",
      title: "Design landing page",
      description: "Create wireframes and mockups for the landing page",
      status: "To Do",
    },
    {
      id: "t---2",
      title: "Implement authentication",
      description: "Set up user authentication and authorization",
      status: "In Progress",
    },
    {
      id: "t---3",
      title: "Add payment gateway integration",
      description: "Integrate payment gateway for processing transactions",
      status: "To Do",
    },
  ];
  
  console.log(updateTasks(projectTasks))

  //  another examle
  /**
 * The development team at your shopping list application company wants to add a "category" property to items.
 * This will require some data changes as right now every item is a single object. The items will have to include a `category` property.
 *
 * Below you will find the beginning of the items data (an array). Do not edit this, you will need to add things to this array in your function!
 */

/** DO NOT EDIT THE ITEMS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const items = [
    {
      id: "i---1",
      name: "Milk",
      quantity: 1,
      checked: false,
    },
  ];
  /** DO NOT EDIT THE ITEMS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
  
  /**
   * Let's write a function that will look at all the items in the given shopping list and adds the ones missing to our `items` array.
   * Then we will have our item data that we can later use to categorize our shopping list items!
   *
   * You will need to go through the given shopping list items array that will have the same structure as in the initial items array:
   * {
   *   id: string,
   *   name: string,
   *   quantity: number,
   *   checked: boolean
   * }
   *
   * Then for each item in the array:
   * - Check if there is already an item in `items` with the same id. If not, then add it with a default category.
   */
  const DEFAULT_CATEGORY = "Uncategorized";
  
  const updateItems = (shoppingListItems = []) => {
       shoppingListItems.forEach(listItem=>{
       const existingId= items.find(item=>item.id===listItem.id)
       if(!existingId){
      const  newItem={
            id: listItem.id,
            name: listItem.name,
            quantity: listItem.quantity,
            checked: listItem.checked,
            category:DEFAULT_CATEGORY

        }
        items.push(newItem)
       }
       })
return items

  };
  
  /**
   * TEST CODE. DO NOT EDIT
   */
  const shoppingListItems = [
    {
      id: "i---1",
      name: "Milk",
      quantity: 1,
      checked: false,
    },
    {
      id: "i---2",
      name: "Bread",
      quantity: 2,
      checked: false,
    },
    {
      id: "i---3",
      name: "Eggs",
      quantity: 12,
      checked: true,
    },
  ];
  
  console.log(updateItems(shoppingListItems));




 //abit advanced
 /**
 * The development team at your project management tool company wants to add an "estimated time" property to tasks.
 * This will require some data changes as right now every task is a single object. The tasks will have to include an `estimatedTime` property.
 *
 * Below you will find the beginning of the tasks data (an array). Do not edit this, you will need to add things to this array in your function!
 */

/** DO NOT EDIT THE TASKS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/
const taskAdvanced = [
  {
    id: "t---1",
    title: "Design landing page",
    description: "Create wireframes and mockups for the landing page",
    status: "To Do",
  },
];
/** DO NOT EDIT THE TASKS ARRAY MANUALLY! THIS IS MIMICKING YOUR DATABASE **/

/**
 * Let's write a function that will look at all the tasks in the given project and adds the ones missing to our `tasks` array.
 * Then we will have our task data that we can later use to plan our project timeline!
 *
 * You will need to go through the given project tasks array that will have the same structure as in the initial tasks array:
 * {
 *   id: string,
 *   title: string,
 *   description: string,
 *   status: string
 * }
 *
 * Then for each task in the array:
 * - Check if there is already a task in `tasks` with the same id. If not, then add it with a default estimated time.
 */
const DEFAULT_ESTIMATED_TIME = "2 hours";

const updateTasksAdvanced = (projectTasks = []) => {
  // for each task in the project tasks array
  projectTasks.forEach(projectTask => {
    const existingId=taskAdvanced.find(task=>task.id===projectTask.id)
    if(!existingId){
      newTask={
        id: projectTask.id,
    title: projectTask.title,
    description:projectTask.describtion,
    status: projectTask.status,
    estimated_time: DEFAULT_ESTIMATED_TIME
      }
      taskAdvanced.push(newTask)
    }
})
return taskAdvanced
}
/**
 * TEST CODE. DO NOT EDIT
 */
const projectTasksAdvanced = [
  {
    id: "t---1",
    title: "Design landing page",
    description: "Create wireframes and mockups for the landing page",
    status: "To Do",
  },
  {
    id: "t---2",
    title: "Implement authentication",
    description: "Set up user authentication and authorization",
    status: "In Progress",
  },
  {
    id: "t---3",
    title: "Add payment gateway integration",
    description: "Integrate payment gateway for processing transactions",
    status: "To Do",
  },
];

console.log(updateTasksAdvanced(projectTasksAdvanced));
console.log(12)

///an example for q2

/**
 * You are developing a project management tool that helps users find tasks based on their title or description.
 * It's time to implement the search functionality, which means we need a function that takes a list of tasks and a search string, and then returns the tasks that match the search criteria.
 *
 * The backend developer has provided the following structure for tasks:
 * {
 *   id: string,
 *   title: string,
 *   description: string,
 *   status: string
 * }
 *
 * A task should be included in the list if the search string:
 * - is in the title somewhere
 * - OR is in the description somewhere
 *
 * The search should be case insensitive and can be anywhere in the word as well! 
 * So the search string `design` should match a task with a title that includes `Design mockups`. 
 * And the search string `ocum` should also match the task with the description that includes `Document requirements`.
 */

const findTasks = (taskList = [], search = "") => {
  const searchTerm=search.toLowerCase()
     return     taskList.filter(task=>
         task.title.toLowerCase().includes(searchTerm)|| task.description.toLowerCase().includes(searchTerm)
              )
};

/**
 * TEST CODE. DO NOT EDIT
 */
const tasksQ2 = [
  {
    id: "t---1",
    title: "Design mockups",
    description: "Create wireframes and mockups for the landing page",
    status: "To Do",
  },
  {
    id: "t---2",
    title: "Implement authentication",
    description: "Set up user authentication and authorization",
    status: "In Progress",
  },
  {
    id: "t---3",
    title: "Document requirements",
    description: "Gather and document project requirements",
    status: "To Do",
  },
];
console.log(22)
console.log(findTasks(tasksQ2, "ocum"));


// a new exm of q2
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
  const searhTerm=  search.toLowerCase()
  return bookList.filter( book=>                //no {} so no return explicitly insdie arrow function
    book.title.toLowerCase().includes(searhTerm)||book.author.toLowerCase().includes(searhTerm) )

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
console.log(119)


  
  