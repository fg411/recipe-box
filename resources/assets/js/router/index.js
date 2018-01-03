/**
 * Created by fg on 17-7-17.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Register from '../views/Auth/Register.vue';
import Login from '../views/Auth/Login.vue';

import RecipeIndex from '../views/Recipes/Index.vue';
import RecipeShow from '../views/Recipes/Show.vue';
import RecipeForm from '../views/Recipes/Form.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/register', component: Register},
        {path: '/login', component: Login},
        {path: '/', component: RecipeIndex},
        {path: '/recipes/create', component: RecipeForm, meta: {mode: 'create'}},
        {path: '/recipes/:id/edit', component: RecipeForm, meta: {mode: 'edit'}},
        {path: '/recipes/:id', component: RecipeShow}
    ]
});

export default router;
