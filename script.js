let buttonPhi = document.querySelector('.phi');
buttonPhi.onclick = function dados() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  console.log(`User: ${user}; Password: ${password};`);
}

let imageClick = document.querySelector('img')
imageClick.onclick = function goBack() {
  window.history.back();
}
