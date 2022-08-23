<template>
    <div id="about">
        <div class="container">
            <div class="profile" v-animate-onscroll="'animated fadeIn'"></div>
            <div class="content" v-animate-onscroll="'animated fadeIn'">
                <img class="signature" src="../../assets/signature.png" alt="">
                <h1>About Me</h1>
                <h1>Self Introduction</h1>
                <p>I'm an undergraduate studying computer science at the Chinese University of Hong Kong. I self-learned front-end in the last two summer semesters, and this webpage is a conclusion and exhibition of my learning result, hope you enjoy my design. I am going to learn Python and TensorFlow in the following semester, and I also want to learn Django for developing websites; I hope I have enough time, lol. I still haven't planned my development direction; I am interested in both AI and back-end, but as a priority, I hope to find an internship in front-end development in the coming year to enrich my working experience.</p>                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nulla. Tenetur, quisquam beatae cum laudantium sint sit eaque consequatur obcaecati molestiae a tempore ipsa fugiat, natus saepe alias iure! Nam quam, aut excepturi animi eos ullam numquam eum omnis rem cum earum corporis impedit recusandae unde quos ab perspiciatis similique!</p>
                <router-link class="about-me-btn" to="/about">
                    <span>ABOUT ME</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'About',
}
</script>

<style scoped>
#about{
    height: 800px;
    background-image: url(../../assets/background/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    overflow: hidden;
}
.container{
    display: inline-block;
    width: fit-content;
    min-width: 1100px;
    margin-top: 100px;
    text-align: left;
}
.profile{
    display: inline-block;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    margin-right: 100px;
    background-color: aliceblue;
    /* background-image: url(); */
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: top;
}
.content{
    display: inline-block;
    height: 400px;
    width: 600px;
    position: relative;
    color: aliceblue;
}
.signature{
    height: 175px;
    position: absolute;
    top: -50px;
    right: -100px;
    transform: rotate(10deg);
}
.content h1{
    height: 60px;
    font-size: 50px;
    line-height: 60px;
    text-align: left;
    font-family: Georgia, serif;
}
.content h2{
    height: 50px;
    font-size: 25px;
    line-height: 50px;
}
.content p{
    font-size: 20px;
    line-height: 30px;
    font-family: 'Times New Roman', Times, serif;
}
.about-me-btn{
    display: block;
    width: fit-content;
    height: 45px;
    padding: 0 20px;
    border: transparent 1px solid;
    position: absolute;
    margin: 0 auto;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    line-height: 45px;
    text-decoration: none;
}
.about-me-btn:hover{
    border: rgb(127, 129, 255) 1px solid;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}
.about-me-btn span{
    color: aliceblue;
    font-weight: bold;
}
.about-me-btn:hover span{
    color: rgb(127, 129, 255);
}


</style>