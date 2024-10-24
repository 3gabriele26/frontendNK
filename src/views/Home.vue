<script setup>
    

</script>

<template>
    <div class="container">
        <div class="info-container">
            <div>
                <img src="https://www.nutridoc.it/api/profiles/00000001839/xnazeda-kashta-1-6b722.jpg.pagespeed.ic.UX686-wUDF.webp" class="img-thumbnail" alt="profile image">
            </div>

            
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">Dott.ssa Nazeda Kashta</h3>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Biologa nutrizionista e personal trainer</h6>
                    <p class="card-text" style="margin-top: 2rem;">
                        Da sempre appassionata del mondo dello sport tanto da farne la mia professione. <br>
                        Il mio motto è: alimentazione e movimento sono il connubio perfetto per un sano stile di vita. <br>
                        Parola d'ordine: <strong>EQUILIBRIO</strong>                  
                    </p>
                </div>
            </div>
        </div>

        <div class="accordion" id="accordionHo">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Metodo di lavoro
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionHome">
                    <div class="accordion-body">
                        <strong>La prima visita ha la durata di circa 1 ora</strong> e si svolge facendo un'attenta <strong>anamnesi personale e familiare</strong>, 
                        sia fisiologica che patologica, una seconda parte dove si prendono le varie <strong>misurazioni antropometriche</strong> del paziente circa peso, 
                        altezza e circonferenze ed infine viene effettuato l'esame con il bioimpedenziomentro. <br>
                        Il prezzo della visita comprende il lavoro svolto in ambulatorio e la <strong>preparazione di un piano alimentare completamente personalizzato</strong> 
                        per ogni esigenza del paziente.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Formazione
                    </button>
                </h2>

                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionHome">
                    <div class="accordion-body">
                        <div>
                            Laurea triennale in <strong>Scienze del fitness e del benessere e dei prodotti della salute</strong> presso università di Camerino.<span><img src="https://seeklogo.com/images/U/universita-di-camerino-logo-17EA82BAA1-seeklogo.com.gif" alt="Uni-logo" class="uni-logo"></span>
                        </div>

                        <div>
                            Laurea magistrale in <strong>Scienze dell'alimentazione e nutrizione umana</strong> presso l'università di Perugia. <span><img src="http://www.sottotorchio.com/images/logo-universita-degli-studi-di-perugia.jpg" alt="Uni-logo" class="uni-logo"></span>
                        </div>
                        Diploma di scuola di specializzazione SANIS
                    </div>
                </div>
            </div>
        </div>

        <div id="serviceCarousel" class="carousel services" data-bs-ride="carousel">
            <div class="carousel-inner">
                
                <carouselItem
                    v-for="(item, index) in competences_array"
                    :data="item"
                    :key="index"
                />
            </div>

            <!-- Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#serviceCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#serviceCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
        </div>
    </div>
</template>

<script>
    import data from '../json_files/competences.json'
    import carouselItem from '@/components/carouselItem.vue';

    export default {
        components: {
            carouselItem
        },
        data() {
            return {
                competences_array: data
            }
        },
        methods() {

        },
        created() {
        }
    }

</script>

<style scoped>
    .container {
        margin: 5rem auto;
    }
    
    .accordion {
        margin-top: 3rem;
    }

    .uni-logo {
        height: 40px;
        width: auto;
    }

    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .img-thumbnail {
        border-radius: 100px;
        border: none;
    }

    .card {
        max-width: 500px;
        border: none;
    }

    .services {
        margin-top: 3rem;
    }
</style>