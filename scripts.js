const win = window

function handleInteraction() {
    this.PeddlrError = function (event, dialogue) {
        if (win.innerWidth > 768) {
            event.preventDefault();
            alert(dialogue);
        }
    }
}

$(document).ready(function () {
    app.linkInteractions = new handleInteraction;
});