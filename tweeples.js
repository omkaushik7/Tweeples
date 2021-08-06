
var i = 0;

function view() {

    if (!i) {

        document.getElementById("more").style.display = "flex";


        document.getElementById("view").innerHTML = " view less";
        i = 1;
    }

    else {
        document.getElementById("more").style.display = "none";


        document.getElementById("view").innerHTML = "view more";
        i = 0;
    }
}

function views() {

    if (!i) {

        document.getElementById("more_").style.display = "flex";


        document.getElementById("view_").innerHTML = " view less";
        i = 1;
    }

    else {
        document.getElementById("more_").style.display = "none";


        document.getElementById("view_").innerHTML = "view more";
        i = 0;
    }
}