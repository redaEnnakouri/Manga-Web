<template>
    <nav class="justify-content-center d-flex">
        <ul class="pagination">
            <li :class="'page-item ' + (pagination.current_page <= 1 ? 'disabled' : '')"><a class="page-link" href="#" @click.prevent="changePage(1)">«</a></li>
            <li :class="'page-item ' + (pagination.current_page <= 1 ? 'disabled' : '')"><a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)">‹</a></li>
            <li :class="'page-item ' + (isCurrentPage(page) ? 'active' : '')" v-for="page in pages" :key="page"><a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a></li>
            <li :class="'page-item ' + (pagination.current_page >= pagination.last_page ? 'disabled' : '')"><a class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)">›</a></li>
            <li :class="'page-item ' + (pagination.current_page >= pagination.last_page ? 'disabled' : '')"><a class="page-link" href="#" @click.prevent="changePage(pagination.last_page)">»</a></li>
        </ul>
    </nav>
</template>
<script>
    export default {
        props: ['pagination', 'offset'],
        methods: {
            isCurrentPage(page) {
                return this.pagination.current_page === page;
            },
            changePage(page) {
                if (page > this.pagination.last_page) {
                    page = this.pagination.last_page;
                }
                this.pagination.current_page = page;
                this.$emit('paginate');
            }
        },
        computed: {
            pages() {
                let pages = [];
                let from = this.pagination.current_page - Math.floor(this.offset / 2);
                if (from < 1) {
                    from = 1;
                }
                let to = from + this.offset - 1;
                if (to > this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                while (from <= to) {
                    pages.push(from);
                    from++;
                }
                return pages;
            }
        }
    }
</script>
