<template>
    <div id="home">
        <Introduction />
        <About />
        <Education />
        <Skills />
        <Timetable />
    </div>
</template>

<script>
// Import Components
import Introduction from '../components/homeSections/Introduction.vue'
import About from '../components/homeSections/About.vue'
import Education from '../components/homeSections/Education.vue'
import Skills from '../components/homeSections/Skills.vue'
import Timetable from '../components/homeSections/Timetable.vue'

// Import PubSub
import PubSub from 'pubsub-js'

export default {
    name: 'Home',
    components: {Introduction, About, Education, Skills, Timetable},
    methods: {
        // Detect current section when scrolling
        onScroll(){
            // For each section
            this.sections.forEach((item, index) => {
                let s = document.getElementById(item.id)
                // Check whether current position below the section
                if(window.scrollY >= s.offsetTop - 50){
                    // Set the index of active section through PubSub
                    PubSub.publish('activeSection', index)
                }
            });
        }
    },
    mounted() {
        // Get the home sections through PubSub
        this.pid = PubSub.subscribe('pages', (_, pages) => {
            this.sections = pages[0].sections
        })
        // Listen scroll event
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy(){
        PubSub.unsubscribe(this.pid)    // Unsubscribe pid
    }
}
</script>

<style>
.test{
    height: 100px;
    width: 100%;
    background-color: #bfa;
}
</style>