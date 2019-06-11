var currCont = "about;";
var artImages = ["Chitters.png", "coverArt.png", "slowpossumLogo.png"];


function dropDownFunction() {
  document.getElementById("dropdownOne").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches("button.dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function artClick() {
  switch(currCont){
    case "about":
      document.getElementById("content").innerHTML = "";
      break;
    case "contact":
      document.getElementById("instaContact").style.display = "none";
      document.getElementById("contentPanel").style.display = "";
      break;
  }
  currCont = "art";

  document.getElementById("content").style.overflowY = "auto";
  document.getElementById("content").style.whiteSpace = "nowrap";
  
  if(document.getElementById("content").innerHTML=="")
  {
    artImages.forEach(function(picture){
      var imageToContent = document.createElement("img");

      imageToContent.src = `./assets/art/${picture}`;
      imageToContent.classList.add("artImage");

      document.getElementById("content").appendChild(imageToContent);
    });
  }
}

function aboutClick() {
  switch(currCont){
    case "art":
      document.getElementById("content").style.overflowY = "";
      document.getElementById("content").style.whiteSpace = "normal";
      break;
    case "contact":
      document.getElementById("instaContact").style.display = "none";
      document.getElementById("contentPanel").style.display = "";
      break;
  }
  currCont = "about";

  document.getElementById("content").innerHTML = `
  <p>My name is Thomas, I'm an artist and future web dev from RVA.</p>
  <p>This is just a simple page I built to kill some time and act as a host/portfolio of sorts for
   current and future projects.</p>`;
}

function contactClick() {
  currCont = "contact";
  document.getElementById("contentPanel").style.display = "none";
  document.getElementById("instaContact").style.display = "block";
}

function artFull(event) {
  document.getElementById("fullscreenArt").style.display = "flex";
  document.getElementById("fullscreenArt").style.backgroundColor = "rgba(0,0,0,.5)";

  document.getElementById("artDiv").style.backgroundImage=`url("${event.srcElement.currentSrc}")`;
  // document.getElementById("artDiv").innerHTML = `<img src="${event.srcElement.currentSrc}">`;
  console.log(event);
}

function closeArt() {
  document.getElementById("fullscreenArt").style.display = "none";
}