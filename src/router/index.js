import Vue from "vue"
import Router from "vue-router"
import Photo from "../components/Photo.vue"
import MainComponent from "../components/MainComponent.vue"
import Book from "../components/Book.vue"
import Registration from "../components/Registration.vue"
import Login from "../components/Login.vue"
import UserComponent from "../components/UserComponent.vue"
// import BabyFirst from "../components/BabyFirst.vue"
// import FirstPage from "../components/FirstPage.vue"
import Business from "../components/Business";
import Tattoo from "../components/Tattoo.vue"
import Travel from "../components/Travel.vue"
// import Example1 from "../components/Example1";
// import Example2 from "../components/Example2";
// import Example3 from "../components/Example3";
// import Example4 from "../components/Example4";
// import Example5 from "../components/Example5";
// import Example6 from "../components/Example6";
// import Example7 from "../components/Example7";
// import Example8 from "../components/Example8";
// import Example9 from "../components/Example9";
import Examples from "../components/Examples";

import Group1 from "../components/group1/Group1.vue";
import Group2 from "../components/group2/Group2.vue";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: "/",
            component: MainComponent,
            name: "main-component"
        },
        {
            path: "/photo",
            component: Photo,
            name: "photo"
        },
        {
            path: "/book",
            component: Book,
            name: "book"
        },
        {
            path: "/registration",
            component: Registration,
            name: "registration"
        },
        {
            path: "/login",
            component: Login,
            name: "login"
        },
        {
            path: "/user",
            component: UserComponent,
            name: "user"
        },
        // {
        //     path: "/first-page",
        //     component: FirstPage,
        //     name: "first-page"
        // },
        // {
        //     path: "/baby-first",
        //     component: BabyFirst,
        //     name: "baby-first"
        // },
        {
            path: "/business",
            component: Business,
            name: "business"
        },
        {
            path: "/tattoo",
            component: Tattoo,
            name: "tattoo"
        },
        {
            path: "/travel",
            component: Travel,
            name: "travel"
        },
        // {
        //     path: "/example1",
        //     component: Example1,
        //     name: "example1"
        // },
        // {
        //     path: "/example2",
        //     component: Example2,
        //     name: "example2"
        // },
        // {
        //     path: "/example3",
        //     component: Example3,
        //     name: "example3"
        // },
        {
            path: "/group1",
            component: Group1,
            name: "group1"
        },
        {
            path: "/group2",
            component: Group2,
            name: "group2"
        },

        // {
        //     path: "/example4",
        //     component: Example4,
        //     name: "example4"
        // },
        // {
        //     path: "/example5",
        //     component: Example5,
        //     name: "example5"
        // },
        // {
        //     path: "/example6",
        //     component: Example6,
        //     name: "example6"
        // },
        // {
        //     path: "/example7",
        //     component: Example7,
        //     name: "example7"
        // },
        // {
        //     path: "/example8",
        //     component: Example8,
        //     name: "example8"
        // },
        {
            path: '*',
            component: MainComponent,
            redirect: '/'
        },
        {
            path: '/examples',
            component: Examples,
            name: 'examples',
        },
        // {
        //     path: "/example9",
        //     component: 
        //         Example9
        //     ,
        //     name: 'Example9'
        // }
    ]
})
