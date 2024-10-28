<template>
    <div class="container my-5">
        <div class="card mb-5">
            <img src="https://www.nutridoc.it/api/profiles/00000001839/xnazeda-kashta-1-6b722.jpg.pagespeed.ic.UX686-wUDF.webp" class="card-img-top" alt="Nazeda Kashta img">
            <div class="card-body text-center">
                    <h5 class="card-title">Dott.ssa Nazeda Kashta</h5>
                    <a href="https://www.instagram.com/dottoressanazedakashta/" target="_blank" class="d-flex align-items-center text-decoration-none text-dark">
                        <img src="../assets/instagram.png" alt="Logo Instagram" width="30" height="30" class="mr-2">
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/nazeda-kashta-289518158/" target="_blank" class="d-flex align-items-center text-decoration-none text-dark">
                        <img src="../assets/linkedin.png" alt="Logo Linkedin" width="30" height="30" class="mr-2">
                        <span>Linkedin</span>
                    </a> 
            </div>
        </div>

        <div class="location text-center">
            <h4>Studi ed Indirizzi</h4>

            <div class="office-location-container">
                <cardPosition 
                    v-for="(item, index) in offices_obj"
                    :data="item"
                    :key="index"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        margin: auto;
    }

    .card-img-top {
        border-radius: 100px;
    }

    .office-location-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
    }
</style>

<script>
    import cardPosition from '@/components/cardPosition.vue';
    import offices from '../json_files/offices.json'

    export default {
        components: {
            cardPosition
        },
        data() {
            return {
                offices_obj: offices
            }
        }
    }
</script>