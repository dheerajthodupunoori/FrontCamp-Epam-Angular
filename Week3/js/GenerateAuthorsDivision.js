export default function createAuthorsDivision(authors, channelId) {
  let authorsDiv = document.getElementById("authors-division");
  let specificChannelDiv = document.createElement("div");
  specificChannelDiv.setAttribute("id", channelId);
  authors.forEach(author => {
    let newsFeed = document.createElement("div");
    newsFeed.setAttribute("class", "flex-container");
    newsFeed.setAttribute("id", author.author);
    let logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    let logoImage = document.createElement("img");
    logoImage.setAttribute("src", author.urlToImage);
    logoImage.setAttribute("class", "logo-image");
    logo.appendChild(logoImage);
    let content = document.createElement("div");
    content.setAttribute("class", "content");
    let title = document.createElement("h3");
    title.innerText = author.title;
    let publishedAt = document.createElement("h5");
    publishedAt.innerText = `Published At: ${author.publishedAt}`;
    let description = document.createElement("p");
    description.innerText = author.description;
    let clickToReadMore = document.createElement("button");
    clickToReadMore.setAttribute("value", "Continue Reading");
    clickToReadMore.setAttribute("class", "continue-reading");
    clickToReadMore.addEventListener("click", function() {
      window.open(author.url);
    });
    clickToReadMore.innerText = "Continue Reading";
    content.appendChild(title);
    content.appendChild(publishedAt);
    content.appendChild(description);
    content.appendChild(clickToReadMore);
    newsFeed.appendChild(logo);
    newsFeed.appendChild(content);
    specificChannelDiv.appendChild(newsFeed);
  });
  authorsDiv.appendChild(specificChannelDiv);
}
