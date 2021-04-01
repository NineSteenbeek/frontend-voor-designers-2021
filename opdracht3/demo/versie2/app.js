/* weer app */

/* alle elementen ophalen uit de html */
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button= document.querySelector('.submit');

/* eventlistener toevoegen aan de button */
button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=1e708882b9761257c32a03e958c5594b')
.then(response => response.json())
.then(data => {
  var tempWaarde = Math.floor(data['main']['temp']);
  var naamWaarde = data['name'];
  var descWaarde = data['weather'][0]['description'];

/* info toevoegen aan de html */
  main.innerHTML = naamWaarde;
  desc.innerHTML = descWaarde;
  temp.innerHTML = tempWaarde + " degrees";
  input.value ="";
})

/* fout opvangen */
.catch(err => alert("Check if your spelling is correct!"));
})


/* toggle button */
var check = document.getElementById('check');


check.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
check.addEventListener("keydown", function (e) {

    var key = e.which || e.keyCode || 0;

    if (key === 13) {
        document.body.classList.toggle('dark');
        if (check.checked) {
            check.checked = false;
        } else {
            check.checked = true;
        }
    }
})
