/*
Use JavaScript to obtain a reference to the first article header and change its text with textContent property to "Welcome the {insert your name here} blog"

Use JavaScript to obtain a reference to all article__header elements and change their classList property value to "article__header important".
*/

const articleEl = document.querySelector(".article__header")
articleEl.textContent = "Welcome to Kimmy's Blog"

const allArticleEl = document.querySelectorAll(".article__header")
for (let i = 0; i < allArticleEl.length; i++) {
    allArticleEl[i].classList.add("important")
}
