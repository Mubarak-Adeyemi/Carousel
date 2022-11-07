// GETTING THE SCROLL BUTTONS
const btns = document.querySelectorAll('.slide-btn')
const prevBtn = document.querySelector('.slide-btn.pre');
const  nextBtn = document.querySelector('.slide-btn.next');

console.log(btns);
// GETTING THE IMAGES COLLECTION 
const slideCollection = document.querySelector('.slide-collection');
const slideImgContainer = document.querySelector('.slide-img-container');


let direction;

// Setting click even on the next button
nextBtn.addEventListener('click', ()=>{
    if (direction === 1) {
        slideCollection.prepend(slideCollection.lastElementChild);
        direction = -1;
        
    }
    direction = -1;
    slideCollection.style.transform = 'translate(-500px)';
    slideImgContainer.style.justifyContent = 'flex-start';
});


// Setting click even on the previous button
prevBtn.addEventListener('click', ()=>{
    if (direction === -1) {
        slideCollection.appendChild(slideCollection.firstElementChild);
        direction = 1;
        
    }
    slideImgContainer.style.justifyContent = 'flex-end';
    slideCollection.style.transform = 'translate(500px)'
});


// Setting transition event on the slides container
slideCollection.addEventListener('transitionend', ()=>{
    if (direction === -1) {
        slideCollection.appendChild(slideCollection.firstElementChild);
    } else if(direction === 1){
        slideCollection.prepend(slideCollection.lastElementChild);
    }
    slideCollection.style.transition ='none'
    slideCollection.style.transform = 'translate(0)';
    setTimeout(()=>{
        slideCollection.style.transition ='all .5s'
    })

});

slideCollection.addEventListener('mouseover', ()=>{
    prevBtn.style.transform = 'scale(1)';
    nextBtn.style.transform = 'scale(1)';
});
slideCollection.addEventListener('mouseout', ()=>{
    prevBtn.style.transform = 'scale(0)';
    nextBtn.style.transform = 'scale(0)';
});

prevBtn.addEventListener('mouseover', ()=> prevBtn.style.transform = 'scale(1)')
nextBtn.addEventListener('mouseover', ()=> nextBtn.style.transform = 'scale(1)');




