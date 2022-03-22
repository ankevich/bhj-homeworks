let progressBar = document.getElementById("progress");
let form = document.getElementById("form")

form.addEventListener('submit', () => {
  let formData = new FormData(form);
  let request = new XMLHttpRequest();

  
  request.upload.addEventListener('progress', () => { console.log('progress') });
  request.upload.addEventListener("load", () => { console.log('load')});
  request.upload.addEventListener("error", () => { console.log('error')});
  request.upload.addEventListener("abort", () => { console.log('abort')});
  
  request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  request.send(formData);
  
});

