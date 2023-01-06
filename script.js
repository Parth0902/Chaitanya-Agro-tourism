let flag=0;
const controller=(x)=>
{
    flag+=x;
slideshow(flag);
}

const slideshow=(num)=>
{
    let slides=document.getElementsByClassName('slide');
    if(num<0)
    {
        flag=slides.length-1;
        num=slides.length-1;
    }

    if(num==slides.length)
    {
        flag=0;
        num=0;

    }
    for(let y of slides)
    {
        y.style.display="none";
    }
    slides[num].style.display="block";

}


(()=>{
    slideshow(0);
})();



