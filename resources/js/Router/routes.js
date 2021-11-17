const routes = [
    {                
        name: "home",
        component: () => import("../Pages/Home.vue"),
        path: "/", 
    },
    {                
        name: "home",
        component: () => import("../Pages/Home.vue"),
        path: "/home", 
    },
    {
        name: "panel",
        component: () => import("../Pages/Panel.vue"),
        path: "/panel", 
    },
    {                
        name: "courses",
        component: () => import("../Pages/Courses.vue"),
        path: "/courses", 
    },
    {                
        name: "about",
        component: () => import("../Pages/About.vue"),
        path: "/about", 
    },
    {
        name: "doubts",
        component: () => import("../Pages/Doubts.vue"),
        path: "/doubts", 
    },
    {
        name: "login",
        component: () => import("../Pages/Login.vue"),
        path: "/login", 
    },
    {
        name: "register",
        component: () => import("../Pages/Register.vue"),
        path: "/register", 
    },
];

export default routes;