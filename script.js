/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/



/* TODO: Add a variable to store the "my-list" element */
var fullItemList;

/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */
var fullItemList=document.getElementById("my-list");

if (fullItemList){
  fullItemList.addEventListener("click", checkOffItem);
}


/* TODO: Declare the function checkOffList and add actions inside the { } */

function checkOffItem(clicked){
  if (clicked.target.tagName == "LI") {
    clicked.target.classList.toggle("all-done");
  }
}


/*Go to top*/
var backtotop = document.getElementById("backtotop");
  backtotop.addEventListener("click", topfunction);

  function topfunction() {
  location.reload();
  }

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/


