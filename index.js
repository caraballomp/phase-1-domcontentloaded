// Your code goes here
function domContentLoaded() {
    document.addEventListener("DOMContentLoaded", function(e) {
      updateDOM()
    });
  }
  document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {
    document.getElementById("text").innerHTML = "This is really cool!";
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }