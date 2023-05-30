"use strict";
const inputs = document.querySelectorAll('.mail input')
const btns = document.querySelectorAll(".btn");

const helper = function(ev){
   
    const parentEl = ev.target.closest(".cta");
    let inputValue = parentEl.querySelector("input").value;
    if (
        inputValue.endsWith("@gmail.com") ||
        inputValue.endsWith("@email.com")
      ) {
          parentEl.querySelector(".error").classList.add("hidden");
        parentEl.querySelector(".correct").classList.remove("hidden");
        setTimeout(() => {
          parentEl.querySelector(".correct").classList.add("hidden");
          parentEl.querySelector("input").value = " ";
        }, 3000);
  
      } else {
        parentEl.querySelector(".error").classList.remove("hidden");
      }
}

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    return helper(e)
  });
});

inputs.forEach(inp =>{
    inp.addEventListener('click', (ev)=>{
        document.addEventListener('keypress', function(e){
            if(e.key === 'Enter') 
            {
                document.querySelectorAll('.msg').forEach(msg => msg.classList.add('hidden'))
                return helper(ev)
            }
        })
    })
})

// OBSERVER

const header = document.querySelector('header')
const heroText = document.querySelector('.hero--text')

const hero = document.querySelector('.hero')
const aboutText = document.querySelector('.about--text')

const about = document.querySelector('.about')
const subscribe = document.querySelector('.subscribe')

const heroObserverFn = function (entries, heroObserver) {
  const [entry] = entries;
  if (entry.isIntersecting === false) {
    heroText.classList.add('slideRight')
  } else {
    heroText.classList.remove('slideRight')
  }
};

const aboutObserverFn = function (entries, aboutObserver) {
  const [entry] = entries;
  if (entry.isIntersecting === false) {
    aboutText.classList.add('slideLeft')
  } else {
    aboutText.classList.remove('slideLeft')
  }
};

const subObserverFn = function (entries, subObserver) {
  const [entry] = entries;
  if (entry.isIntersecting === false) {
    subscribe.classList.add('slideFade')
  } else {
    subscribe.classList.remove('slideFade')
  }
};

const observerObj = {
  // root: null,
  // threshold: 0,
  
  root: null,
  threshold: 0,
  rootMargin: '90px',
};
const subObj = {
  // root: null,
  // threshold: 0,
  
  root: null,
  threshold: 0,
  rootMargin: '-120px',
};

const heroObserver = new IntersectionObserver(heroObserverFn, observerObj);
heroObserver.observe(header);

const aboutObserver = new IntersectionObserver(aboutObserverFn, observerObj);
aboutObserver.observe(hero);

const subObserver = new IntersectionObserver(subObserverFn, subObj);
subObserver.observe(about);
