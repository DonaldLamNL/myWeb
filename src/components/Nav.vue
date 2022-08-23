<template>
    <div id="nav" :class="navStyle">
        <div class="container">
            <!-- Logo -->
            <img class="logo" src="../assets/logo_white.png">

            <!-- HomeNav Component -->
            <transition tag="div" name="main-nav">
                <MainNav class="nav-list" v-show="show"/>
            </transition>

            <!-- PageNav Component -->
            <transition-group tag="div" name="page-nav">
                <HomeNav class="nav-list" v-show="!show  && getPage() === 'home'" :key="'home'"/>
            </transition-group>

            <!-- Display Button (HomeNav <-> PageNav) -->
            <div class="page-nav-btn" v-show="navStyle!='home-nav'" @click="show = !show">
                <transition-group tag="div" name="btn">
                    <i class="fas" :class="'fa-angle-down'" v-show="show" :key="'down'"></i>
                    <i class="fas" :class="'fa-angle-left'" v-show="!show" :key="'left'"></i>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>
import MainNav from './nav/MainNav.vue'
import HomeNav from './nav/HomeNav.vue'

export default {
    name:'Nav',
    components:{MainNav, HomeNav},
    data() {
        return {
            navStyle: '',    // #nav class name
            show: true
        }
    },
    methods: {
        // Get current page name
        getPage(path = this.$router.currentRoute.path){
            return path.split('/')[1]
        },
        // Change #nav class name
        setStyle(style){
            this.navStyle = style
        },
        onScroll(){
            if(window.top.scrollY < 100){
                this.setStyle(this.getPage() + '-nav')
                this.show = true
            }else{
                this.setStyle(this.getPage() + '-scroll')
                this.show = false
            }
        },
    },
    watch:{
        $route(to, from){
            if(window.top.scrollY > window.innerHeight / 2){
                this.setStyle(this.getPage(to.path) + '-scroll')
            }else{
                this.setStyle(this.getPage(to.path) + '-nav')
            }
        }
    },
    mounted() {
        this.setStyle(this.getPage() + '-nav')
        window.addEventListener('scroll', this.onScroll)
    },
}
</script>

<style scoped>
#nav{
    line-height: 50px;
    text-align: center;
    z-index: 9999;
}
.home-nav{
    height: 50px;
    position: relative;
    margin-bottom: -50px;
}
.home-scroll,
.academic-scroll,
.learning-scroll,
.academic-nav,
.learning-nav,
.blog-nav{
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #181e2def;
    color: #fff;
    transition: height 0.5s;
    /* overflow: hidden; */
}


.container{
    display: inline-block;
    position: relative;
    height: 50px;
    width: 900px;
}

.nav-list{
    position: absolute;
    right: 60px;
    height: 50px;
}

.page-nav-btn{
    display: inline-block;
    height: 50px;
    width: 50px;
    font-size: 25px;
    line-height: 50px;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    position: absolute;
    right: 10px;
}
.page-nav-btn:hover{
    background-color: rgba(199, 199, 199, 0.265);
    color: rgba(255, 255, 255);
}
.page-nav-btn i{
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
}

.logo{
    display: inline-block;
    position: absolute;
    margin-top: 15px;
    left: 0;
    height: 20px;
    background: no-repeat contain;
}

.main-nav-enter-active{
    animation: main-nav-fade 0.5s ease-in;
}
.main-nav-leave-active{
    animation: main-nav-fade 0.5s ease-in reverse;
}
@keyframes main-nav-fade{
    from{
        transform: translateY(-20px);
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
}

.page-nav-enter-active{
    animation: page-nav-fade 0.5s ease-in;
}
.page-nav-leave-active{
    animation: page-nav-fade 0.5s ease-in reverse;
}
@keyframes page-nav-fade{
    from{
        transform: translateX(100px);
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
}

.btn-enter-active{
    animation: btn-fade 0.2s;
}
.btn-leave-active{
    animation: btn-fade 0.2s reverse;
}
@keyframes btn-fade{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
</style>