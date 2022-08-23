<template>
    <div id="home-image">
        <transition-group tag="ul" name="img">
            <li v-for="(i, index) in images" :key="index" v-show="index === curIndex">
                <div class="image" :style="{'background-image': 'url(' + i + ')'}"></div>
            </li>
        </transition-group>
    </div>
</template>

<script>
import Nav from '../Nav.vue'

export default {
    name:'HomeImage',
    components:{ Nav },
    data() {
        return {
            curIndex: 0,
            images: [
                require('../../assets/img/A01.webp'),
                require('../../assets/img/A02.webp'),
                require('../../assets/img/A03.webp'),
                require('../../assets/img/A04.webp'),
            ]
        }
    },
    methods: {
        autoPlay(){
            this.curIndex = (this.curIndex < this.images.length - 1) ? this.curIndex + 1 : 0
        },
        play(){
            setInterval(this.autoPlay, 4000);
        }
    },
    mounted() {
        this.play()
    },
}
</script>

<style scoped>
#home-image{
    height: 100vh;
    min-height: 600px;
    position: relative;
}
#home-image ul li{
    width: 100%;
    height: 600px;
    position: absolute;
}
#home-image .image{
    background: no-repeat center;
    background-size: cover;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
}
.img-enter-active {
    transition: opacity 3s ease;
}
.img-leave-active {
    transition: 3s;
    z-index: -100;
}
.img-enter{
    opacity: 0;
}
.img-enter-to{
    opacity: 1;
}
</style>