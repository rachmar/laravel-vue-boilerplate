<template>
    <div id="Dashboard">
        <Header/>
            <router-view />
            <router-link to="/login">Login</router-link>
            <router-link to="/profile">Profile</router-link>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Dashboard',
    components: {
        Header,
        Footer
    }
}   
</script>