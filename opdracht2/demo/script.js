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
