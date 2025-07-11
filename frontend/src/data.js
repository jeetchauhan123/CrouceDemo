// export const userModules = {
//   users: [
//     {
//       userId: "user1",
//       name: "shrey",
//       email: "shrey@gmail.com",
//       modules: [
//         {
//           moduleId: "mod101",
//           title: "Python Basics",
//           chapters: [
//             { chapterId: "ch101", title: "Variables" },
//             { chapterId: "ch102", title: "Loops" }
//           ]
//         },
//         {
//           moduleId: "mod102",
//           title: "HTML & CSS",
//           chapters: [
//             { chapterId: "ch103", title: "HTML Elements" },
//             { chapterId: "ch104", title: "CSS Styling" }
//           ]
//         }
//       ]
//     },
//     {
//       userId: "user2",
//       name: "hritik",
//       email: "hritik@gmail.com",
//       modules: [
//         {
//           moduleId: "mod201",
//           title: "React Basics",
//           chapters: [
//             { chapterId: "ch201", title: "JSX" },
//             { chapterId: "ch202", title: "Props & State" }
//           ]
//         },
//         {
//           moduleId: "mod202",
//           title: "Node.js",
//           chapters: [
//             { chapterId: "ch203", title: "Intro to Node" },
//             { chapterId: "ch204", title: "Express Basics" }
//           ]
//         }
//       ]
//     },
//     {
//       userId: "user3",
//       name: "jeet",
//       email: "jeet@gmail.com",
//       modules: [
//         {
//           moduleId: "mod201",
//           title: "React Basics",
//           chapters: [
//             { chapterId: "ch201", title: "JSX" },
//             { chapterId: "ch202", title: "Props & State" }
//           ]
//         },
//         {
//           moduleId: "mod203",
//           title: "MongoDB",
//           chapters: [
//             { chapterId: "ch205", title: "CRUD Operations" },
//             { chapterId: "ch206", title: "Aggregation" }
//           ]
//         }
//       ]
//     }
//   ]
// };


export const userModules = {
  users: [
    {
      email: "shrey@gmail.com",
      userId: "user1",
      modules: [
        {
          moduleId: "mod101",
          title: "Python Basics",
          chapters: [
            { chapterId: "ch101", title: "Variables", video: "https://www.youtube.com/embed/kqtD5dpn9C8" },
            { chapterId: "ch102", title: "Loops", video: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" },
            { chapterId: "ch103", title: "Functions", video: "https://www.youtube.com/embed/NSbOtYzIQI0" },
            { chapterId: "ch104", title: "Classes", video: "https://www.youtube.com/embed/ZDa-Z5JzLYM" }
          ]
        },
        {
          moduleId: "mod102",
          title: "HTML & CSS",
          chapters: [
            { chapterId: "ch105", title: "HTML Basics", video: "https://www.youtube.com/embed/qz0aGYrrlhU" },
            { chapterId: "ch106", title: "CSS Styling", video: "https://www.youtube.com/embed/1Rs2ND1ryYc" },
            { chapterId: "ch107", title: "Box Model", video: "https://www.youtube.com/embed/rIO5326FgPE" },
            { chapterId: "ch108", title: "Flexbox", video: "https://www.youtube.com/embed/fYq5PXgSsbE" }
          ]
        },
        {
          moduleId: "mod103",
          title: "Git & GitHub",
          chapters: [
            { chapterId: "ch109", title: "Intro to Git", video: "https://www.youtube.com/embed/USjZcfj8yxE" },
            { chapterId: "ch110", title: "Commit & Push", video: "https://www.youtube.com/embed/eKLW6J_gZbU" },
            { chapterId: "ch111", title: "Branching", video: "https://www.youtube.com/embed/oFYyTZwMyAg" },
            { chapterId: "ch112", title: "Merge Conflicts", video: "https://www.youtube.com/embed/xuB1Id2Wxak" }
          ]
        },
        {
          moduleId: "mod104",
          title: "JavaScript",
          chapters: [
            { chapterId: "ch113", title: "JS Basics", video: "https://www.youtube.com/embed/W6NZfCO5SIk" },
            { chapterId: "ch114", title: "DOM Manipulation", video: "https://www.youtube.com/embed/0ik6X4DJKCc" },
            { chapterId: "ch115", title: "ES6+", video: "https://www.youtube.com/embed/NCwa_xi0Uuc" },
            { chapterId: "ch116", title: "Promises", video: "https://www.youtube.com/embed/DHvZLI7Db8E" }
          ]
        }
      ]
    },
    {
      email: "jeet@gmail.com",
      userId: "user2",
      modules: [
        {
          moduleId: "mod201",
          title: "Asp/DotNet",
          chapters: [
            { chapterId: "ch201", title: "Objects", video: "https://www.youtube.com/embed/kqtD5dpn9C8" },
            { chapterId: "ch202", title: "Conditions", video: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" },
            { chapterId: "ch203", title: "Array", video: "https://www.youtube.com/embed/NSbOtYzIQI0" },
            { chapterId: "ch204", title: "Classes", video: "https://www.youtube.com/embed/ZDa-Z5JzLYM" }
          ]
        },
        {
          moduleId: "mod202",
          title: "Mern Stack",
          chapters: [
            { chapterId: "ch205", title: "React", video: "https://www.youtube.com/embed/qz0aGYrrlhU" },
            { chapterId: "ch206", title: "Node", video: "https://www.youtube.com/embed/1Rs2ND1ryYc" },
            { chapterId: "ch207", title: "Express", video: "https://www.youtube.com/embed/rIO5326FgPE" },
            { chapterId: "ch208", title: "MongoDB", video: "https://www.youtube.com/embed/fYq5PXgSsbE" }
          ]
        },
        {
          moduleId: "mod203",
          title: "Ai/Ml",
          chapters: [
            { chapterId: "ch209", title: "Types of Learning", video: "https://www.youtube.com/embed/USjZcfj8yxE" },
            { chapterId: "ch210", title: "Algorithms of learning", video: "https://www.youtube.com/embed/eKLW6J_gZbU" },
            { chapterId: "ch211", title: "Training Modals", video: "https://www.youtube.com/embed/oFYyTZwMyAg" },
            { chapterId: "ch212", title: "Evaluating Modals", video: "https://www.youtube.com/embed/xuB1Id2Wxak" }
          ]
        },
        {
          moduleId: "mod204",
          title: "Data Analytics",
          chapters: [
            { chapterId: "ch213", title: "PyChart", video: "https://www.youtube.com/embed/W6NZfCO5SIk" },
            { chapterId: "ch214", title: "Mean/Modal", video: "https://www.youtube.com/embed/0ik6X4DJKCc" },
            { chapterId: "ch215", title: "Tabelu", video: "https://www.youtube.com/embed/NCwa_xi0Uuc" },
            { chapterId: "ch216", title: "NumPy", video: "https://www.youtube.com/embed/DHvZLI7Db8E" }
          ]
        }
      ]
    },
    {
      email: "hritik@gmail.com",
      userId: "user3",
      modules: [
        {
          moduleId: "mod301",
          title: "Block Chain",
          chapters: [
            { chapterId: "ch301", title: "Solodity", video: "https://www.youtube.com/embed/kqtD5dpn9C8" },
            { chapterId: "ch302", title: "Core JS", video: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" },
            { chapterId: "ch303", title: "Chaining", video: "https://www.youtube.com/embed/NSbOtYzIQI0" },
            { chapterId: "ch304", title: "Data Mining", video: "https://www.youtube.com/embed/ZDa-Z5JzLYM" }
          ]
        },
        {
          moduleId: "mod201",
          title: "Asp/DotNet",
          chapters: [
            { chapterId: "ch201", title: "Objects", video: "https://www.youtube.com/embed/kqtD5dpn9C8" },
            { chapterId: "ch202", title: "Conditions", video: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" },
            { chapterId: "ch203", title: "Array", video: "https://www.youtube.com/embed/NSbOtYzIQI0" },
            { chapterId: "ch204", title: "Classes", video: "https://www.youtube.com/embed/ZDa-Z5JzLYM" }
          ]
        },
        {
          moduleId: "mod204",
          title: "Data Analytics",
          chapters: [
            { chapterId: "ch213", title: "PyChart", video: "https://www.youtube.com/embed/W6NZfCO5SIk" },
            { chapterId: "ch214", title: "Mean/Modal", video: "https://www.youtube.com/embed/0ik6X4DJKCc" },
            { chapterId: "ch215", title: "Tabelu", video: "https://www.youtube.com/embed/NCwa_xi0Uuc" },
            { chapterId: "ch216", title: "NumPy", video: "https://www.youtube.com/embed/DHvZLI7Db8E" }
          ]
        },
        {
          moduleId: "mod302",
          title: "Data Structure and Algorithms",
          chapters: [
            { chapterId: "ch313", title: "Sorting", video: "https://www.youtube.com/embed/W6NZfCO5SIk" },
            { chapterId: "ch314", title: "Searching", video: "https://www.youtube.com/embed/0ik6X4DJKCc" },
            { chapterId: "ch315", title: "Time Complexity", video: "https://www.youtube.com/embed/NCwa_xi0Uuc" },
            { chapterId: "ch316", title: "Link List", video: "https://www.youtube.com/embed/DHvZLI7Db8E" }
          ]
        }
      ]
    }
  ]
};