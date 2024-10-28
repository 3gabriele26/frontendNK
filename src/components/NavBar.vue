<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="banner">
        <nav class="navbar navbar-expand-lg bg-body-tertiary container">
            <div class="container-fluid custom-container-navbar">
                <RouterLink to="/" class="navbar-brand">
                    <img src="../assets/logo.png" alt="Logo" width="50">
                </RouterLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav" style="flex-grow: unset;">
                    <ul class="navbar-nav" style="margin-right: 2rem;">
                        <li class="nav-item">
                            <RouterLink class="nav-link disabled" to="/recipe"><h6>Ricettario</h6></RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link disabled" to="/service"><h6>Servizi</h6></RouterLink>
                        </li>
                    </ul>
                    
                    <RouterLink class="btn orange-button-color" to="/booking"><h6>Prenota una Visita</h6></RouterLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
    .banner {
        background-image: url('../assets/background_img.jpg');
        background-size: cover; /* Fa in modo che l'immagine copra completamente l'area */
        background-position: center; /* Centra l'immagine */
        height: 500px;
    }

    .navbar {
        margin: 1rem auto;
        border-radius: 1rem;
    }

    
    h6 {
        margin: 0;
    }
</style>