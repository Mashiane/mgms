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
  var items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.12});
    items.forEach(function(item){observer.observe(item);});
  }else{items.forEach(function(item){item.classList.add('is-visible');});}
});