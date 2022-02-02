const heart = document.querySelectorAll('.main__content-heart'),
size = document.querySelector('.main__info-result'),
priceAge = document.querySelector('.main__info-caption'),
aboutPrise = document.querySelector('.main__about-price'),
aboutAge = document.querySelector('.main__about-age'),
priceIcon = document.querySelector('.main__info-icon'),
priceSecondIcon = document.querySelector('.main__info-icon_2') 


heart.forEach(item =>{
    item.addEventListener('click', function(e){
        alert('Вы добавили в Избранное')
        e.preventDefault()
    })
})
size.addEventListener('click', (e) => {
    e.preventDefault()
    if(aboutPrise.classList.contains('active')){
        aboutPrise.classList.remove('active')
        priceIcon.style.transform = `rotate(0deg)`
    }else{
        aboutPrise.classList.add('active')
        priceIcon.style.transform = `rotate(180deg)`
        priceIcon.style.transition = `0.5s`
    }
})
priceAge.addEventListener('click', (e) => {
    e.preventDefault()
    if(aboutAge.classList.contains('active')){
        aboutAge.classList.remove('active')
        priceSecondIcon.style.transform = `rotate(0deg)`
    }else{
        aboutAge.classList.add('active')
        priceSecondIcon.style.transform = `rotate(180deg)`
        priceSecondIcon.style.transition = `0.5s`
    }
})
