<template>
    <div>
        <h1 @click="swap">
            <i class="fas fa-caret-right" v-if="collapsed"></i>
            <i class="fas fa-caret-down" v-else></i>
            {{academicRecords.title}}
        </h1>
        <AcademicList :list="list"/>
        <table>
            <thead>
                <tr>
                    <td>Course</td>
                    <td>Course Name</td>
                    <td>Units</td>
                    <td>Grade</td>
                    <td>Grade Points</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(c, index) in academicRecords.enrollments" :key="index">
                    <td v-for="(e, e_index) in c" :key="e_index">{{e}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td>{{totalUnits}}</td>
                    <td></td>
                    <td>{{totalGradePoints.toFixed(3)}}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import AcademicList from './AcademicList.vue'

export default {
    name:'Semester',
    components: { AcademicList },
    props: ['academicRecords', 'open', 'index'],
    data() {
        return {
            collapsed: false,
            totalUnits: 0,
            totalGradePoints: 0,
            list: {}
        }
    },
    methods: {
        swap(){
            this.collapsed = !this.collapsed
            this.open(this.index)
        }
    },
    mounted(){
        this.academicRecords.enrollments.forEach(e => {
            this.totalUnits += e.units
            this.totalGradePoints += e.gradePoints
        })
        this.list = {
            element: [
                ['Units Earned', this.totalUnits],
                ['Term GPA', this.academicRecords.termGPA.toFixed(3)],
                ['Cumulative GPA', (this.academicRecords.totalGradePoints / this.academicRecords.totalUnits).toFixed(3)],
                ['Academic Standing', 'Good Standing'],
            ]
        }
    }
}
</script>

<style scoped>
h1{
    height: 25px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    border-bottom: 1px solid #CCC;
    cursor: pointer;
}
h1 i{
    width: 12px;
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
table thead td,
table tfoot td{
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
</style>