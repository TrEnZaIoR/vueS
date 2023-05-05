<template>
<!-- Breadcrumb Section Begin -->
<div class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text">
                        <h2>Номера</h2>
                        <div class="bt-option">
                            <a href="/">Главная</a>
                            <span>Номера</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section End -->

    <!-- About Us Page Section Begin -->
    <section class="aboutus-page-section spad">
        <div class="container">
            <div class="about-page-text">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="ap-title">
                            <h1>Просмотр записи о номере</h1>
      <button class="btn btn-warning"><router-link :to="'/nomera/edit/'+ this.$route.params.id">Изменить</router-link></button>
      <button class="btn btn-danger" v-on:click="deletStud(this.$route.params.id)">Удалить</button>
      <table   class="table" v-for="nomer in nomera" v-bind:key="nomer.id">
        <tr>
           <td >ID</td>
           <td>{{ nomer.id }}</td>
         </tr>
         <tr>
           <td >Номер</td>
           <td>{{ nomer.nom }}</td>
         </tr>
         <tr>
           <td >Место</td>
           <td>{{ nomer.mest }}</td>
         </tr>
         <tr>
           <td >Этаж</td>
           <td>{{ nomer.etaz }}</td>
         </tr>
         <tr>
           <td >Площадь</td>
           <td>{{ nomer.plosh }}</td>
         </tr>
         <tr>
           <td >Цена</td>
           <td>{{ nomer.cena }}</td>
         </tr>
         <tr>
           <td >Оценка</td>
           <td>{{ nomer.ocenca}}</td>
         </tr>
         <tr>
           <td >Заселен</td>
           <td>{{ nomer.zaseln}}</td>
         </tr>
         <tr>
           <td >Заселился</td>
           <td>{{ nomer.zas}}</td>
         </tr>
         <tr>
           <td >Выселился</td>
           <td>{{ nomer.vis}}</td>
         </tr>
        </table>

</div>
</div>
</div>
</div>

</div>
</section>
<!-- About Us Page Section End -->
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    nomera: [],
    errors: []
  }),
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      axios.get('https://localhost:8081/api/nomera/' + this.$route.params.id)
        .then(response => {
          console.log('+++ SUCCESS +++')
          this.nomera = response.data.values.rows
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    },
    deletStud (id) {
      axios.delete(`https://localhost:8081/api/nomera/${id}`)
        .then(res => {
          console.log('Deleted')
          this.fetch()
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    }
  }
}
</script>
