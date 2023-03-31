let quantity = document.querySelector('.increment h3'),
	plus = document.querySelector('.plus'),
	index = 0,
	mainIndex = 0,
	minus = document.querySelector('.minus'),
	cart = document.querySelector('.cart'),
	cartItems = document.querySelector('.cart-dropdown'),
	mainImgContainer = document.querySelector('.product-img'),
	mainImg = document.querySelector('.product-img img'),
	lightBox = document.querySelector('.lightbox'),
	lightBoxImg = document.querySelector('.main-product-img'),
	closeIcon = document.querySelector('.closeIcon'),
	otherImgs = document.querySelector('.other-pics'),
	mainOtherImgs = otherImgs.getElementsByTagName('img'),
	lightBoxOtherImgs = document.querySelector('.lightbox .other-pics'),
	lightBoxOtherImg = lightBoxOtherImgs.getElementsByTagName('img'),
	prev = lightBox.querySelector('.prev'),
	next = lightBox.querySelector('.next'),
	images = document.querySelector('.images'),
	mainPrev = images.querySelector('.prev'),
	mainNext = images.querySelector('.next'),
	totalImgs = lightBoxOtherImg.length,
	totalMainImgs = mainOtherImgs.length

prev.onclick = () => {
	if (index !== 0) {
		index--
	}
	handleImg()
}

next.onclick = () => {
	if (index !== totalImgs - 1) {
		index++
	} else {
		index = 0
	}
	handleImg()
}

mainPrev.onclick = () => {
	if (index !== 0) {
		index--
	}
	handleMainImg()
}

mainNext.onclick = () => {
	if (index !== totalImgs - 1) {
		index++
	} else {
		index = 0
	}
	handleMainImg()
}

function handleImg() {
	trimSrc(lightBoxImg, lightBoxOtherImg, index)
}

function handleMainImg() {
	trimSrc(mainImg, mainOtherImgs, index)
}

function trimSrc(mainImage, otherImg, index) {
	let imgSrc = otherImg[index].getAttribute('src'),
		newSrc = imgSrc.slice(0, 22),
		imgExtension = imgSrc.slice(32, 36)
	newImgSrc = newSrc.concat(imgExtension)
	mainImage.setAttribute('src', newImgSrc)
	otherImg[0].classList.remove('active')
	otherImg[1].classList.remove('active')
	otherImg[2].classList.remove('active')
	otherImg[3].classList.remove('active')
	otherImg[index].classList.add('active')
}

for (let i = 0; i < mainOtherImgs.length; i++) {
	mainOtherImgs[i].addEventListener('click', function () {
		trimSrc(mainImg, mainOtherImgs, i)
	})
}

for (let i = 0; i < lightBoxOtherImg.length; i++) {
	lightBoxOtherImg[i].addEventListener('click', function () {
		trimSrc(lightBoxImg, lightBoxOtherImg, i)
	})
}

cart.addEventListener('click', function () {
	cartItems.classList.toggle('visible')
})

plus.addEventListener('click', function () {
	let quantityValue = Number(quantity.textContent)
	let newQuantity = quantityValue + 1

	quantity.textContent = newQuantity
})

minus.addEventListener('click', function () {
	let quantityValue = Number(quantity.textContent)

	if (quantityValue !== 0) {
		let newQuantity = quantityValue - 1
		quantity.textContent = newQuantity
	}
})

mainImgContainer.addEventListener('click', function () {
	lightBox.classList.add('lightbox-visible')
})

closeIcon.addEventListener('click', function () {
	lightBox.classList.remove('lightbox-visible')
})
