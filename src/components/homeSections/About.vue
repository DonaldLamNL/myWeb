<template>
    <div id="about">
        <h1>About Me</h1>
        <div class="profile">
            <img class="signature" src="../../assets/signature.png">
        </div>
        <div class="content">
            <h3>Keep on going never give up.</h3>
            <p>I'm an undergraduate, studying computer science at the Chinese University of Hong Kong. I self-learned front-end in the last two summer semesters, and this webpage is a conclusion and exhibition of my learning result, hope you enjoy my design. I am going to learn Python and TensorFlow in the following semester, and I also want to learn Django for developing websites; I hope I have enough time, lol. I still haven't planned my development direction; I am interested in both AI and back-end, but as a priority, I hope to find an internship in front-end development in the coming year to enrich my working experience.</p>
            <!-- <h4>I am a</h4>
            <table>
                <tbody v-for="(i, index) in characteristic" :key="index">
                    <td>{{i.title}}</td>
                    <td>{{i.content}}</td>
                </tbody>
            </table> -->
        </div>
        <div class="resume" @click="open">Resume</div>
    </div>
</template>

<script>
export default {
    name:'About',
    data() {
        return {
            characteristic: [
                {title: 'Responsible', content: 'I will never escape any responsibility because I would feel ashamed of it.'},
                {title: '', content: ''},
                {title: '', content: ''},
                {title: '', content: ''},
            ]
        }
    },
    methods:{
        open(){
            window.open('/manager/static/cv.pdf')
        }
    }
}
</script>

<style scoped>
#about{
    height: 650px;
    background-image: url(../../assets/background/future.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    color: aliceblue;
}
h1{
    height: 80px;
    font-size: 40px;
    line-height: 80px;
    font-family: "Snell Roundhand", "cursive";
    font-weight: bolder;
}

/* The Profile Image */
.profile{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 20px auto;
    background-color: aliceblue;
    background-image: url(../../assets/profile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
}

/* The signature */
.signature{
    position: absolute;
    top: -70px;
    left: 200px;
    height: 150px;
    transform: rotate(15deg);
}

/* The content */
.content{
    width: 1000px;
    height: 250px;
    margin: 0 auto;
    /* background-color: #bfa; */
}
.content h3{
    font: 30px bold;
    line-height: 2;
    font-family: "Brush Script MT", "Brush Script Std", "cursive";
}
.content p{
    text-align: left;
    font-size: 18px;
    line-height: 36px;
}

/* Resume Button */
.resume{
    display: block;
    width: fit-content;
    height: 45px;
    padding: 0 20px;
    border: transparent 1px solid;
    margin: 0 auto;
    font-size: 20px;
    line-height: 45px;
    text-decoration: none;
    cursor: pointer;
}
.resume:hover{
    border: rgb(127, 129, 255) 1px solid;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}
.resume span{
    color: aliceblue;
    font-weight: bold;
}
.resume:hover span{
    color: rgb(127, 129, 255);
}
</style>