<template>
    <ul class="home-nav">
        <li class="nav-item" v-for="(item, index) in sections" :key="index">
            <div
                class="nav-link"
                @click="jump(item)"
                :class="active === index ? 'active' : ''"
            >
                {{item.name}}
            </div>

        </li>
    </ul>
</template>

<script>
export default {
    name:'HomeNav',
    data() {
        return {
            active: 0,
            sections: []
        }
    },
    methods: {
        jump({id, scrollToTop} = item){
            if(scrollToTop){
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
                return
            }
            var anchor = document.getElementById(id)
            window.scrollTo({
                top: anchor.offsetTop - 50,
                behavior: 'smooth'
            })
        },
        onScroll(){
            this.pActive = PubSub.subscribe('activeSection', (_, index) => {
                this.active = index
            })
        }
    },
    mounted() {
        this.pid = PubSub.subscribe('pages', (_, pages) => {
            this.sections = pages[0].sections
        })
        addEventListener('scroll', this.onScroll)
    },
    beforeDestroy(){
        PubSub.unsubscribe(this.pid)
    }
}
</script>

<style scoped>
.home-nav{
    display: inline-block;
    width: fit-content;
}
.nav-item{
    display: inline-block;
}
.nav-link{
    padding: 0 20px;
    display: block;
    position: relative;
    line-height: 50px;
    font-size: 20px;
    text-decoration: none;
    color: aliceblue;
    background-color: transparent;
    transition: background-color 0.5s ease;
    cursor: pointer;
}
.active,
.nav-link:hover{
    height: 50px;
    background-color: rgba(157, 94, 83, 0.8)
}
</style>