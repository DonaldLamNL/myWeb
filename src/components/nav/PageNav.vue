<template>
    <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in pages" :key="index">
            <router-link
                class="nav-link"
                active-class="active"
                :to="item.path"
            >
                {{item.name}}
                <div class="nav_bar"></div>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name:'HomeNav',
    data() {
        return {
            pages:[
                {name:'Introduction', path:'/home/introduction'},
                {name:'About Me', path:'/home/about'},
                {name:'Timetable', path:'/home/timetable'},
            ]
        }
    },
    // console.log(this.$router.options.routes);
}
</script>

<style scoped>
.nav-list{
    display: inline-block;
    width: fit-content;
}
.nav-item{
    display: inline-block;
    margin: 0 40px;
}
.nav-link{
    display: block;
    position: relative;
    line-height: 50px;
    font-size: 20px;
    text-decoration: none;
    color: aliceblue;
}
.nav_bar{
    width: 0;
    height: 2px;
    position: absolute;
    bottom: 13px;
    background-color: rgb(207, 207, 20);
    transition: width 0.3s;
}
.active > .nav_bar,
.nav-link:hover > .nav_bar{
    width: 100%;
}
</style>