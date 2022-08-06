const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/create?namespace=laptop&value=0')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}












