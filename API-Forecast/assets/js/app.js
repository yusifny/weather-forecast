const select = document.querySelector(".form-select");
const input = document.querySelector(".amount-input");
const button = document.querySelector(".btn-primary");
axios({
    method: 'get',
    url: 'https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=tokyo',
  })
    .then(function (response) {
        button.addEventListener("click", function(){
            console.log(response.data);
            let temp = input.value;
            resp.innerHTML = response.data[city];
        })
    });