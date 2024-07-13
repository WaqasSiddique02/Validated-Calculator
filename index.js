var buttons = document.getElementsByTagName("button");
var inputBar = document.getElementById("inputBar");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var clicked_button = this.innerHTML;
        
        if (clicked_button === "AC") {
            inputBar.value = "";

        }
         else if (clicked_button === "=") {
            var result = eval(inputBar.value);
            inputBar.value = result;

        }
         else {
            inputBar.value += clicked_button;
        }
    });
}

inputBar.addEventListener("keypress", function(event) {
    console.log(event);
    if (event.key === "Enter" || event.key==="=") {
        event.preventDefault();
        var result = parseFloat(eval(inputBar.value));
        inputBar.value = result;
    }

    if((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)){
        event.preventDefault();
    }
});