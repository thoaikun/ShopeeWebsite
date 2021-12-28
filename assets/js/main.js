// show QR code when hover and dissapear when mouse out
{
    let downloadBtn = document.querySelector('.conect>div:nth-child(3)')
    downloadBtn.addEventListener('mouseover', function() {
        downloadBtn.style.cursor = 'pointer'
        downloadBtn.querySelector('.QRcode').classList.add('QRcode--show')
    })
    downloadBtn.addEventListener('mouseout', function() {
        downloadBtn.querySelector('.QRcode').classList.remove('QRcode--show')
    
    })
}

// show notification box 
{
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
}

// show language box
{
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
}

// show shopping cart item 
{
    let cartBtn = document.querySelector('.search-bar__cart')
    cartBtn.addEventListener('mouseover', function() {
        cartBtn.style.cursor = 'pointer'
        cartBtn.querySelector('.cart-box').classList.add('cart-box--show')
    })
    cartBtn.addEventListener('mouseout', function() {
        cartBtn.querySelector('.cart-box').classList.remove('cart-box--show')
    })
}


// advertisement slider 
function slidingAd() {
    let leftArrows = document.querySelectorAll('.ad-slider__left')
    let rightArrows = document.querySelectorAll('.ad-slider__right')
    let dots = document.querySelectorAll('.ad-slider__dot')
    let backgroundImageSources =    [
                                        [   'assets/imgs/Advertisement/ad_3.jpg',
                                            'assets/imgs/Advertisement/ad_4.png',
                                            'assets/imgs/Advertisement/ad_5.png',
                                            'assets/imgs/Advertisement/ad_6.png',
                                            'assets/imgs/Advertisement/ad_7.png',
                                            'assets/imgs/Advertisement/ad_8.png',
                                            'assets/imgs/Advertisement/ad_9.png',
                                            'assets/imgs/Advertisement/ad_10.png',
                                            'assets/imgs/Advertisement/ad_12.png',
                                            'assets/imgs/Advertisement/ad_13.png',
                                            'assets/imgs/Advertisement/ad_14.png',
                                            'assets/imgs/Advertisement/ad_15.png',
                                        ],
                                        [
                                            'assets/imgs/Advertisement/ad_17.png',
                                            'assets/imgs/Advertisement/ad_18.png',
                                            'assets/imgs/Advertisement/ad_19.png',
                                            'assets/imgs/Advertisement/ad_20.png',
                                        ]
                                    ]
    let positions = [0,0]

    // auto slider
    setInterval(function() {
        for (let i=0; i < positions.length; i++) {
            if (positions[i] === backgroundImageSources[i].length - 1)
                positions[i] = 0
            else
                positions[i] ++

            if (i === 0)
                document.querySelector('.ad-slider').style.backgroundImage = `url(${backgroundImageSources[i][positions[i]]}`
            else if (i === 1) 
                document.querySelector('.shopee-mail-slider').style.backgroundImage = `url(${backgroundImageSources[i][positions[i]]}`

            let dotList = dots[i].querySelectorAll('i')
            for (let j=0; j < dotList.length; j++) {
                if (j !== positions[i])
                    dotList[j].style.color = 'white'
                else 
                    dotList[j].style.color = 'var(--theme-color)'
            }
        }
    }, 3000)

    // show arrow when hover
    document.querySelector('.ad-slider').addEventListener('mouseover', function(event) {
        if (event.target.className.includes('ad-slider__left') || event.target.className.includes('ad-slider__right')) {
            event.preventDefault()
            event.target.style.opacity = 1
        }
        else if (event.target.className.includes('ad-slider')) {
            leftArrows[0].style.opacity = 0.5
            rightArrows[0].style.opacity = 0.5
        }
    })
    document.querySelector('.ad-slider').addEventListener('mouseout', function() {
        leftArrows[0].style.opacity = 0 
        rightArrows[0].style.opacity = 0
    })

    document.querySelector('.shopee-mail-slider').addEventListener('mouseover', function(event) {
        if (event.target.className.includes('ad-slider__left') || event.target.className.includes('ad-slider__right')) {
            event.preventDefault()
            event.target.style.opacity = 1
        }
        else if (event.target.className.includes('shopee-mail-slider')) {
            leftArrows[1].style.opacity = 0.5
            rightArrows[1].style.opacity = 0.5
        }
    })
    document.querySelector('.shopee-mail-slider').addEventListener('mouseout', function() {
        leftArrows[1].style.opacity = 0 
        rightArrows[1].style.opacity = 0
    })


    // listen even on left arrow
    leftArrows.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            if (event.target.className.includes('advertise-btn')) {
                if (positions[0] === 0)
                    positions[0] = backgroundImageSources[0].length - 1
                else 
                    positions[0] --
    
                document.querySelector('.ad-slider').style.backgroundImage = `url(${backgroundImageSources[0][positions[0]]}`
                let dotList = dots[0].querySelectorAll('i')
                for (let j=0; j < dotList.length; j++) {
                    if (j !== positions[0])
                        dotList[j].style.color = 'white'
                    else 
                        dotList[j].style.color = 'var(--theme-color)'
                }
            }
            else if (event.target.className.includes('shopee-mail-btn')) {
                if (positions[1] === 0)
                    positions[1] = backgroundImageSources[1].length - 1
                else 
                    positions[1] --
    
                document.querySelector('.shopee-mail-slider').style.backgroundImage = `url(${backgroundImageSources[1][positions[1]]}`
                let dotList = dots[1].querySelectorAll('i')
                for (let j=0; j < dotList.length; j++) {
                    if (j !== positions[1])
                        dotList[j].style.color = 'white'
                    else 
                        dotList[j].style.color = 'var(--theme-color)'
                }
            }
        })
    })

    // listen even on right arrow
    rightArrows.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            if (event.target.className.includes('advertise-btn')) {
                if (positions[0] === backgroundImageSources[0].length - 1)
                    positions[0] = 0
                else 
                    positions[0] ++
    
                document.querySelector('.ad-slider').style.backgroundImage = `url(${backgroundImageSources[0][positions[0]]}`
                let dotList = dots[0].querySelectorAll('i')
                for (let j=0; j < dotList.length; j++) {
                    if (j !== positions[0])
                        dotList[j].style.color = 'white'
                    else 
                        dotList[j].style.color = 'var(--theme-color)'
                }
            }
            else if (event.target.className.includes('shopee-mail-btn')) {
                if (positions[1] === backgroundImageSources[1].length - 1)
                    positions[1] = 0
                else 
                    positions[1] ++
    
                document.querySelector('.shopee-mail-slider').style.backgroundImage = `url(${backgroundImageSources[1][positions[1]]}`
                let dotList = dots[1].querySelectorAll('i')
                for (let j=0; j < dotList.length; j++) {
                    if (j !== positions[1])
                        dotList[j].style.color = 'white'
                    else 
                        dotList[j].style.color = 'var(--theme-color)'
                }
            }
        })
    })
}
slidingAd()

//flash-sale-product slider
function productSlider() {
    let positions = [0,0]
    let leftArrows = document.querySelectorAll('.product-arrow__left')
    let rightArrows = document.querySelectorAll('.product-arrow__right')

    leftArrows.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            if (event.target.className.includes('flash-sale-btn')) {
                if (positions[0] === 0) {
                    positions[0] = 2
                    document.querySelector('.flash-sale-product--p0').classList.toggle('highlight-products--show')
                    document.querySelector('.flash-sale-product--p2').classList.toggle('highlight-products--show')
                }
                else if (positions[0] === 1) {
                    positions[0] = 0
                    document.querySelector('.flash-sale-product--p1').classList.toggle('highlight-products--show')
                    document.querySelector('.flash-sale-product--p0').classList.toggle('highlight-products--show')
                }
                else {
                    positions[0] = 1
                    document.querySelector('.flash-sale-product--p2').classList.toggle('highlight-products--show')
                    document.querySelector('.flash-sale-product--p1').classList.toggle('highlight-products--show')
                }
            }
            else if (event.target.className.includes('top-product-btn')) {
                if (positions[1] === 0) {
                    positions[1] = 2
                    document.querySelector('.top-product--p0').classList.toggle('highlight-products--show')
                    document.querySelector('.top-product--p2').classList.toggle('highlight-products--show')
                }
                else if (positions[1] === 1) {
                    positions[1] = 0
                    document.querySelector('.top-product--p1').classList.toggle('highlight-products--show')
                    document.querySelector('.top-product--p0').classList.toggle('highlight-products--show')
                }
                else {
                    positions[1] = 1
                    document.querySelector('.top-product--p2').classList.toggle('highlight-products--show')
                    document.querySelector('.top-product--p1').classList.toggle('highlight-products--show')
                }
            }
        })
    })

    rightArrows.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            if (event.target.className.includes('flash-sale-btn')) {
                if (positions[0] === 0) {
                    positions[0] = 1
                    document.querySelector('.flash-sale-product--p0').classList.toggle('highlight-products--show')
                    document.querySelector('.flash-sale-product--p1').classList.toggle('highlight-products--show')
                }
                else if (positions[0] === 1) {
                    positions[0] = 2
                    document.querySelector('.flash-sale-product--p1').classList.toggle('highlight-products--show')
                    document.querySelector('.flash-sale-product--p2').classList.toggle('highlight-products--show')
                }
                else {
                    positions[0] = 0
                    document.querySelector('.flash-sale-product--p2').classList.toggle('highlight-products--show')
                    document.querySelector('.flash-sale-product--p0').classList.toggle('highlight-products--show')
                }
            }
            else if (event.target.className.includes('top-product-btn')) {
                if (positions[1] === 0) {
                    positions[1] = 1
                    document.querySelector('.top-product--p0').classList.toggle('highlight-products--show')
                    document.querySelector('.top-product--p1').classList.toggle('highlight-products--show')
                }
                else if (positions[1] === 1) {
                    positions[1] = 2
                    document.querySelector('.top-product--p1').classList.toggle('highlight-products--show')
                    document.querySelector('.top-product--p2').classList.toggle('highlight-products--show')
                }
                else {
                    positions[1] = 0
                    document.querySelector('.top-product--p2').classList.toggle('highlight-products--show')
                    document.querySelector('.top-product--p0').classList.toggle('highlight-products--show')
                }
            }
        })
    })
}
productSlider()

// count down timer for flash sale product
let desTime = new Date().getTime() + (1000*10*60)
var countDownTimer = setInterval(function() {
    let currentTime = new Date().getTime()

    let distance = desTime - currentTime

    distance %= (1000*60*60*24)
    let hour = Math.floor(distance / (1000*60*60))
    distance %= (1000*60*60)
    let minute = Math.floor(distance / (1000*60))
    distance %= (1000*60)
    let second = Math.floor(distance / 1000)

    let clock = document.querySelector('.countdown-timer')
    clock.innerHTML = ` <div class="countdown-timer__h">
                            <div>${Math.floor(hour/10)}</div>
                            <div>${(hour%10)}</div>
                        </div>
                        <div class="countdown-timer__m">
                            <div>${Math.floor(minute/10)}</div>
                            <div>${(minute%10)}</div>
                        </div>
                        <div class="countdown-timer__s">
                            <div>${Math.floor(second/10)}</div>
                            <div>${(second%10)}</div>
                        </div>`

    if (distance < 0) {
        clearInterval(countDownTimer)
        let clock = document.querySelector('.countdown-timer')
        clock.innerHTML = ` <div class="countdown-timer__h">
                                <div>0</div>
                                <div>0</div>
                            </div>
                            <div class="countdown-timer__m">
                                <div>0</div>
                                <div>0</div>
                            </div>
                            <div class="countdown-timer__s">
                                <div>0</div>
                                <div>0</div>
                            </div>`
    }


},1000)

// shopee-brand slider
function brandSlider() {
    let position = 0
    let leftArrow = document.querySelector('.top-brand .product-arrow__left')
    let rightArrow = document.querySelector('.top-brand .product-arrow__right')
    let clickArrow = function() {
        if (position === 0) {
            document.querySelector('.brand-list-p0').classList.toggle('brand-list--show')
            document.querySelector('.brand-list-p1').classList.toggle('brand-list--show')
            position = 1
        }
        else {
            document.querySelector('.brand-list-p0').classList.toggle('brand-list--show')
            document.querySelector('.brand-list-p1').classList.toggle('brand-list--show')
            position = 0;
        }
    }
    leftArrow.addEventListener('click', clickArrow)
    rightArrow.addEventListener('click', clickArrow)
}
brandSlider()