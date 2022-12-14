import { createRouter,createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import SinglePost from '../views/pages/single_post/SinglePost.vue';

const routes= [
    {   
        path:'/',
        name:'Home',
        component:Home
    },
    {   
        path:'/login',
        name:'Login',
        component:Login
    },
    {   
        path:'/register',
        name:'Register',
        component:Register
    },
    {   
        path:'/post/:id',
        name:'SinglePost',
        component:SinglePost
    },
]

const router = createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;