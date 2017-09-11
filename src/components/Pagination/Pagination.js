import { mapActions } from 'vuex';

import './icons/pagination__arrow.svg';

export default {
	name: 'Pagination',
	props: {
		current: {
			type: Number,
			default: 1
		},
		total: {
			type: Number,
			default: 0
		},
		perPage: {
			type: Number,
			default: 9
		},
		pageRange: {
			type: Number,
			default: 1
		}
	},
	computed: {
		totalPages() {
			return Math.ceil(this.total / this.perPage);
		},

		pageNext() {
			return this.current + 1;
		},

		pagePrev() {
			return this.current - 1;
		},

		rangeStart() {
			let start = this.current - this.pageRange;

			return start > 0 ? start : 1;
		},

		rangeEnd() {
			let end = this.current + this.pageRange;

			return end < this.totalPages ? end : this.totalPages;
		},

		pages() {
			let pages = [];

			for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
				pages.push(i);
			}

			return pages;
		},

		hasFirst() {
			return this.rangeStart !== 1;
		},

		hasLast() {
			return this.rangeEnd < this.totalPages;
		},

		hasPrev() {
			return this.current > 1;
		},

		hasNext() {
			return this.current < this.totalPages;
		}
	},
	methods: {
		...mapActions(['getProducts']),

		changePage(page) {
			if (page >= this.totalPages + 1 || page <= 0) return false;
			this.$emit('page-changed', page);
		}
	}
};
