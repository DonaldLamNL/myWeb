<template>
    <div id="app">
        <Nav class="limit-width" />
        <router-view class="limit-width"></router-view>
        <div style="margin-bottom: 700px"></div>
    </div>
</template>

<script>
import Nav from './components/Nav'

export default {
    name: 'App',
    components:{ Nav },
    data() {
        return {
            // All pages and their sections
            pages: [
                {
                    pageName: 'Home',
                    sections:[
                        { id: 'short-intro', name:'Introduction'},
                        { id: 'about', name:'About'},
                        { id: 'education', name:'Education'},
                        { id: 'skills', name:'Skills'},
                        { id: 'timetable', name:'Timetable'},
                    ]
                },
                {
                    pageName: 'Academic',
                    sections:[
                        { id: 'cuhk', name: 'CUHK' },
                        { id: 'dse', name: 'DSE' },
                    ]
                },
                {
                    pageName: 'Learning',
                    sections:[
                        { id: 'frontend', name: 'Front-End' },
                        { id: 'java', name: 'Java Back-End' },
                        { id: 'python', name: 'Python' },
                    ]
                }
            ]
        }
    },
    mounted() {
        // Save the pages and sections on PubSub
        PubSub.publish('pages', this.pages)
    },
}
</script>

<style>
#app{
    font-family: 'Times New Roman', Times, serif;
}
.limit-width{
    width: 100%;
    min-width: 1300px;
}
</style>
