// Import VueRouter
import VueRouter from 'vue-router'

// Import pages
import Home from '../pages/Home'
import Academic from '../pages/Academic'
import Learning from '../pages/Learning'
import Blog from '../pages/Blog'

export default new VueRouter({
    // History Mode
    mode: 'history',
    routes:[
        {
            // Home Page
            name: 'Home',
            component: Home,
            path: '/home',
        },
        {
            // Academic Page
            name: 'Academic',
            component: Academic,
            path: '/academic',
        },
        {
            // Learning Page
            name: 'Learning',
            component: Learning,
            path: '/learning',
        },
        {
            // Blog Page
            name: 'Blog',
            component: Blog,
            path: '/blog',
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        if(savedPosition){
            return savedPosition
        }else{
            return {x: 0, y: 0}
        }
    }
})