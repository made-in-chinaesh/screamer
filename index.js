const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
	let audio = new Audio()
	audio.src = './prank.m4a'
	audio.play()
	audio.loop = true
})

setTimeout(() => {
	btn.click()

}, 2000)
