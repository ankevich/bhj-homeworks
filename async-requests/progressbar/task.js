let progressBar = document.getElementById("progress");
let form = document.getElementById("form")

form.addEventListener('submit', (event) => {
  let formData = new FormData(form);
  let request = new XMLHttpRequest();

  event.preventDefault()

  request.upload.addEventListener('progress', (progressStatus) => { 
    progressBar.value = progressStatus.loaded / progressStatus.total
  });
  
  request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  request.send(formData);

});

