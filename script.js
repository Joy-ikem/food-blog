document.addEventListener('DOMContentLoaded',function(){
    var toggle = document.getElementById('toggle');
    var menu = document.querySelector('.menu');

    toggle.addEventListener('change',function(){
        if(toggle.checked){
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    })
})


