// var userName = "Steve";

// function display(name)
// {
//     alert("MyScript2.js: " + name);
// }

// display(userName);
var userName = "Bill";

(function (name) {

    function display(name)
    {
        alert("MyScript2.js: " + name);
    }

    display(name);
})(userName);