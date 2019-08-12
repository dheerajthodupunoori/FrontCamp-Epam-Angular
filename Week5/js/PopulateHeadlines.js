export function populateHeadlines(headlines) {
  let headlineContent = document.getElementById("modal-content");
  headlines.forEach(headline => {
    let newHeadLine = document.createElement("p");
    newHeadLine.innerText = headline.title;
    newHeadLine.setAttribute("class", "headline-title");
    headlineContent.appendChild(newHeadLine);
  });
}
