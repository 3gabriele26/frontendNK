<script setup>
    const currentYear = new Date().getFullYear()
</script>


<template>
    <div class="container footer">

        <div class="container text-center">
            <div class="row">

                <div class="col location-container"> 
                    <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        Studi ed Indirizzi
                    </button>
                    <button type="button" class="btn btn-link">Privacy Policy</button>
                    <button type="button" class="btn btn-link">Cookie Policy</button>
                    <button type="button" class="btn btn-link">GSTGRL</button>

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

                    <h5 class="card-title">Dott.ssa Nazeda Kashta</h5>

                    <div class="contact-container">
                        <img src="../assets/logo.png" class="card-img-top" alt="logo">

                        <div class="card-body mt-5">
                            <ul>
                                <li>
                                    <span><img src="../assets/instagram.png" alt="Instagram logo" height="20"></span>
                                    <h6 class="ms-1"><a href="https://www.instagram.com/dottoressanazedakashta/" target="_blank">Instagram</a></h6>
                                </li>
                                <li class="mt-3">
                                    <span><img src="../assets/linkedin.png" alt="Linkedin logo" height="18"></span>
                                    <h6 class="mt-1 ms-1"><a href="https://www.linkedin.com/in/nazeda-kashta-289518158/" target="_blank">LinkedIn</a></h6>
                                </li>
                            </ul>
                        </div>
                    </div>

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

    .location-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .contact-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        width: fit-content;
        margin: 0 auto;
    }

    .card-img-top {
        width: 150px;
    }

    .copyright-container {
        margin: 0;
    }

    .copyright-terms {
        width: fit-content;
        margin: 0 auto;
    }
</style>