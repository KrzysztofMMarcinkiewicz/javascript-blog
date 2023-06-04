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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthors = '.authors .author-name',
  optAuthorsSelector = '.posts .post-author',
  optArticleAuthorSelector = "data-author";

function generateTitleLinks(customSelector = '') {

  let html = '';


//   // [DONE] remove contents of titleList
  const titleList = document.querySelector(optTitleListSelector);

  function clearTitleList(){
    document.querySelector(optTitleListSelector).innerHTML = "";
  }

  clearTitleList();

  // [DONE]for each article
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  for (let article of articles) {
    // [DONE] get the article id

  const articleId = article.getAttribute("id");
  console.log(articleId);

  // // [DONE] find the title element
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  // //[DONE] create HTML of the link
  const linkHTML = '<li><a href="#tag-'+ articleId +'"><span>' + articleTitle + '</span></a></li>';
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

function generateTags(){
  /*[DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /*[DONE] START LOOP: for every article: */
  for (let article of articles) {
    /* [DONE]find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);

    /* [DONE]make html variable with empty string */
    let html = '';

    /* [DONE]get tags from data-tags attribute */
    const articleTags = article.getAttribute("data-tags");
    console.log(articleTags);

    /* [DONE]split tags into array */
    const articleTagsArray = articleTags.split(' ');

    /* [DONE]START LOOP: for each tag */
    for(let tag of articleTagsArray) {

    /* [DONE]generate HTML of the link */
    const linkHTML = '<li><a href="#tag-'+ tag +'"></a></li>';
    console.log(linkHTML);

      /* [DONE]add generated code to html variable */

      html = html + linkHTML;

      console.log(html);


/* [DONE]END LOOP: for each tag */
      }


    /* [DONE]insert HTML of all the links into the tags wrapper */

    titleList.innerHTML = html;
  }

    /* [DONE]END LOOP: for every article: */
}

generateTags();


function tagClickHandler(event){
  /* [DONE]prevent default action for this event */
  event.preventDefault();

  /* [DONE]make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* [DONE]make a new constant "href" and read the attribute "href" of the clicked element */
  const href = this.getAttribute("href");
  console.log(href);

  /* [DONE]make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log("tagLinks");

  /* [DONE]find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  /* [DONE]START LOOP: for each active tag link */
  for(let activeTag of activeTags) {
/* [DONE]remove class active */
      activeTag.classList.remove("active");

 /* [DONE]END LOOP: for each active tag link */
  }

  /* [DONE]find all tag links with "href" attribute equal to the "href" constant */
const allTagLinks = document.querySelectorAll('a[href="' + href + '"]');


  /* [DONE]START LOOP: for each found tag link */
  for(let eachTagLink of allTagLinks) {

  /* [DONE]add class active */
  eachTagLink.classList.add("active");

  /* [DONE]END LOOP: for each found tag link */
  }

/* [DONE]execute function "generateTitleLinks" with article selector as argument */
generateTitleLinks('[data-tags~="' + tag + '"]');
;

}

function addClickListenersToTags(){
  /* !!! [DONE]find all links to tags */
  const allLinks = document.querySelectorAll(optArticleTagsSelector);

  /* [DONE]START LOOP: for each link */
  for(let eachLink of allLinks){

    /* [DONE]add tagClickHandler as event listener for that link */
    eachLink.addEventListener("click", tagClickHandler);
  }

 /* [DONE] END LOOP: for each link */
  }

addClickListenersToTags();


function generateAuthors ()  {
  const authors = document.querySelectorAll(optArticleAuthorSelector);
  console.log(authors);

for(let author of authors) {
  const authorsList = author.querySelector(optAuthorsSelector);

  let html = '';

  const authorName = author.getAttribute("data-author");
  console.log(authorName);

  authorsList.innerHTML = html;

}

}

function generateTags(){
  /*[DONE] find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /*[DONE] START LOOP: for every article: */
  for (let article of articles) {
    /* [DONE]find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);

    /* [DONE]make html variable with empty string */
    let html = '';

    /* [DONE]get tags from data-tags attribute */
    const articleTags = article.getAttribute("data-tags");
    console.log(articleTags);

    /* [DONE]split tags into array */
    const articleTagsArray = articleTags.split(' ');

    /* [DONE]START LOOP: for each tag */
    for(let tag of articleTagsArray) {

    /* [DONE]generate HTML of the link */
    const linkHTML = '<li><a href="#tag-'+ tag +'"></a></li>';
    console.log(linkHTML);

      /* [DONE]add generated code to html variable */

      html = html + linkHTML;

      console.log(html);


/* [DONE]END LOOP: for each tag */
      }


    /* [DONE]insert HTML of all the links into the tags wrapper */

    titleList.innerHTML = html;
  }

    /* [DONE]END LOOP: for every article: */
}

generateTags();

generateAuthors();

function authorClickHandler(event) {
  event.preventDefault();

  const clickedElement = this;

  const href = this.getAttribute("href");
  console.log(href);

  const authors = href.replace('#tag-', '');
  console.log("authors");

  const activeAuthors = document.querySelectorAll('a.active[href^="#tag-"]');

  for (let activeAuthor of activeAuthors) {
    activeAuthor.classList.remove("active");
  }

  const allAuthorsLinks = document.querySelectorAll('a[href="' + href + '"]');

  for(let eachAuthorLink of allAuthorsLinks) {

    eachAuthorLink.classList.add("active");

    }

  generateTitleLinks('[data-tags="' + authors + '"]');
  ;

}




function addClickListenersToAuthors() {
  const allAuthors = document.querySelectorAll(optArticleAuthors);

  for(let eachAuthor of allAuthors) {
    eachAuthor.addEventListener("click", authorClickHandler);
  }}


addClickListenersToAuthors();
