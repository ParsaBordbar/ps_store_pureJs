const searchBtn = document.getElementById('searchBtn');
const magBtn = document.getElementById('magBtn');
const searchModalElement = document.querySelector('.search-modal');
const extern = document.getElementsByTagName("link")[1].import;
const singInBtn = document.getElementById('singInBtn');



searchBtn.addEventListener('click', () => {
    searchModalElement.style.display = 'flex';
});

magBtn.addEventListener('click', () => {
    searchModalElement.style.display = 'none';
});

const hideModalClickOutSide = () =>{
    document.getElementById('modalParentSearch').addEventListener('click',(e)=>{
        if(e.srcElement === document.getElementById('modalParentSearch')){
            document.getElementById("modalParentSearch").style.display = 'none';
        }
    });
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

let customScroll = document.querySelector('#scroll')

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowHeight = window.innerHeight
    let scrollPercent = scrollTop / (documentHeight - windowHeight)
    let scrollPercentRounded = scrollPercent * 100
    customScroll.style.width = scrollPercentRounded + '%'
    console.log(scrollPercentRounded);
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))
hideModalClickOutSide();