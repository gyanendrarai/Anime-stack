function myfunc(cls){
  if( cls === "action"){
      var buttons = document.getElementsByTagName('button');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
      }
        var iframe = document.getElementById('action_iframe');
        iframe.style.display = 'block';

      console.log(buttons);
  }
  else if( cls === "comedy"){
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
      if(buttons[i].id === cls)
      {
        continue;
      }
      else {
        buttons[i].style.display = "none";
      }
    }
  }
  else if( cls === "psychological"){
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
      if(buttons[i].id === cls)
      {
        continue;
      }
      else {
        buttons[i].style.display = "none";
      }
    }
  }
  else{
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
      if(buttons[i].id === cls)
      {
        continue;
      }
      else {
        buttons[i].style.display = "none";
      }
    }
  }
}
