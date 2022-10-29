const container = document.querySelector('.fields__container');
const list = container.querySelector('.fields__data-list');
const icon = container.querySelector('.fields__icon');

const callback = () => {
	list.classList.toggle('fields__data-list--opened');
	icon.classList.toggle('fields__icon--rotated');
}

container.addEventListener('click', callback);

document.addEventListener('click', (event) => {
	if (!event.target.closest('.fields__container')) {
		list.classList.remove('fields__data-list--opened');
		icon.classList.remove('fields__icon--rotated');
	}
});