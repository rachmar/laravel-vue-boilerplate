<template>
    <div id="Profile">
        <p>Profile</p>
        <img v-bind:src="this.dogImage.message"  v-bind:alt="this.dogImage.status" >
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            dogImage: {}
        }
    },
    mounted() {
        this.$api.random().then( (response) => {
            console.log(response);
            this.dogImage = response.data;
        }).catch( (error) =>{
            console.log(error);
        });
    }
}   
</script>