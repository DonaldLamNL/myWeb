<template>
    <div id="timetable">
        <h1>Working Timetable (2022 Autumn Semester)</h1>
        <table v-animate-onscroll="'animated fadeIn'">
            <!-- The date of the timetable -->
            <thead>
                <tr>
                    <th></th>
                    <th v-for="(d, index) in days" :key="index">{{d}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(t, t_index) in period" :key="t_index">
                    <!-- Time period -->
                    <td>{{t}}</td>
                    <!-- Course -->
                    <template v-for="(d, d_index) in days">
                        <td 
                            :key="d_index"
                            v-if="getElement('repeat', t_index, d_index)"
                            :rowspan="getElement('span', t_index, d_index)"
                            :style="{ backgroundColor: getElement('color', t_index, d_index)}"
                        >
                            {{getElement('courseCode', t_index, d_index)}}
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'Timetable',
    data() {
        return {
            // To determine whenever the timetable matrix is parsed or not
            parsed: false,
            // The timetable 2D matrix
            timetable: [[]],
            // courses list  (save in database)
            courses: [],
            // The days in a week
            days:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            // The time period
            period:[
                '0830-0930', '0930-1030', '1030-1130', '1130-1230', '1230-1330',
                '1330-1430', '1430-1530', '1530-1630', '1630-1730', '1730-1830'
            ],
        }
    },
    methods: {
        // Transfer the days to specific numbers
        dayToNumber(day){
            switch (day) {
                case 'Mo':
                    return 1
                case 'Tu':
                    return 2
                case 'We':
                    return 3
                case 'Th':
                    return 4
                case 'Fr':
                    return 5
                case 'Sa':
                    return 6
                case 'Su':
                    return 7
                default:
                    return -1
            }
        },

        // Initalise the timetable array
        initTimetable(){
            let element = {courseCode: '', color: 'transparent', span: 1}
            for(let i = 0; i < 10; i++){
                this.timetable[i] = []
                for(let j = 0; j < 5; j++){
                    this.timetable[i][j] = element
                }
            }
            // update the timetable matrix
            this.updateTimetable()
        },

        // Get the courses data and place the event into timetable matrix
        updateTimetable(){
            this.courses.forEach(c => {   // for each courses
                let {courseCode, times, color} = c
                times.forEach(t => {    // for each course period
                    let {day, start, end} = t

                    start = Math.floor(parseInt(start) / 100)   // starting time represents in number
                    end = Math.floor(parseInt(end) / 100)       // ending time represents in number
                    day = this.dayToNumber(day)                 // day number

                    let span = end - start      // number of rows have to span
                    let element = {courseCode, color, span}     // the element in timetable matrix
                    this.timetable[start - 8].splice(day - 1, 1, element)   // place the element into timetable matrix

                    // if there is a span, set the covered element's span to 0
                    for(let i = 1; i <= span - 1; i++){
                        element = {courseCode: '', color: '', span: 0}
                        this.timetable[start - 8 + i].splice(day - 1, 1, element)   // place the element into timetable matrix
                    }
                })
            });
            this.parsed = true  // the timetable was parsed
        },

        // Return the elements from timetable array
        getElement(e, i, j){
            if(!this.parsed){
                return ''
            }
            switch (e) {
                case 'courseCode':
                    return this.timetable[i][j].courseCode
                case 'color':
                    return this.timetable[i][j].color
                case 'span':
                    return this.timetable[i][j].span
                case 'repeat':
                    return this.timetable[i][j].span !== 0
                default:
                    return null
            }
        },

        // [Ajax Req] Get courses information
        getCourses(){
            fetch('http://127.0.0.1:8081/timetable').then(res => {
                return res.json()
            }).then(json => {
                this.courses = json
                this.initTimetable()
            }).catch(err => {
                console.error(err)
                this.courses = [
                    // CSCI3130
                    {
                        courseCode:'CSCI3130',
                        times:[
                            {day:'Mo', start:'1630', end:'1815'},
                            {day:'Tu', start:'1630', end:'1715'},
                            {day:'Th', start:'1730', end:'1815'}
                        ],
                        color: '#F3B03D'
                    },
                    // CSCI3150
                    {
                        courseCode:'CSCI3150',
                        times:[
                            {day:'Tu', start:'1230', end:'1415'},
                            {day:'We', start:'1030', end:'1115'},
                            {day:'Th', start:'1630', end:'1715'}
                        ],
                        color: '#D5D5D5'
                    },
                    // CSCI3160
                    {
                        courseCode:'CSCI3160',
                        times:[
                            {day:'We', start:'1130', end:'1315'},
                            {day:'Th', start:'1130', end:'1215'},
                            {day:'Th', start:'1330', end:'1415'}
                        ],
                        color: '#71C0F9'
                    },
                    // ESTR3108
                    {
                        courseCode:'ESTR3108',
                        times:[
                            {day:'Tu', start:'1430', end:'1615'},
                            {day:'We', start:'1730', end:'1815'},
                            {day:'Th', start:'0930', end:'1115'}
                        ],
                        color:'#F19BC8'
                    },
                    // UGEB2530
                    {
                        courseCode:'UGEB2530',
                        times:[{day:'We', start:'1430', end:'1715'}],
                        color: '#97F9EA'
                    },
                    // UGEC2945
                    {
                        courseCode:'UGEC2945',
                        times:[{day:'Mo', start:'1430', end:'1615'}],
                        color: '#A5F66A'
                    },
                    // GEWS1000
                    {
                        courseCode:'GEWS1000',
                        times:[{day:'Fr', start:'1130', end:'1315'}],
                        color: '#FDEF71'
                    }
                ]
                this.initTimetable()
            })
        }
    },
    mounted(){
        this.$nextTick(this.getCourses)
    }
}
</script>

<style scoped>
#timetable{
    height: 500px;
    background-image: url(../../assets/background/autumn.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
h1{
    height: 40px;
    font-size: 40px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-family: "Snell Roundhand", "cursive";
    font-weight: bolder;
}
table{
    border: 2px solid black;
    margin: 50px auto;
    opacity: 0.9;
    background-color: rgb(222, 187, 187);
    border-collapse: collapse;
    font-family: 'Times New Roman', Times, serif;
}
table th,
table td{
    border: 1px solid black;
    height: 30px;
    width: 150px;
    vertical-align: middle;
    text-align: center;
}
table th{
    border-bottom: 2px solid black;
    font-weight: bolder;
}
table th{
    border-bottom: 2px solid black;
    font-weight: bolder;
}
table th:first-child,
table td:first-child{
    border-right: 2px solid black;
    font-weight: bolder;
}
</style>