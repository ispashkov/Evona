<template lang="pug">

	include ../../layout/mixins

	ul.pagination
		li.pagination__item.pagination__item_prev(@click='changePage(pagePrev)' :class='[ pagePrev <= 0 ? "pagination__item_inactive" : "" ]' :disabled="pagePrev <= 0")
			+svgIcon(25, 15, '', '#pagination__arrow')

		li.pagination__item(v-if="hasFirst")
				a.pagination__link(@click.prevent='changePage(1)') 1
		li.pagination__item(v-if='hasFirst') ...

		li(v-for='page in pages' :class='[ current == page ? "pagination__item pagination__item_active" : "pagination__item" ]')
			a.pagination__link(@click.prevent='changePage(page)') {{ page }}

		li.pagination__item(v-if='hasLast') ...
		li.pagination__item(v-if="hasLast")
				a.pagination__link(@click.prevent='changePage(totalPages)') {{ totalPages }}

		li.pagination__item.pagination__item_next(@click='changePage(pageNext)' :class='[ pageNext >= totalPages ? "pagination__item_inactive" : "" ]' :disabled="pageNext >= totalPages")
			+svgIcon(25, 15, '', '#pagination__arrow')

</template>

<script src='./Pagination'></script>


