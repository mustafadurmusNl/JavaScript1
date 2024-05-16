

console.log(1111)
//mock exam question4
/**
 * Your YouTube competitor is really getting popular and it is now possible to favorite videos.
 * You are in charge of writing the algorithm to find the next recommended video to keep the user on the platform.
 *
 * The function will be given a users array, a videos array and the userId for who to provide the next recommended video.
 *
 * A user has the structure:
 * {
 *  id: string,
 *  favoritedVideoIds: Array of strings
 * }
 *
 * A video has the structure:
 * {
 *  id: string,
 *  title: string,
 *  tags: Array of strings
 * }
 *
 * The decision has been made that the way to find the next recommended video is to look at the favorited videos of the user 
 * and look for the video that has the most tags in common with the tags of the videos the user already favorited.
 * 
 * Some tips:
 *
 * First you will need to find out which video's were favorited by the user with the given `userId` parameter
 * Then you will need to grab the tags from the favorited videos.
 * With those tags, you can go through the videos array and find the video that has the most tags in common!
 */

const recommendedNextVideo = (users = [], videos = [], userId = null) => {
  const user= users.find(user=>user.id===userId)
  if(!user||!user.favoritedVideoIds.length) return null
   const favoritedVideos=videos.filter(video=>user.favoritedVideoIds.includes(video.id))
    const userTags=favoritedVideos.flatMap(video=>video.tags)
             //console.log(userTags)  //[ 't---1', 't---3' ]
     const tagCounts=new Map()   //It creates a Map called tagCounts to store the count of occurrences of each tag.
     userTags.forEach(tag=>{
        tagCounts.set(tag,(tagCounts.get(tag)||0)+1)
     })
            // console.log(tagCounts)   //Map(2) { 't---1' => 1, 't---3' => 1 }
      let maxCommonTags = 0;
     let recommendedVideoId = null;
           
    videos.forEach(video => {
              if (!user.favoritedVideoIds.includes(video.id)) { // Check if the video is not already favorited
                let commonTags = 0;
                video.tags.forEach(tag => {
                  if (tagCounts.has(tag)) {
                    commonTags++;
                  }
                });
                if (commonTags > maxCommonTags) {
                  maxCommonTags = commonTags;
                  recommendedVideoId = video.id;
                }
              }
            });
            
            return recommendedVideoId;
                     

   

  
    
    
  };
  
  /**
   * TEST CODE. DO NOT EDIT
   */
  const testTags = [
    { id: "t---1", name: "Programming", color: "#c4ef00" },
    { id: "t---2", name: "JavaScript", color: "#ffffff" },
    { id: "t---3", name: "C#", color: "#ffffff" },
    { id: "t---4", name: "Panda", color: "#ffffff" },
    { id: "t---5", name: "Animal", color: "#ffffff" },
  ];
  const testVideos = [
    {
      id: "v---1",
      title: "JavaScript for Beginners",
      tags: ["t---1", "t---2"],
    },
    {
      id: "v---2",
      title: "C# for Beginners",
      tags: ["t---1", "t---3"],
    },
    {
      id: "v---3",
      title: "Cute panda begins to fall over",
      tags: ["t---4", "t---5"],
    },
    {
      id: "v---4",
      title: "9th Symphony in C#",
      tags: ["t---3"],
    },
  ];
  const testUsers = [
    {
      id: "u---1",
      favoritedVideoIds: ["v---2"],
    },
    {
      id: "u---2",
      favoritedVideoIds: ["v---4"],
    },
  ];
//   const firstUserRecommendation = recommendedNextVideo(
//     testUsers,
//     testVideos,
//     "u---1"
//   );

  console.log(recommendedNextVideo(testUsers, testVideos,"u---1"))  // v---1

//   console.assert(
//     firstUserRecommendation === "v---1" || firstUserRecommendation === "v---4"
//   );
//   console.assert(
//     recommendedNextVideo(testUsers, testVideos, "u---2") === "v---2"
//   );







// console.log(99)
// // Bir Map oluştur
// let myMap = new Map();

// // Anahtar/değer çiftlerini ekleyin
// myMap.set("anahtar1", "değer1");
// myMap.set("anahtar2", "değer2");
// myMap.set("anahtar3", "değer3");

// // Bir anahtara karşılık gelen değeri al
// console.log(myMap.get("anahtar1")); // Çıktı: değer1

// // Map'te belirli bir anahtarın olup olmadığını kontrol et
// console.log(myMap.has("anahtar2")); // Çıktı: true

// // Map'teki tüm anahtar/değer çiftlerini dolaş
// myMap.forEach(function(deger, anahtar) {
//   console.log('${anahtar}: ${deger}');

// });

// // Belirli bir anahtarı Map'ten kaldır
// myMap.delete("anahtar3");

// // Map'in boyutunu al
// console.log(myMap.size); // Çıktı: 2

// const arr1 = [1, 2, 3, 4];
//  const c=arr1.map(num=>num*5)
//  console.log(c)//[ 5, 10, 15, 20 ]

// const a=arr1.map((x) => [x * 2]);
// console.log(a)// [[2], [4], [6], [8]]

// const b=arr1.flatMap((x) => [x * 2]);
// console.log(b)  // [2, 4, 6, 8]
// // only one level is flattened
// arr1.flatMap((x) => [[x * 2]]);
// // [[2], [4], [6], [8]]