// let counter = document.querySelector("p");
// let add = document.querySelector("#plus");
// let minusO = document.querySelector("#minus");
// let reset = document.querySelector("#reset");

function minus() {
  let a = document.querySelector("p").innerHTML;
  document.querySelector("p").innerHTML = a - 1;
}

function add() {
  let b = parseInt(document.querySelector("p").innerHTML);
  console.log(b);
  document.querySelector("p").innerHTML = b + 1;
}

function reset() {
  let check = Boolean(window.confirm("really"));
  if (check == true) {
    document.querySelector("p").innerHTML = 0;
  }
}
