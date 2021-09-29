function changeBgImg(id){
  if( id === 'one'){
    document.body.style.backgroundImage = "url('1.png')";
    document.body.style.color = "white";
    document.querySelector('#category').textContent = " ACTION";
    document.querySelector('#head1').style.textShadow = "10px -10px 10px black";
  }
  else if (id === 'two') {
    document.body.style.backgroundImage = "url('3.png')";
    document.querySelector('#category').textContent = " HORROR";
    document.querySelector('#head1').style.textShadow = "10px -10px 10px orange";
    document.querySelector('#head2').style.textShadow = "10px -10px 10px red";

  }
  else if(id === 'three') {
    document.body.style.backgroundImage = "url('7.jpg')";
    document.querySelector('#category').textContent = " COMEDY";
    document.querySelector('#head1').style.textShadow = "10px -10px 10px black";
    document.querySelector('#head2').style.textShadow = "10px -10px 10px darkblue";

  }
  else {
    document.body.style.backgroundImage = "url('4.png')";
    document.querySelector('#category').textContent = " FANTASY";
    document.querySelector('#head1').style.textShadow = "10px -10px 10px orange";
    document.querySelector('#head2').style.textShadow = "10px -10px 10px orange";
  }
}
