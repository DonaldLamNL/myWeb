<template>
    <div id="skills">
        <h1>Technical Skills</h1>
        <h2>I am good at the following technical ~</h2>
        <div class="wrapper" :style="'width:' + wrapperWidth + 'px'">
            <div class="container" v-for="(i, index) in technical" :key="index" :style="'color:' + i.color">
                <h3>{{i.name}}</h3>
                <Progress
                    class="progress-bar"
                    :value="progress[index]"
                    :strokeColor="i.color"
                    :strokeWidth="10"
                    :radius="50"
                    :transitionDuration="2000"
                />
                <div class="content clearfix">
                    <!-- Center Alignment -->
                    <ul :style="'top:' + (220 - i.content.length * 30) / 2 + 'px'">
                        <li v-for="(l, l_index) in i.content" :key="l_index">{{l}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Progress from 'easy-circular-progress/src/index.vue'

export default {
    name:'Skills',
    components: { Progress },
    data() {
        return {
            wrapperWidth: 0,
            progress: [],
            technical:[
                {name: 'HTML', progress: 90, color: '#D66839', content: ['Tags', 'List', 'Table', 'Form']},
                {name: 'CSS', progress: 50, color: '#519FCC', content: ['Basic', 'Background & Font', 'Layout', 'Float', 'Position']},
                {name: 'JavaScript', progress: 70, color: '#F5BD4F', content: ['Data Types', 'Function & Object', 'DOM & BOM', 'Regular Expression', 'ES5 Methods', 'Class & Prototype']},
                {name: 'ES6-11', progress: 80, color: '#F5BD4F', content: ['Template Literals', 'Destructuring Assignment', 'Arrow Function', 'Iterators & Generators', 'Promise', 'Set & Map']},
                {name: 'Ajax', progress: 60, color: '#EE695E', content: ['XML', 'JQuery', 'JSONP', 'CORS', 'Fetch']},
                {name: 'NodeJS', progress: 80, color: '#7BA368', content: ['CommonJS', 'npm & yarn', 'Node Modules', 'express', 'Interact with MongoDB']},
                {name: 'VueJS', progress: 70, color: '#63B486', content: ['Vue2', 'Vue-cli', 'Vuex', 'Vue Router']},
                {name: 'MongoDB', progress: 20, color: '#5F9F56', content: ['Create', 'Read', 'Update', 'Delete']},
                {name: 'C Lang.', progress: 70, color: '#6A92C2', content: ['File', 'Pointer', 'String', 'Data Structure']},
                {name: 'Java', progress: 40, color: '#CE8440', content: ['Basic', 'OOP']},
            ]
        }
    },
    methods:{
        onScoll(){
            let s = document.getElementById('skills')
            if(s && window.scrollY >= s.offsetTop - 100){
                this.technical.forEach(e => {
                    this.progress.push(e.progress)
                })
            }
        },
    },
    mounted(){
        this.$nextTick(() => {
            this.wrapperWidth = Math.ceil(this.technical.length / 2) * 220
        })
        this.onScoll()
        window.addEventListener('scroll', this.onScoll)
    }
}
</script>

<style scoped>
#skills{
    height: 700px;
    background: no-repeat cover;
    background-image: url(../../assets/background/technical.jpg);
    text-align: center;

}
h1{
    height: 80px;
    font-size: 40px;
    line-height: 80px;
    font-family: "Snell Roundhand", "cursive";
    font-weight: bolder;
}
h2{
    height: 50px;
    font-size: 25px;
    line-height: 50px;
    text-align: center;
    color: #694cec;
    font-family: "Apple Chancery", "cursive";
}
.wrapper{
    margin: 0 auto;
    max-width: 1300px;
}
.container{
    display: inline-block;
    width: 180px;
    height: 220px;
    border-radius: 30px 0;
    box-shadow: 10px lemonchiffon;
    text-align: left;
    margin: 20px;
    background-color: rgb(237, 237, 237);
    box-shadow: 10px 5px 5px rgb(92, 92, 92);
    text-align: center;
    position: relative;
    cursor: pointer;
}
.container h3{
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
    margin-bottom: 15px;
}
.progress-bar{
    display: inline-block;

}
.icon{
    height: 100%;
    width: 100%;
}

.content{
    width: 0;
    height: 100%;
    border-radius: 30px 0;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(61, 61, 61, 0.793);
    text-align: center;
    vertical-align: center;
    z-index: 1;
    overflow: hidden;
    transition: width 100ms;
}
.container:hover .content{
    width: 100%;
    height: 100%;
}
.content ul{
    position: relative;
    height: fit-content;
}
.content li{
    width: 180px;
    font-size: 15px;
    line-height: 2;
    color: azure;
}
</style>