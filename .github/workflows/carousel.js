const container = document.querySelector('.cardapio');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let autoScroll = setInterval(() => {
    if(container.scrollLeft + container.clientWidth >= container.scrollWidth){
        container.scrollTo({ left:0, behavior:'smooth' });
    } else {
        container.scrollBy({ left: container.clientWidth/3, behavior:'smooth' });
    }
},3000);

nextBtn.addEventListener('click', ()=>{
    container.scrollBy({ left: container.clientWidth/3, behavior:'smooth' });
    resetAutoScroll();
});
prevBtn.addEventListener('click', ()=>{
    container.scrollBy({ left: -container.clientWidth/3, behavior:'smooth' });
    resetAutoScroll();
});

function resetAutoScroll(){
    clearInterval(autoScroll);
    autoScroll = setInterval(() => {
        if(container.scrollLeft + container.clientWidth >= container.scrollWidth){
            container.scrollTo({ left:0, behavior:'smooth' });
        } else {
            container.scrollBy({ left: container.clientWidth/3, behavior:'smooth' });
        }
    },3000);
}

let startX;
container.addEventListener('touchstart', (e)=> startX = e.touches[0].clientX);
container.addEventListener('touchend', (e)=>{
    let endX = e.changedTouches[0].clientX;
    if(startX - endX > 50) container.scrollBy({ left: container.clientWidth/3, behavior:'smooth' });
    if(endX - startX > 50) container.scrollBy({ left: -container.clientWidth/3, behavior:'smooth' });
    resetAutoScroll();
});