
function enterSite() {
    document.querySelector('.entrance-screen').style.transition = 'opacity 1s ease-out';
    document.querySelector('.entrance-screen').style.opacity = 0;
  
    setTimeout(() => {
      window.location.href = 'main-site.html'; 
    }, 1000);
  }
  

  