const initialOutput = document.getElementById("output").innerHTML;

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
    switch(output){
        case "help":
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput  + ': help - "Shows information about the terminal" , about - "Shows information about the website" , contact - "Shows where to contact the creator of this web-terminal" , clear - "Clears the previous output" , play theme - "Plays the main theme of the website!"' + '<br><br></span>';
            break;
        case "about":
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput  + ': Hello there, traveler. Welcome to my humble abode on the web, I hope you enjoy your stay! As you can tell, this is a terminal inspired website that is still in construction!<br><br></span>';
            break;
        case "contact":
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput  + ': Contact me at: "pedro.f.oliveira.work@gmail.com"<br><br></span>';
            break;
        case "clear":
            output_msg.innerHTML = initialOutput;
            break;
        case "play theme":
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput + ': <audio autoplay loop><source src = "Blackbird.mp3" type="audio/mpeg"></audio>Playing main theme successfully<br><br>'
            break;
        case "":
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br>' + UpperOutput  + 'Please enter a command!<br><br></span>';
            break;
        default:
            output_msg.innerHTML += '<span style="color: ' + promptColor + ';">pmware@Home-Page:/$ </span><span style="color: white;">' + output + '<br><br></span><span style="color: red;">' + UpperOutput + ': ' + output + ' is not recognized as an internal command, external command, operable program or batch file.<br><br></span>';
            break;
    }
}
