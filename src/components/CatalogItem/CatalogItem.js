import './catalog-image2.png';

import './icons/bookmark.svg'
import './icons/cart.svg'
import './icons/eye.svg'

export default {
    name: 'CatalogItem',
    data() {
        return {
            cart: false,
            bookmark: false,
            active: false
        }
    },
    methods: {
        inCart() {
            this.cart = !this.cart
        },

        inBookmark() {
            this.bookmark = !this.bookmark
            this.active = !this.active
        }
    }
}