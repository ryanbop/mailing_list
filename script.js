function getmaildata() {
    // Disabling button after press
    document.getElementById("btn_submit").setAttribute("disabled","")

    // Getting values from text fields
    var emailinput = document.getElementById("emailinput").value
    var nameinput = document.getElementById("nameinput").value

    // Checking if email is an email
    let emailregexvalue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(emailregexvalue.test(emailinput)){
        // Creating Object for the data, hopefully this can be used to export data to an API of sorts?
        useremailobj = {email: emailinput, name: nameinput}
        console.log(useremailobj)        
    }
    else {
        
    }
    document.getElementById("btn_submit").removeAttribute("disabled","")
}

function clearinput() {
    var inputtags = document.getElementsByTagName("input")
    for (let n = 0; n < inputtags.length; n++) {
        inputtags[n].value = ""        
    }
    //console.log("cleared inputs")
}

function hytiy() {
    const hytiy = document.createElement("h6")
    hytiy.innerHTML = "Oi dog, click the button"
    hytiy.setAttribute("id","oidog")
    hytiy.setAttribute("style","color:red;")
    document.body.insertBefore(hytiy,document.getElementById("btnjoinmaillist"))
}

function clearoidog() {
    if(document.getElementById("oidog")) {
        document.getElementById("oidog").remove()
    }
}