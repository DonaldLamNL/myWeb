<template>
    <div id="academic-list">
        <h3>{{list.title}}</h3>
        <table>
            <tbody>
                <tr v-for="(e, index) in list.element" :key="index">
                    <td v-for="(i, i_index) in e" :key="i_index">{{i}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'AcademicList',
    props: ['list'],
}
</script>

<style scoped>
#academic-list{
    margin-left: 7.5%;
    font-size: 18px;
    line-height: 1.5;
    text-align: left;
    margin-top: 30px;
}
h3{
    font-size: 25px;
    color: #4D73BE;
    font-weight: bolder;
    text-decoration: #4D73BE underline;
}
tbody td:first-child{
    width: 250px;
    font-weight: bold;
}
</style>