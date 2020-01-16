
let btn = document.getElementById('btn');
let dayText = document.createTextNode('Light Mode');
let darkText = document.createTextNode('Dark Mode');
let body = document.body;

btn.appendChild(dayText);
btn.classList.add("darkbtn");
body.classList.add("darkBody");

let DarkMode = () => {
  if(btn.innerHTML === 'Light Mode'){
    btn.innerHTML = "";
    btn.appendChild(darkText);
    btn.classList.remove("darkbtn");
    body.classList.remove("darkBody");
    btn.classList.add("lightbtn");
    btn.blur();
  }else{

    btn.innerHTML = "";
    btn.appendChild(dayText);
    btn.classList.remove("lightbtn");
    btn.classList.add("darkbtn");
    body.classList.add("darkBody");
    btn.blur();
  }
}

btn.addEventListener('click', DarkMode);