document.addEventListener("DOMContentLoaded", function () {
  const url = "https://httpbin.org/anything";

  const form = document.getElementById("form");
  // поля:
  const cardNumber = form.elements.cardNumber;
  const cardName = form.elements.cardName;
  const cardMonth = form.elements.cardMonth;
  const cardYear = form.elements.cardYear;
  const cardCvv = form.elements.cardCvv;


  if (form) {
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      let params = new FormData(form);

      fetch(url, {
        method: 'POST',
        body: params
      }).then(function (response) {
        response.json().then(function (data) {
          let response = JSON.stringify(data['form'])
          localStorage.setItem('data', response);
          window.location.href = "http://localhost:63342/task-1/success.html";
        })
      });
    });
  }
});
