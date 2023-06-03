import { io, Socket } from "socket.io-client";
import { socketManager } from "./services/sockets/main";

console.log("OKaaay lets go sbpm.ts");
const BATCH_SIZE = 10; // adjust this to the desired batch size

const linksToSend: Song[] = [];

const querySelectors = [".trackItem__trackTitle"];

const getCompactTracklistItems = () => {
  const trackItems = document.querySelectorAll(".compactTrackList__item");
  console.log("trackItems", trackItems);

  trackItems.forEach((item) => {
    const trackTitleElement = item.querySelector(".compactTrackListItem__trackTitle");
    console.log("Track Title: ", trackTitleElement);

    const linkPath = trackTitleElement.getAttribute('data-permalink-path');
    console.log("Permalink Path: ", linkPath);
  })
};

getCompactTracklistItems();



const observer = new MutationObserver(async () => {
  console.log("HALOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOQ!!!");

  getCompactTracklistItems()

  const sideItems = document.querySelectorAll("a.soundTitle__title");
  // sideItems.forEach((sideItem) => {
  //   console.log("sideItem", sideItem.href);
  // });

  const tracktItems = document.querySelectorAll(".trackItem__trackTitle");

  const linkElements = document.querySelectorAll(".soundTitle__title");
  console.error("linkElements: ", linkElements);

  for (var i = 0; i < linkElements.length; i++) {
    const song = linkElements[i].getAttribute("href");
    linksToSend.push();
  }

  Array.from(tracktItems).forEach(async (element) => {
    const link = element.getAttribute("href");
    console.log(link);
    const parsedLink: any = { url: link.split("?")[0] };

    console.log(parsedLink);

    // Ensure the link is a valid SoundCloud link before adding to the list
    if (parsedLink && !linksToSend.includes(parsedLink)) {
      console.log("allooooo");
      console.log(`pushed ${parsedLink}`);
      linksToSend.push(parsedLink);

      // If we have enough links for a batch, send them
    }
  });

  console.log("linksToSend", linksToSend);
});

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });
