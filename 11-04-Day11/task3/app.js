
function openWindow() {
  let url = "http://127.0.0.1:5500/apr-11/exercise3/index.html";
  let target = "_blank";
  let windowFeatures =
    "popup, height=500px , width=400px , left=250px, top=150px";
  window.open(url, target, windowFeatures);
}


function closeWindow() {
  window.close();
}

window.onload = function () {
  let div = document.createElement("div");
  div.innerHTML = `"innerHeight = 
    ${window.innerHeight}
    "innerWidth = "
    ${window.innerWidth}`;

  document.body.append(div);
};
