<template>
    <div id="cuhk">
        <h1>BSc. Computer Science</h1>
        <h2>The Chinese University of Hong Kong</h2>
        <div v-for="(a, index) in academics" :key="index">
            <AcademicList :list="a"/>
        </div>
        <ul class="course-history">
            <li v-for="(s, index) in semesters" :key="index">
                <Semester class="sem" :class="collapse[index]" :academic-records="s" :open="open" :index="index"/>
            </li>
        </ul>
    </div>
</template>

<script>
import AcademicList from './AcademicList.vue'
import Semester from './Semester.vue'

export default {
    name:'CUHK',
    components: { AcademicList, Semester },
    data() {
        return {
            collapse: [],
            GPA:[],
            units: [],
            semesters: [
                {
                    title: '2022 Summer Semester',
                    enrollments: [
                        {course: 'UGEA2100', name: 'Outline of Chinese Culture', units: 2, grade: 'A-', gradePoints: 7.4},
                    ],
                    totalUnits: 64,
                    totalGradePoints: 231.2,
                    termGPA: 3.7
                },
                {
                    title: '2022 Spring Semester',
                    enrollments: [
                        {course: 'ESTR2102', name: 'Data Structures', units: 3, grade: 'B+', gradePoints: 9.9},
                        {course: 'ESTR2020', name: 'Statistics for Engineers', units: 2, grade: 'A', gradePoints: 8.0},
                        {course: 'CENG3420', name: 'Computer Organization & Design', units: 3, grade: 'B+', gradePoints: 9.9},
                        {course: 'CSCI3250', name: 'Computers and Society', units: 2, grade: 'B-', gradePoints: 5.4},
                        {course: 'CSCI3251', name: 'Engineering Practicum', units: 1, grade: 'P', gradePoints: 0},
                        {course: 'ELTU2014', name: 'English for ERG Stds I', units: 3, grade: 'B+', gradePoints: 9.9},
                        {course: 'UGFN1000', name: 'In Dialogue With Nature', units: 3, grade: 'A', gradePoints: 12.0},
                    ],
                    totalUnits: 62,
                    totalGradePoints: 223.8,
                    termGPA: 3.444
                },
                {
                    title: '2021 Autumn Semester',
                    enrollments: [
                        {course: 'ENGG2760', name: 'Probability for Engineers', units: 2, grade: 'A-', gradePoints: 7.4},
                        {course: 'ENGG2440', name: 'Discrete Math for Engineers', units: 3, grade: 'A-', gradePoints: 11.1},
                        {course: 'ENGG2020', name: 'Digital Logic and Systems', units: 3, grade: 'A', gradePoints: 12.0},
                        {course: 'CSCI1130', name: 'Intro to Computing Using Java', units: 3, grade: 'A-', gradePoints: 11.1},
                        {course: 'CHLT1200', name: 'University Chinese II', units: 3, grade: 'B+', gradePoints: 9.9},
                        {course: 'UGFH1000', name: 'In Dialogue With Human', units: 3, grade: 'A-', gradePoints: 11.1},
                    ],
                    totalUnits: 46,
                    totalGradePoints: 168.7,
                    termGPA: 3.682
                },
                {
                    title: '2021 Spring Semester',
                    enrollments: [
                        {course: 'ENGG1120', name: 'Linear Algebra for Engineers', units: 3, grade: 'A', gradePoints: 12.0},
                        {course: 'ENGG1130', name: 'Multivariable Calculus for Eng', units: 3, grade: 'A', gradePoints: 12.0},
                        {course: 'MATH1030', name: 'Linear Algebra I', units: 3, grade: 'A-', gradePoints: 11.1},
                        {course: 'STAT1011', name: 'Introduction to Statistics', units: 3, grade: 'A-', gradePoints: 11.1},
                        {course: 'ELTU1001', name: 'Foundation Eng for Uni Studies', units: 4, grade: 'B+', gradePoints: 13.2},
                        {course: 'PHED1027', name: 'Team Handball (Men)', units: 1, grade: 'P', gradePoints: 0},
                    ],
                    totalUnits: 29,
                    totalGradePoints: 106.1,
                    termGPA: 3.713
                },
                {
                    title: '2020 Autumn Semester',
                    enrollments: [
                        {course: 'MATH1510', name: 'Calculus for Engineers', units: 3, grade: 'A', gradePoints: 12.0},
                        {course: 'ENGG1100', name: 'Problem Solving By Programming', units: 3, grade: 'A', gradePoints: 12.0},
                        {course: 'PHYS1110', name: 'Engineering Phy: Mech & Thermo', units: 3, grade: 'A-', gradePoints: 11.1},
                        {course: 'CHLT1100', name: 'University Chinese I', units: 3, grade: 'P', gradePoints: 0},
                        {course: 'GEWS1011', name: 'College Induction Course', units: 3, grade: 'B+', gradePoints: 9.9},
                        {course: 'PHED1041', name: 'Badminton (Men)', units: 1, grade: 'C-', gradePoints: 1.7},
                    ],
                    totalUnits: 13,
                    totalGradePoints: 46.7,
                    termGPA: 3.592
                },
            ],
            academics: [
                {
                    title: 'Academics',
                    tableHead: ['Name', 'Time'],
                    element: [
                        ['Board-Based Engineering', 'Autumn Semestor 2020'],
                        ['BSc. Computer Science', 'Autumn Semestor 2021'],
                        ['ELITE Stream', 'Spring Semestor 2022'],
                        ['Expected Graduation Term', 'Spring Semestor 2024'],
                    ]
                },
                {
                    title: 'Academic Records Review',
                    tableHead: ['Records', 'Value'],
                    element: [
                        ['Total Grade Points', 231.2],
                        ['Total Units Taken (P/F)', '64 (+5)'],
                        ['Cumulative GPA', 3.613],
                        ['Major GPA', 3.382],
                    ]
                },
                {
                    title: 'Academic Honors and Awards',
                    tableHead: ['Awards', 'Time'],
                    element: [
                        ['Dean\'s List', '2020 - 2021 (Year 1)'],
                    ]
                },
                {
                    title: 'Course History',
                }
            ]
        }
    },
    methods: {
        onClick(i){
            console.log(i);
            console.log(this.semesters[0]);
        },
        initCollapse(){
            for(let i = 0; i < this.semesters.length; i++){
                this.collapse[i] = 'collapsed'
            }
        },
        open(index){
            let newValue = this.collapse[index] === '' ? 'collapsed' : ''
            this.collapse.splice(index, 1, newValue)
        },
    },
    mounted(){
        this.initCollapse()
    }
}
</script>

<style scoped>
#cuhk{
    width: 85%;
    min-width: 1000px;
    height: 1000px;
    margin: 50px auto;
    box-shadow: 0 0.3em 1em #000;
    /* background-color: #bfa; */
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
.course-history{
    margin: 20px auto;
    width: 900px;
}
.sem{
    transform: scaleY(1);
    transition: transform 1s ease-in-out;
    overflow: hidden;
}
.collapsed{
    height: 50px;
    /* transform: scaleY(0); */
}
</style>