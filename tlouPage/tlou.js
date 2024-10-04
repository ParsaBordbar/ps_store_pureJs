const searchBtn = document.getElementById('searchBtn');
const magBtn = document.getElementById('magBtn');
const searchModalElement = document.querySelector('.search-modal');
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