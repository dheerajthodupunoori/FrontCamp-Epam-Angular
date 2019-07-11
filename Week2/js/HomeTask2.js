document.title = "FrontCamp Training Home Task Two";

function CreatePage() {
  var header = document.createElement("div");
  header.className = "header";
  header.setAttribute("class", "header");

  var title = document.createElement("h1");
  title.innerText = "NEWSFEED";
  title.setAttribute("class", "newsfeed");

  var another_feedback = document.createElement("h4");
  another_feedback.className = "another-feedback";
  another_feedback.innerText = "Yet another feedback";

  header.appendChild(title);
  header.appendChild(another_feedback);
  document.body.appendChild(header);
}
