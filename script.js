var navMenuAnchorTags=document.querySelectorAll('navbar-lists a');
console.log(navMenuAnchorTags);

for(var i=0;i<navMenuAnchorTags.length;i++) {
  navMenuAnchorTags[i].addEventListener('click',function(event) {
    // event.preventDefault();
  });
}