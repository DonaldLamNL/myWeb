<template>
    <div id="education">
        <h1>Education</h1>
        <h2>Knowledge, like a sea, is boundless; only through hard study can one reach the destination.</h2>
        <div class="timeline" v-animate-onscroll="'animated fadeIn'">
            <div class="container" v-for="(i, i_index) in studyHis" :key="i_index">
                <h6>{{i.start}}</h6>
                <div class="content">
                    <h5>{{i.title}}</h5>
                    <table>
                        <tbody v-for="(m, m_index) in i.msg" :key="m_index">
                            <td>{{m.title}} :</td>
                            <td>{{m.content}}</td>
                        </tbody>
                    </table>
                </div>
                <!-- <a href="">Read More</a> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Education',
    data() {
        return {
            studyHis:[
                {title:'Secondary Education', start:'2014', 
                    msg:[
                        {title: 'School', content: 'Kwun Tong Government Secondary School'},
                        {title: 'Electives', content: 'Physic, M2'},
                        {title: 'DSE Result', content: '23 (Best 5)'},
                    ]
                },
                {title:'BSc. Computer Science', start:'2020', 
                    msg:[
                        {title: 'University', content: 'The Chinese University of Hong Kong'},
                        {title: 'Collage', content: 'Lee Woo Sing Collage'},
                        {title: 'Exp Grad.', content: '2024'},
                        {title: 'Stream', content: 'ELITE Stream'},
                        {title: 'GPA', content: '3.610/4.000'},
                    ]
                },
            ]
        }
    },
}
</script>

<style scoped>
#education{
    position: relative;
    height: 700px;
    background-image: url(../../assets/background/chalkboard.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: #f0ffff;
    font-family: "Comic Sans MS", "Comic Sans", "cursive";
}
h1{
    height: 80px;
    font-size: 35px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    text-shadow: rgb(101, 101, 101) 0.1em 0.1em 0.2em
}
h2{
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color: #EC624C;
    text-shadow: rgb(81, 27, 27) 0.1em 0.1em 0.2em
}
.timeline {
    position: relative;
    width: 1000px;
    margin: 30px auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
}

/* Container around content */
.container {
    position: relative;
    width: 500px;
    height: 240px;
    /* background-color: #bfa; */
}
.container:nth-child(even){
    left: 50%;
}
/* The circles on the timeline */
.container::before{
    position: absolute;
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgb(103, 103, 103);
    border: 4px solid #EC624C;
    z-index: 1;
}
.container:nth-child(odd)::before{
    right: -16.5px;
}
.container:nth-child(even)::before{
    left: -16.5px;
}
.container h6{
    position: absolute;
    font-size: 20px;
    line-height: 33px;
}
.container:nth-child(odd) h6{
    right: -90px;
}
.container:nth-child(even) h6{
    left: -90px;
}

.content{
    width: 410px;
    height: 160px;
    padding: 0 47px;
    /* background-color: #bfa; */
    text-align: left;
}
.container:nth-child(odd) .content{
    text-align: right;
}
.content h5{
    font-size: 20px;
    line-height: 33px;
}

.content table{
    display: inline-block;
    font-size: 15px;
    line-height: 30px;
}
.content td:first-child{
    font-weight: bold;
    text-align: right;
    padding-right: 20px;
}
.content td:last-child{
    text-align: left;
}



/* .container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  top: 15px;
  z-index: 1;
} */


</style>