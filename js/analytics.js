(function(){
  // Load the GA script
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-RF6K4DG5DN';
  document.head.appendChild(s);

  // Setup gtag after loading
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-RF6K4DG5DN');
})();
