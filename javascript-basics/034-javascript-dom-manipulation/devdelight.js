function itsATrap() {
  /*
   *document.getElementById('header-welcome').style.color = 'blue';
   *document.getElementsByClassName('demo')[0].style.border = 'thick solid';
   */
  //document.getElementsByTagName('p')[0];
  //
  document.querySelector('.demo').style.border = 'thick solid red';
  //document.querySelector('#header-welcome').innerText = 'Hello, World';
  document.querySelector('#header-welcome').innerHTML = text;
  /*
   *document.querySelector('#header-welcome').textContent = 'Hello, World';
   */
  // document.querySelectorAll
  //document.querySelector('button').textContent = 'Dont click here';
}
