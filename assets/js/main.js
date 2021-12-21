// show QR code when hover and dissapear when mouse out
let downloadBtn = document.querySelector('.conect>div:nth-child(3)')
downloadBtn.addEventListener('mouseover', function() {
    downloadBtn.style.cursor = 'pointer'
    downloadBtn.querySelector('.QRcode').classList.add('QRcode--show')
})
downloadBtn.addEventListener('mouseout', function() {
    downloadBtn.querySelector('.QRcode').classList.remove('QRcode--show')

})

// show notification box 
let notificationBtn = document.querySelector('.user__notification')
notificationBtn.addEventListener('mouseover', function() {
    notificationBtn.style.cursor = 'pointer'
    notificationBtn.querySelector('.notification-btn').style.opacity = 0.8
    notificationBtn.querySelector('.notification-box').classList.add('notification-box--show')
})
notificationBtn.addEventListener('mouseout', function() {
    notificationBtn.querySelector('.notification-btn').style.opacity = 1
    notificationBtn.querySelector('.notification-box').classList.remove('notification-box--show')
})

// show language box
let languageBtn = document.querySelector('.user__language')
languageBtn.addEventListener('mouseover', function() {
    languageBtn.style.cursor = 'pointer'
    languageBtn.querySelector('.language-btn').style.opacity = 0.8
    languageBtn.querySelector('.language-box').classList.add('language-box--show')
})
languageBtn.addEventListener('mouseout', function() {
    languageBtn.querySelector('.language-btn').style.opacity = 1
    languageBtn.querySelector('.language-box').classList.remove('language-box--show')
})

// show shopping cart item 
let cartBtn = document.querySelector('.search-bar__cart')
cartBtn.addEventListener('mouseover', function() {
    cartBtn.style.cursor = 'pointer'
    cartBtn.querySelector('.cart-box').classList.add('cart-box--show')
})
cartBtn.addEventListener('mouseout', function() {
    cartBtn.querySelector('.cart-box').classList.remove('cart-box--show')
})


// advertisement slider 
function slidingAd() {
    let backgroundIMG = [
        'assets/imgs/Advertisement/ad_3.jpg',
        'assets/imgs/Advertisement/ad_4.png',
        'assets/imgs/Advertisement/ad_5.png',
        'assets/imgs/Advertisement/ad_6.png',
        'assets/imgs/Advertisement/ad_7.png',
        'assets/imgs/Advertisement/ad_8.png',
        'assets/imgs/Advertisement/ad_9.png',
        'assets/imgs/Advertisement/ad_10.png',
        'assets/imgs/Advertisement/ad_11.png',
        'assets/imgs/Advertisement/ad_12.png',
        'assets/imgs/Advertisement/ad_13.png',
        'assets/imgs/Advertisement/ad_14.png',
        'assets/imgs/Advertisement/ad_15.png',
    ]
    let position = 0
    let dotList = document.querySelectorAll('.ad-slider__dot>i')
    let leftArrow = document.querySelector('.ad-slider__left')
    let rightArrow = document.querySelector('.ad-slider__right')

    // auto slide 
    setInterval(function() {
        if (position === backgroundIMG.length - 1)
            position = 0
        else    
            position ++

        adSlider.style.backgroundImage = `url(${backgroundIMG[position]}`
        dotList.forEach((dot, index) => {
            if (index !== position)
                dot.style.color = 'white'
            else 
                dot.style.color = 'var(--theme-color)'
        })
    }, 4000)

    // listen when hover on slider
    let adSlider = document.querySelector('.ad-slider')
    adSlider.addEventListener('mouseover', function(event) {
        if (event.target.className.includes('ad-slider__left') || event.target.className.includes('ad-slider__right')) {
            event.preventDefault()
            event.target.style.opacity = 1
        }
        else if (event.target.className.includes('ad-slider')) {
            leftArrow.style.opacity = 0.5
            rightArrow.style.opacity = 0.5
        }
    })
    adSlider.addEventListener('mouseout', function() {
        leftArrow.style.opacity = 0 
        rightArrow.style.opacity = 0
    })

    // listen even on left arrow
    leftArrow.addEventListener('click', function() {
        if (position === 0)
            position = backgroundIMG.length - 1
        else    
            position --

        adSlider.style.backgroundImage = `url(${backgroundIMG[position]}`
        dotList.forEach((dot, index) => {
            if (index !== position)
                dot.style.color = 'white'
            else 
                dot.style.color = 'var(--theme-color)'
        })
    })

    // listen even on right arrow
    rightArrow.addEventListener('click', function() {
        if (position === backgroundIMG.length - 1)
            position = 0
        else    
            position ++
        adSlider.style.backgroundImage = `url(${backgroundIMG[position]}`
        dotList.forEach((dot, index) => {
            if (index !== position)
                dot.style.color = 'white'
            else 
                dot.style.color = 'var(--theme-color)'
        })
    })
}

slidingAd()