function scrollToDiv (divId){
    document.querySelector(divId).scrollIntoView();
}

// document.onkeydown = function(evt) {
//     evt= evt || window.event;
//     alert(String.fromCharCode(evt.keyCode));
//     evt.preventDefault(true);
//     evt.stopPropagation(true);
//     alert(String.fromCharCode(evt.keyCode));
// }
// function changeNavigationBar() {
//     var x = document.getElementById("navBarId");
//     if (x.className === "navBar") {
//         x.className += "responsive";
//         // var allHideableLis = document.querySelectorAll(".li-hideable").style.display = "block";
//         for (let index = 0; index < allHideableLis.length; index++) {
//             allHideableLis[index].style.display = "block";
            
//         }
//         alert("asgfdsa");
//     } else {
//         x.className = "topnav";
//     }
// }


// function changeNavigationBar() {
//     document.querySelector('.drop-down-nav').style.display = 'block';
//     document.querySelector('.drop-down-nav').style.float = 'none';
// }

// We waren bezig met het responsive maken van de navbar.