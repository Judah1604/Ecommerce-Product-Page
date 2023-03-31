let addBtn = document.querySelector('.addToCartBtn'),
	notifier = document.querySelector('.notifier'),
	item = document.querySelector('.cart-dropdown .item'),
	cartNumber = document.querySelector('.cartNumber'),
	checkOutBtn = document.querySelector('.checkoutBtn'),
	noOfItems = cartItems.querySelector('.noOfItems'),
	result = cartItems.querySelector('strong'),
	itemPrice = cartItems.querySelector('.price'),
	price = cartItems.querySelector('.our-price'),
	toggle = document.querySelector('.toggle'),
	navMenu = document.querySelector('.nav-menu'),
	closeMenu = document.querySelector('.closeMenu'),
	deleteBtn = cartItems.querySelector('.delete')

addBtn.onclick = () => {
	let quantityText = Number(quantity.textContent)

	if (quantityText != 0) {
		notifier.style.display = 'none'
		item.style.display = 'flex'
		checkOutBtn.style.display = 'block'

		noOfItems.textContent = quantityText
		let numberedPrice = Number(itemPrice.textContent.slice(1, 4))
		let resultNumber = numberedPrice * quantityText
		result.textContent = '$' + resultNumber + '.00'
		cartNumber.style.display = 'block'
		cartNumber.textContent = quantityText
	}
}

deleteBtn.onclick = () => {
	item.style.display = 'none'
	cartNumber.style.display = 'none'
	checkOutBtn.style.display = 'none'
	notifier.style.display = 'flex'
}

toggle.onclick = () => {
	navMenu.classList.add('visible')
}

closeMenu.onclick = () => {
	navMenu.classList.remove('visible')
}

window.onresize = removeListener

document.addEventListener('DOMContentLoaded', removeListener)

function removeListener() {
	if (window.innerWidth <= 425) {
		mainImg.addEventListener('click', function () {
			setTimeout(() => {
				lightBox.classList.remove('lightbox-visible')
			}, 0.001)
		})
	}
}
