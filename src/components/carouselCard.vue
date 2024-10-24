<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ data.macro_competence }}</h5>
            <p class="card-text">{{ data.description }}</p>
        </div>
        <ul class="list-group list-group-flush" style="text-align: center;">
          <li class="list-group-item" v-for="item in data.sub_competences">{{ item }}</li>
        </ul>
    </div>
</template>

<style>
  .card {
      max-width: 500px;
      border: none;
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