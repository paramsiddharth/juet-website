window.addEventListener('load', () => {
	const copy = document.querySelector('#copyright');
	copy.addEventListener('click', () => {
		const link = document.createElement('a');
		link.href = 'https://www.paramsid.com';
		link.target = '_blank';
		link.style.display = 'none';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});
});