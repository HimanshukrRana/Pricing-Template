document.querySelector(".toggle")
    .addEventListener("mouseup", function () {
        var amounts = document.getElementsByClassName('card-amount')
        for (let i = 0; i < amounts.length; i++) {
            var elements = amounts[i];
            var classList = elements.classList;
            classList.toggle('card-amount--hidden');
        }
    })