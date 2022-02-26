const url = "https://netology-slow-rest.herokuapp.com/poll.php";
fetch(url)
  .then((r) => r.json())
  .then((response) => {
    let question = document.getElementById("poll__title");
    let answers = document.getElementById("poll__answers");
    question.innerHTML = response.data.title;
    response.data.answers.map((answer) => {
      answers.innerHTML += `
          <button class="poll__answer" onclick="alert('Спасибо, ваш голос засчитан!')">
            ${answer}
          </button>`;
    });
  });
