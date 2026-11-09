document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('[data-menu-toggle]');
  var menu=document.querySelector('[data-mobile-menu]');
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      var open=menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
    });
    menu.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation menu');});});
  }
  var year=document.getElementById('current-year');if(year)year.textContent=new Date().getFullYear();
  // AOS-style reveal without the AOS CDN dependency or an additional network request.
  var motionItems=document.querySelectorAll('[data-aos]');
  var reducedMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reducedMotion&&'IntersectionObserver' in window){
    document.documentElement.classList.add('motion-ready');
    var motionObserver=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('aos-animate');
          motionObserver.unobserve(entry.target);
        }
      });
    },{threshold:0.12,rootMargin:'0px 0px -48px 0px'});
    motionItems.forEach(function(item){
      var delay=Number(item.getAttribute('data-aos-delay')||0);
      item.style.setProperty('--aos-delay',Math.min(Math.max(delay,0),350)+'ms');
      motionObserver.observe(item);
    });
  }else{
    motionItems.forEach(function(item){item.classList.add('aos-animate');});
  }
});