const initialOutput = document.getElementById("output").innerHTML;
let themePlaying = false;
document.addEventListener("DOMContentLoaded", function() {
    let input_command;
    document.getElementById("input_text").addEventListener("keydown", function(event){
        if (event.key === "Enter") {
            input_command = document.getElementById("input_text").value;
            console.log(input_command); 
            document.getElementById("input_text").value = ""; 
            displayOutput(input_command);
        }
    });
});

function displayOutput(output) {
    let output_msg = document.getElementById("output");
    output_msg.classList.remove("error"); 
    UpperOutput = output.toUpperCase();
    let promptColor = 'rgb(183, 0, 255)';
    switch(UpperOutput){
        case "HELP":
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput  + ': help - "Shows information about the terminal" , about - "Shows information about the website" , contact - "Shows where to contact the creator of this web-terminal" , clear - "Clears the previous output, play theme - "Plays the main theme of the website!" , meow - "Shows a picture of my cat!"' + '<br><br></span>';
            break;
        case "ABOUT":
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput  + ': Hello there, traveler. Welcome to my Web-terminal. This was created as a passion project :P<br><br></span>';
            break;
        case "CONTACT":
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput  + ': Contact me at: "pedro.f.oliveira.work@gmail.com"<br><br></span>';
            break;
        case "CLEAR":
            output_msg.innerHTML = initialOutput;
            break;
        case "PLAY THEME":
            if (!themePlaying) {
                output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput + ': Playing main theme successfully<br><br>'
                let theme = new Audio('Blackbird.mp3');
                theme.loop = true;
                theme.play();
                themePlaying = true;
            }
            else{
                output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput + ': The theme is already playing! <br><br>'
            }
            break;
        case "MEOW":
            let cat_image = document.createElement('img');
            cat_image.src = 'images/IMG_2909.jpg'
            cat_image.style.maxWidth = '20%';
            cat_image.style.border = '15px solid ' + promptColor;
            output_msg.appendChild(cat_image);
            output_msg.innerHTML += '<br>This is my cat Rita! <br><br>';
            break;
        case "":
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput  + 'Please enter a command!<br><br></span>';
            break;
        default:
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br><br></span><span style="color: red;">' + UpperOutput + ': ' + output + ' is not recognized as an internal command, external command, operable program or batch file.<br><br></span>';
            break;
    }
}