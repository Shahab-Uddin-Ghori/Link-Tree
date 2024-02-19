window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  
  /*==================== typed js ====================*/

const typed = new Typed(".myname", {
    strings: [
      "gh pr status",
      " gh pr checkout",
      "gh pr create",
      " gh pr checks",
      "gh alias set",
    ],
    typeSpeed: 100,
    backSpeed: 0,
    backDelay: 1000,
    loop: true,
    cursorChar: "",
  });