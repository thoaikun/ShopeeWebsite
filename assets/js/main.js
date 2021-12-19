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
    notificationBtn.querySelector('.notification-box').classList.add('notification-box--show')
})
notificationBtn.addEventListener('mouseout', function() {
    notificationBtn.querySelector('.notification-box').classList.remove('notification-box--show')
})