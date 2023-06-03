// // content.js
// import { io, Socket } from "socket.io-client";

// console.log("fgijghsjghjkshgjshdgjhjskdghjshg");

// const socket: Socket = io("wss://scbpm.com/sio", {
//   reconnectionDelayMax: 10000,
//   // auth: {
//   //   token: "123",
//   // },
//   // query: {
//   //   "my-key": "my-value",
//   // },
// });

// // Connection established
// socket.on("connect", () => {
//   console.log(`Connected with id ${socket.id}`);
// });

// // Connection error
// socket.on("connect_error", (error: Error) => {
//   console.log(`Connection Error: ${error.message}`);
//   console.log("error", error);
// });

// // Custom event
// socket.on("my_event", (data: any) => {
//   console.log(data);
// });

// // Disconnect event
// socket.on("disconnect", (reason: string) => {
//   console.log(`Disconnected: ${reason}`);
// });

// fetch('http://reload.extensions', {
//   method: 'GET', // or 'POST'
//   headers: {
//     // 'Authorization': 'Bearer token' // if you need authorization
//   }
// })
// .then(response => response.json()) // or .text(), .blob(), etc.
// .then(data => console.log(data))
// .catch((error) => {
//   console.error('Error:', error);
// });

const BATCH_SIZE = 10; // adjust this to the desired batch size

// const sendLinksToServer = async (links) => {
//   try {
//     const response = await fetch("https://your-flask-server.com/analyze", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ links: links }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     } else {
//       const data = await response.json();
//       console.log(data);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// const linksToSend: Song[] = [];

// const querySelectors = [".trackItem__trackTitle"];

// const observer = new MutationObserver(async () => {
//   console.log("HALOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOQ!!!");

//   const sideItems = document.querySelectorAll("a.soundTitle__title");
//   sideItems.forEach((sideItem) => {
//     console.log("sideItem", sideItem.href);
//   });

//   const tracktItems = document.querySelectorAll(".trackItem__trackTitle");

//   const linkElements = document.querySelectorAll(".soundTitle__title");
//   console.error("linkElements: ", linkElements);

//   for (var i = 0; i < linkElements.length; i++) {
//     const song = linkElements[i].getAttribute("href");
//     linksToSend.push();
//   }

//   Array.from(tracktItems).forEach(async (element) => {
//     const link = element.getAttribute("href");
//     console.log(link);
//     const parsedLink: Song = { url: link.split("?")[0] };

//     console.log(parsedLink);

//     // Ensure the link is a valid SoundCloud link before adding to the list
//     if (parsedLink && !linksToSend.includes(parsedLink)) {
//       console.log("allooooo");
//       console.log(`pushed ${parsedLink}`);
//       linksToSend.push(parsedLink);

//       // If we have enough links for a batch, send them
//     }
//   });

//   console.log("linksToSend", linksToSend);
// });

// // Start observing the document with the configured parameters
// observer.observe(document, { childList: true, subtree: true });



console.log('I am in the background');
