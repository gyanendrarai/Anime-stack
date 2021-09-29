function myfunc(x){
  let item = document.getElementsByClassName(x);
  let sign = document.getElementById('SignUp');
  let log = document.getElementById('Login');
  if ( x === 'Login') {
    sign.style.display = 'none';
    log.style.display = 'block';
  }
  else {
      sign.style.display = 'block';
      log.style.display = 'none';
    }
  }
