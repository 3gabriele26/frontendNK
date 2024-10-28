<script setup>
    const currentYear = new Date().getFullYear()
</script>


<template>
    <div class="container footer">

        <div class="container text-center">
            <div class="row">
                <div class="col link-container"> 
                    <h5>Link utili</h5>

                    <div class="location-container">
                        <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Studi ed Indirizzi
                        </button>

                        <button type="button" class="btn btn-link hidden">Privacy Policy</button>
                        <button type="button" class="btn btn-link hidden">Cookie Policy</button>
                        <button type="button" class="btn btn-link">GSTGRL</button>
                    </div>

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Studi ed Indirizzi</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div class="offcanvas-body">
                            <cardPosition 
                                v-for="(item, index) in offices_obj"
                                :data="item"
                                :key="index"
                            />
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="info-contact">
                        <h5 class="card-title">Dott.ssa Nazeda Kashta</h5>

                        <div class="social-container">
                            <a href="https://www.instagram.com/dottoressanazedakashta/" target="_blank" class="social-link me-3">
                                <img src="../assets/instagram.png" alt="Instagram logo" height="18">
                            </a>

                            <a href="https://www.linkedin.com/in/nazeda-kashta-289518158/" target="_blank" class="social-link">
                                <img src="../assets/linkedin.png" alt="Linkedin logo" height="18">
                            </a>
                        </div>
                    </div>

                    <img src="../assets/logo.png" class="card-img-top" alt="logo">
                </div>
            </div>
        </div>
        
        <div class="container copyright-container">
            <h6 class="copyright-terms">Copyright {{ currentYear }}</h6>
        </div>
    </div>
</template>

<script>
    import offices from '../json_files/offices.json'
    import cardPosition from './cardPosition.vue';

    export default {
        data() {
            return {
                offices_obj: offices
            }
        },
        components: {
            cardPosition
        }
    }
</script>

<style scoped>
    li {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    a, .btn-link {
        color: black;
        font-size: large;
        text-decoration: none;
    }

    .footer {
        height: max-content;
        padding: 1rem;
        background-color: #AE803E;
        margin-bottom: 0;
        border-radius: 1rem 1rem 0 0;

        display: flex;
        flex-direction: column;
    }

    .link-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .location-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .info-contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: fit-content;
        margin: 0 auto;
    }

    .card-img-top {
        width: 150px;
    }

    .social-container {
        display: flex;
        flex-direction: row;
        margin-top: 0.5rem;
    }

    .social-link {
        display: flex;
        background-color: white;
        padding: 0.6rem;
        border-radius: 0.5rem;
    }

    .copyright-container {
        margin: 0;
    }

    .copyright-terms {
        width: fit-content;
        margin: 0 auto;
    }
</style>