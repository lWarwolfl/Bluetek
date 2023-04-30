$("#side-opener").on('click',function(){
    $('#sidebar').toggleClass('active');
    $('#side-opener').toggleClass('active');
})

document.addEventListener("click", (evt) => {
    const bar = document.getElementById("sidebar");
    const button = document.getElementById("side-opener");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === bar || targetElement === button) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    if ($('#sidebar').hasClass('active'))
    {
        $('#sidebar').toggleClass('active');
        $('#side-opener').toggleClass('active');
    }
});