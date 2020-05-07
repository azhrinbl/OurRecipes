function validasi() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var recipe = document.getElementById("recipe").value;
    if (name != "" && email != "" && recipe != "") {
        alert(' Data saved successfully ');
    }
    else {
        alert(' Please fill in all the fields ');
    }
}
