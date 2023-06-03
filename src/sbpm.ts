import { io, Socket } from "socket.io-client";
import { socketManager } from "./services/sockets/main";

console.log("OKaaay lets go sbpm.ts yigha");
const BATCH_SIZE = 10; // adjust this to the desired batch size

const trackItems = [];

const getCompactTracklistItems = () => {
  const trackList = document.querySelectorAll(
    ".compactTrackList__listContainer"
  );
  if (!trackList) {
    console.log("No compact tracklist is found");
    return;
  }

  trackList.forEach((list) => {
    const trackItems = list.querySelectorAll(".compactTrackList__item");
    console.log("trackItems", trackItems);

    trackItems.forEach((item) => {
      const trackTitleElement = item.querySelector(
        ".compactTrackListItem__trackTitle"
      );
      const trackTitle = trackTitleElement.innerHTML.replace("-", "").trim().replace('&amp;', '&');
      console.log("Track Title: ", trackTitle);

      const trackUrlPath = trackTitleElement.getAttribute("data-permalink-path");
      console.log("Permalink Path: ", trackUrlPath);
    });
  });
};

const getPlaylistTracklistItems = () => {
  const trackList = document.querySelector(".trackList");
  if (!trackList) {
    console.log("No full playlist is found");
    return;
  }

  const trackItems = trackList.querySelectorAll(".trackList__item");

  console.log("Playlist track items:", trackItems);

  trackItems.forEach((item) => {
    const trackTitleElement = item.querySelector(".trackItem__trackTitle");

    const trackUrlPath = trackTitleElement.getAttribute("href");
    console.log("Track Path:", trackUrlPath);

    const trackTitle = trackTitleElement.textContent.trim();
    console.log("Track Title: ", trackTitle);

    const userElement = item.querySelector(".trackItem__username");
    const trackUser = trackTitleElement.textContent.trim();
    console.log("Track User: ", trackUser);

    const playCountElement = item.querySelector(".trackItem__playCount");
    console.log("Playlist Track Play Count: ", playCountElement.textContent);
  });

  if (trackItems.length === 0) {
    console.log("No Full Playlist is found");
  } else {
    console.log("Trackitems is not empty: ", trackItems.length);
  }
};

const observer = new MutationObserver(async () => {
  getCompactTracklistItems();
  getPlaylistTracklistItems();
});

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });
