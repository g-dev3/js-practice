# Project releted to Dom

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      btnclick(e.target.id);
    } else if (e.target.id === "yellow") {
      btnclick(e.target.id);
    } else if (e.target.id === "blue") {
      btnclick(e.target.id);
    } else if (e.target.id === "white") {
      btnclick(e.target.id);
    } else if (e.target.id === "red") {
      btnclick(e.target.id);
    } else if (e.target.id === "purple") {
      btnclick(e.target.id);
    }
  });
});

function btnclick(color) {
  body.style.backgroundColor = `${color}`;
}
```
