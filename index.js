// ===============typed script js home=========
let typed = new Typed(".typing",{
    strings:["talent","ta ","talent"],
    typeSpeed:80,
    backSpeed:80,
});
// ===============typed 2 script js home=========
let typed2 = new Typed(".typing2",{
    strings:["skills","sk ","skills"],
    typeSpeed:100,
    backSpeed:100,
});
// ===============typed 3 script js team=========
let typed3 = new Typed(".typing3",{
    strings:["the door","t ","the door"],
    typeSpeed:100,
    backSpeed:100,
});

// =============== navber section start=======================
let hemderger = document.getElementById('hemderger');
let navmanu = document.getElementById('nav-manu');
let closemanu = document.getElementById('close');
let navlink = document.querySelectorAll('.navlink');
navlink.forEach(element => {
    element.addEventListener('click',()=>{
        navmanu.classList.add('hidden')
    })
});

hemderger.addEventListener('click',()=>{
    navmanu.classList.remove('hidden');
});
closemanu.addEventListener('click',()=>{
    navmanu.classList.add('hidden');
})

// =============== dark section start=======================
let htmltag = document.getElementById('htmltag');
let swich = document.getElementById('switch');
swich.addEventListener('click',()=>{
    htmltag.classList.toggle('dark')
});