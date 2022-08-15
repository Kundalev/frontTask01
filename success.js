document.addEventListener("DOMContentLoaded", function () {
    const url = "https://httpbin.org/anything";

    const form = document.getElementById("form");
    // поля:
    const userName = form.elements.userName;
    const userEmail = form.elements.userEmail;
    const userAge = form.elements.userAge;
    const userGender = form.elements.userGender;
    let data = JSON.parse(localStorage.getItem('data'));
    console.log(data)
    if (form) {
        form.addEventListener("submit", function (evt) {
            evt.preventDefault();
            data.userName = userName.value;
            data.userEmail = userEmail.value;
            data.userAge = userAge.value;
            data.userGender = userGender.value;
            axios.post(url, data)
                .then(function (response) {
                    console.log(response);
                    form.remove();
                    document.getElementById("title").innerText = 'Ваши данные успешно украдены';
                    document.getElementById("subtitle").innerText = 'Вот что нам у вас удалось украсть:';
                    let ul = document.createElement('ul');
                    document.body.append(ul)
                    for (const [key, value] of Object.entries(data)) {
                        let li = document.createElement('li')
                        li.innerHTML = `<li>${key} : ${value}</li>`
                        ul.append(li);
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }
});
