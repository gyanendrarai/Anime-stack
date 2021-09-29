/* Tosggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementByClassName("icon");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function btnFunction(id)
{


  if (id === 'one'){
    var videocontainer = document.getElementById('videoclip');
    var videosource = document.getElementById('mp4video');
    var newmp4 = 'C:\\Users\\raigy\\Desktop\\UDEMY\\WEB DEV\\just me\\Anime Website\\episodes\\1.mp4';
    var videobutton = document.getElementById("one");
    videobutton.addEventListener("click", function(event) {
        videocontainer.pause();
        videosource.setAttribute('src', newmp4);
        videocontainer.load();
    }, false);
  }
  else if (id === 'two'){
    var videocontainer = document.getElementById('videoclip');
    var videosource = document.getElementById('mp4video');
    var newmp4 = 'C:\\Users\\raigy\\Desktop\\UDEMY\\WEB DEV\\just me\\Anime Website\\episodes\\2.mp4';
    var videobutton = document.getElementById("two");

    videobutton.addEventListener("click", function(event) {
        videocontainer.pause();
        videosource.setAttribute('src', newmp4);
        videocontainer.load();
    }, false);
  }
  else if (id === 'three'){
    var videocontainer = document.getElementById('videoclip');
    var videosource = document.getElementById('mp4video');
    var newmp4 = 'C:\\Users\\raigy\\Desktop\\UDEMY\\WEB DEV\\just me\\Anime Website\\episodes\\3.mp4';
    var videobutton = document.getElementById("three");

    videobutton.addEventListener("click", function(event) {
        videocontainer.pause();
        videosource.setAttribute('src', newmp4);
        videocontainer.load();
    }, false);
  }
  else if(id === 'four'){
    var videocontainer = document.getElementById('videoclip');
    var videosource = document.getElementById('mp4video');
    var newmp4 = 'C:\\Users\\raigy\\Desktop\\UDEMY\\WEB DEV\\just me\\Anime Website\\episodes\\4.mp4';
    var videobutton = document.getElementById("four");

    videobutton.addEventListener("click", function(event) {
        videocontainer.pause();
        videosource.setAttribute('src', newmp4);
        videocontainer.load();
    }, false);
  }
  else{
    var videocontainer = document.getElementById('videoclip');
    var videosource = document.getElementById('mp4video');
    var newmp4 = 'C:\\Users\\raigy\\Desktop\\UDEMY\\WEB DEV\\just me\\Anime Website\\episodes\\5.mp4';
    var videobutton = document.getElementById("five");

    videobutton.addEventListener("click", function(event) {
        videocontainer.pause();
        videosource.setAttribute('src', newmp4);
        videocontainer.load();
    }, false);
  }

}
