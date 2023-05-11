

const slider = {
	items: Array.from(document.querySelectorAll('.carousel-item')),
	curentIndex: 3,
	
	clickByItem(index) {
		this.curentIndex = index;
		this.render();
	},
	render() {
		// console.log(this);
		this.items.forEach((item, index) => {
			item.style.setProperty('--progress', index - this.curentIndex);
			item.style.setProperty('--center', index === this.curentIndex ? 1 : 0);
			item.style.setProperty('--opasiti', index === this.curentIndex ? 1 : this.curentIndex / (this.items.length - 1) + 0.09);
		}, this);
	},
	init() {
		this.items.forEach(function(item,index){
			item.addEventListener('click', this.clickByItem.bind(this, index));
			item.addEventListener('mousemove', this.clickByItem.bind(this, index));
			// item.addEventListener('mousewheel', this.clickByItem.bind(this, index));
			item.addEventListener('mousedown', this.clickByItem.bind(this, index));		
		},this)
		this.render();
	},

}
slider.init();
