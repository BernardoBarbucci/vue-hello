
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Bear lunch',
            source: "https://shop.wwf.ca/cdn/shop/files/grizzly-bear-WW199558.jpg?v=1694540462&width=1024"
        }
    }
}).mount('#app')