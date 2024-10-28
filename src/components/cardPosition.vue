<template>
    <div class="card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">{{data.number + " " + data.office_name }}</h5>
            <p class="card-text">{{ data.address }}</p>
        </div>
        
        <iframe 
            :src="data.location" 
            width="100%" 
            height="200" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
        </iframe>

        <ul class="list-group mt-2">
            <li class="list-group-item" v-for="(item, index) in data.opening">{{ item.day + item.time }}</li>
        </ul>
           
    </div>

</template>

<style scoped>
    .card {
        margin: 0;
    }
</style>

<script>

    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>