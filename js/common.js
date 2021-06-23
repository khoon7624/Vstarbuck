const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

// addEventListener 첫번째 인수로 focus가 발생되면, 2번째 인수인 함수가 실행 ( 핸들러 )
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder','통합검색');
})

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder','');
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear() //2021