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
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* [DONE]add class 'active' to the correct article */
  targetArticle.classList.add("active");
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {


  let html = '';


//   // [DONE] remove contents of titleList
  const titleList = document.querySelector(optTitleListSelector);

  function clearTitleList(){
    document.querySelector(optTitleListSelector).innerHTML = "";
  }

  clearTitleList();

  // [DONE]for each article
  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles) {
    // [DONE] get the article id

  const articleId = article.getAttribute("id");
  console.log(articleId);

  // // [DONE] find the title element
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  // //[DONE] create HTML of the link
  const linkHTML = '<li><a href="#'+ articleId +'"><span>' + articleTitle + '</span></a></li>';
console.log(linkHTML);

    /* insert link into html variable */
html = html + linkHTML;

console.log(html);
  }

  titleList.innerHTML = html;

  // //// [DONE]insert link into titleList
  // titleList.insertAdjacentHTML ('beforebegin', linkHTML);

  const links = document.querySelectorAll(".titles a");
  console.log(links);

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }

}

generateTitleLinks();
