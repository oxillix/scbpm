import { io, Socket } from "socket.io-client";
import { socketManager } from "./services/sockets/main";
import { debounce } from "lodash"; // for mutationObserver

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
      const trackTitle = trackTitleElement.innerHTML
        .replace("-", "")
        .trim()
        .replace("&amp;", "&");
      console.log("Track Title: ", trackTitle);

      const trackUrlPath = trackTitleElement.getAttribute(
        "data-permalink-path"
      );
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

  // Create an array to store the table rows
  const tableRows: any = [];

  trackItems.forEach((item) => {
    const trackTitleElement = item.querySelector(".trackItem__trackTitle");

    const trackUrlPath = trackTitleElement.getAttribute("href");
    console.log("Track Path:", trackUrlPath);

    const trackTitle = trackTitleElement.textContent.trim();
    console.log("Track Title: ", trackTitle);

    const playCountElement = item.querySelector(".trackItem__playCount");
    console.log("Playlist Track Play Count: ", playCountElement.textContent);

    // Generate a random BPM value for the row
    const bpm = Math.floor(Math.random() * 100) + 60;

    // Generate a random key value for the row
    const keys = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const key = keys[Math.floor(Math.random() * keys.length)];

    // Create a table row HTML string with the track information and mock BPM/Key values
    const row = `
    <tr class="flex">
      <td>
        <div class="">
          ${item.innerHTML}
        </div>
      </td>
      <td>${bpm}</td>
      <td>${key}</td>
    </tr>
  `;

    // Push the row HTML string to the tableRows array
    tableRows.push(row);
  });

  if (trackItems.length === 0) {
    console.log("No Full Playlist is found");
  } else {
    console.log("Trackitems is not empty: ", trackItems.length);
  }

  stopDOMObserver();

  // Construct the table HTML using the tableRows array and insert it into the trackList container
  trackList.innerHTML = `
  <div class="w-full bg-red-400">
    <table>
      <thead>
        <tr>
          <th>Track</th>
          <th>BPM</th>
          <th>Key</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows.join("")}
      </tbody>
    </table>
    </div>
  `;

  // trackItems[0].innerHTML

  // trackList.innerHTML = `
  // <div class="">
  // ${trackItems[0].innerHTML}
  // </div>`
  //trackList.innerHTML = '<div class="bg-red-200 text-blue-500">aaaallooo</div>'

  startDOMObserver();
};

const observerCallback = debounce(async () => {
  getCompactTracklistItems();
  getPlaylistTracklistItems();
}, 1000); // Debounce for 1 second (adjust the delay as needed)

const startDOMObserver = () => {
  // Reconnect the observer after modifications are done
  observer.observe(document, { childList: true, subtree: true });
};

const stopDOMObserver = () => {
  // Disconnect the observer before making modifications
  observer.disconnect();
};

const observer = new MutationObserver(observerCallback);
startDOMObserver();
