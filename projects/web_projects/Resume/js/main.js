$(document).ready(function () {
    document.addEventListener('contextmenu', function (event) {
        return event.preventDefault();
    });
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 123) {
            event.preventDefault();
            event.returnValue = false;

        }
        else if (event.keyCode == 17) {
            event.preventDefault();
            event.returnValue = false;

        }
        else if (event.keyCode == 16) {
            event.preventDefault();
            event.returnValue = false;

        }
        else if (event.keyCode == 74) {
            event.preventDefault();
            event.returnValue = false;

        }
        else if (event.keyCode == 73) {
            event.preventDefault();
            event.returnValue = false;

        }
        else if (event.keyCode == 67) {
            event.preventDefault();
            event.returnValue = false;

        }
    });
});