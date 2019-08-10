export default function populateHeadlines(headlines) {
  let headlineContent = document.getElementById("modal-content");
  headlines.forEach(headline => {
    let newHeadLine = document.createElement("p");
    newHeadLine.innerText = headline.title;
    // headlineContent.appendChild(newHeadLine);
  });
}
