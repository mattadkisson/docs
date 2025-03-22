function toggle(parent, selector) {
  
  var element = document.getElementById(parent).querySelector('#' + selector);
  var allSections = document.getElementById(parent).querySelectorAll('.section');
  for (var i=0; i < allSections.length; i++) {
  	allSections[i].style.display = 'none';
  }
  element.style.display = 'block';
}