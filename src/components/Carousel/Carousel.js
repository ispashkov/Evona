import './icons/arrow-slider.svg';

export default {
	name: 'Carousel',
	data() {
		return {
			dataStep: this.$props.step,
			dataIndex: this.$props.index,
			dataItems: this.$props.items
		};
	},
	props: {
		items: {
			type: Number,
			required: false,
			default: 5
		},

		step: {
			type: Number,
			required: true
		},

		index: {
			type: Number,
			required: false,
			default: 0
		},

		images: {
			type: Array,
			required: true
		},

		vertical: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	computed: {
		carouselWidth() {
			return 72 * this.dataItems;
		},

		carouselInnerWidth() {
			return 72 * this.images.length;
		}
	},
	methods: {
		carouselPrev() {
			if (this.dataStep >= 0 && this.dataIndex > 0) {
				this.dataIndex -= 1;
				this.dataStep - +72;
			} else if (
				this.dataStep >= -(this.carouselInnerWidth - this.carouselWidth) &&
				this.dataIndex > 0
			) {
				this.dataStep += 72;
				this.dataIndex -= 1;
			} else {
				this.dataStep -= 0;
			}

			this.$emit('currentSlide', this.dataIndex);
		},

		carouselNext() {
			if (
				this.dataStep == -(this.carouselInnerWidth - 72) ||
				this.dataIndex >= this.images.length - 1
			) {
				return;
			} else if (
				this.dataStep <= -(this.carouselInnerWidth - this.carouselWidth) &&
				this.dataIndex <= this.images.length - 1
			) {
				this.dataStep -= 0;
				this.dataIndex += 1;
			} else {
				this.dataStep -= 72;
				this.dataIndex += 1;
			}

			this.$emit('currentSlide', this.dataIndex);
		},

		itemClick(key) {
			this.dataIndex = key;
			this.$emit('currentSlide', this.dataIndex);
		}
	}
};
