"use strict";

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log("clickedElement (with plus): " + clickedElement);
  console.log("Link was clicked!");
  console.log(event);

  /*[DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }

  /*[DONE] add class 'active' to the clicked link */
  this.classList.add("active");

  /*[DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll(".posts article.active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }

  /* [DONE]get 'href' attribute from the clicked link */
  const articleSelector = this.getAttribute("href");
  console.log(articleSelector);

  /* [DONE]find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector("a");
  console.log(targetArticle.href);

  /* [DONE]add class 'active' to the correct article */
  targetArticle.classList.add("active");
}

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

function generateTitleLinks() {
  // usuń zawartość listy linków w lewej kolumnie
  const titleList = document.querySelector(optTitleListSelector);
  optTitleListSelector.innerHTML = "";

  function clearMessages() {
    document.getElementById("messages").innerHTML = "";
  }

  // odczytaj id artykułu i zapisz je do stałej
  const articleID = this.getAttribute("href");
  console.log(articleID);

  // znajdź element z tytułem artykułu i zapisz jego zawartość do stałej

  // na podstawie tych informacji stwórz kod HTML linka i zapisz go do stałej

  // wstaw stworzony kod HTML do listy linków w lewej kolumnie

  console.log();
}
