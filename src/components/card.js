import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let divCard = document.createElement("div");
  divCard.setAttribute("class", "card");

  let divHeadline = document.createElement("div");
  divHeadline.setAttribute("class", "headline");
  divHeadline.textContent = article.headline;

  let divAuthor = document.createElement("div");
  divAuthor.setAttribute("class", "author");

  let divImgContainer = document.createElement("div");
  divImgContainer.setAttribute("class", "img-container");

  let img = document.createElement("img");
  img.src = article.authorPhoto;

  let spanAuthorName = document.createElement("span");
  spanAuthorName.textContent = `By ${article.authorName}`;

  divImgContainer.append(img);
  divAuthor.append(divImgContainer);
  divAuthor.append(spanAuthorName);
  divCard.append(divHeadline);
  divCard.append(divAuthor);

  divCard.addEventListener("click", (e) => {
    console.log(e.target.childNodes[0].textContent);
  });

  return divCard;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  let cardAppender = document.querySelector(selector);

  axios
    .get("http://localhost:5000/api/articles")
    .then((resp) => {
      let articlesObj = resp.data.articles;
      console.log(resp);

      for (let article in articlesObj) {
        articlesObj[article].forEach((arr) => {
          cardAppender.append(Card(arr));
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
