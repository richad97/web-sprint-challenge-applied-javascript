const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  let divHeader = document.createElement("div");
  divHeader.setAttribute("class", "header");

  let spanDate = document.createElement("span");
  spanDate.setAttribute("class", "date");
  spanDate.textContent = date;

  let h1Title = document.createElement("h1");
  h1Title.textContent = title;

  let spanTemp = document.createElement("span");
  spanTemp.setAttribute("class", "temp");
  spanTemp.textContent = temp;

  divHeader.append(spanDate);
  divHeader.append(h1Title);
  divHeader.append(spanTemp);

  return divHeader;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  let headerAppender = document.querySelector(selector);
  headerAppender.append(Header("Lambda Times", "10/29/21", "99"));
};

export { Header, headerAppender };
