function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

function copy() {
    let copyButton = document.getElementById("contract-button");
    let copyText = document.getElementById("contract");

    let text = copyText.innerText;
    const elem = document. createElement('textarea');
    elem.setAttribute('readonly','readonly');
    elem. value = text;
    document. body. appendChild(elem);

    elem.select();
    elem.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(elem.value);

    elem.remove();
    copyButton.style.visibility = 'hidden';
    copyText.innerText = 'COPIED TO CLIPBOARD';
    setTimeout(function (){
        copyButton.style.visibility = 'visible';
        copyText.innerText = text;
    },1000);
}