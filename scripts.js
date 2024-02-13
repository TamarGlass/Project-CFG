function Newsletter() {
    let Newsletter = prompt("Enter your name" , "First name");
    let text;
    if (Newsletter == null || Newsletter == "")
    {text = "Please enter your email";}
    else {
        text = ` Thanks for subscribing, ${Newsletter} !`;
     }
     document.getElementById("result").innerHTML = text;
}
