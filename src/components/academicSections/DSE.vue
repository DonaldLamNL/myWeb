<template>
    <div id="dse">
        <h1>Hong Kong Diploma of Secondary Education (HKDSE)</h1>
        <h2>Kwun Tong Government Secondary School</h2>
        <AcademicList :list="list" />
        <table>
            <thead>
                <tr>
                    <td>Subject</td>
                    <td>Level</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(i, index) in dseResults" :key="index">
                    <td>{{i[0]}}</td>
                    <td>{{i[1]}}</td>
                </tr>
            </tbody>
        </table>
        <div class="button" @click="openPDF('/manager/static/HKDSE_Results.pdf')">Download</div>
        <div class="button" @click="openPDF('/manager/hexo/index.html')">Download2</div>
    </div>
</template>

<script>
import AcademicList from './AcademicList.vue'

export default {
    name:'DSE',
    components: { AcademicList },
    data() {
        return {
            dseResults: [
                ['Mathematics (Compulsory and Extended)', '5*'],
                ['Mathematics (Algebra and Calculus)', '5*'],
                ['Physics', '5'],
                ['English Language', '3'],
                ['Chinese Language', '3'],
                ['Liberal Studies', '3'],
            ],
            list: {
                element: [
                    ['Exam Year', '2020'],
                    ['Best 5 Subjects', '23']
                ]
            }
        }
    },
    methods: {
        openPDF(path){
            window.open(path)
        }
    },
}
</script>

<style scoped>
#dse{
    width: 85%;
    min-width: 1000px;
    height: 600px;
    margin: 50px auto;
    box-shadow: 0 0.3em 1em #000;
    overflow: scroll;
    text-align: center;
}
h1{
    font-size: 35px;
    line-height: 1;
    margin-top: 20px;
}
h2{
    font-size: 20px;
    line-height: 2;
}
table{
    width: 800px;
    margin: 50px;
    border: 2px solid black;
    margin: 25px auto;
    border-collapse: collapse;
}
table td{
    border: 1px solid black;
    border-right: 2px solid black;
    height: 40px;
    vertical-align: middle;
    text-align: center;
}
table td:nth-child(2){
    width: 350px;
}
table thead td{
    border: 2px solid black;
    background-color: rgb(189, 187, 187);
    font-weight: bolder;
}
table tbody tr:nth-child(odd){
    background-color: #fff;
}
table tbody tr:nth-child(even){
    background-color: rgb(216, 214, 214);
}
.button{
    cursor: pointer;
}
.button:hover{
    text-decoration: underline;
}
</style>