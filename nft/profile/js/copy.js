function copy(id,button) {
    let copyButton = button;
    let elem = document.getElementById(id);

    elem.select();
    elem.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(elem.value);

    let text = copyButton.innerHTML;
    copyButton.innerHTML = 'Copied to clipboard';
    setTimeout(function (){
        copyButton.innerHTML = text;
    },1000);
}