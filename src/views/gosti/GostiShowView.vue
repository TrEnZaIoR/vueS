<template>
    <!-- Breadcrumb Section Begin -->
    <div class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text">
                        <h2>Гости</h2>
                        <div class="bt-option">
                            <a href="/">Главная</a>
                            <span>Гости</span>
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
    <h1>Просмотр записи о госте</h1>
      <button class="btn btn-warning"><router-link :to="'/gosti/edit/'+ this.$route.params.id">Изменить</router-link></button>
      <button class="btn btn-danger" v-on:click="deletGosti(this.$route.params.id)">Удалить</button>
      <table   class="table" v-for="gost in gosti" v-bind:key="gost.id">
        <tr>
              <td >ID</td>
              <td>{{ gost.id }}</td>
            </tr>
            <tr>
              <td >Фамилия</td>
              <td>{{ gost.fam }}</td>
            </tr>
            <tr>
              <td >Имя</td>
              <td>{{ gost.imya }}</td>
            </tr>
            <tr>
              <td >Отчество</td>
              <td>{{ gost.otch }}</td>
            </tr>
            <tr>
              <td >Возраст</td>
              <td>{{ gost.vozrast }}</td>
            </tr>
            <tr>
              <td >Телефон</td>
              <td>{{ gost.telephone }}</td>
            </tr>
            <tr>
              <td >Серия</td>
              <td>{{ gost.setia }}</td>
            </tr>
            <tr>
              <td >Номер</td>
              <td>{{ gost.nomerp}}</td>
            </tr>
            <tr>
              <td >Заселился</td>
              <td>{{ gost.zas}}</td>
            </tr>
            <tr>
              <td >Выселился</td>
              <td>{{ gost.vis}}</td>
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
    gosti: [],
    errors: []
  }),
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      axios.get('http://anharrum.site/api/gostis/' + this.$route.params.id)
        .then(response => {
          console.log('+++ SUCCESS +++')
          this.gosti = response.data.values.rows
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    },
    deletGosti (id) {
      axios.delete(`http://anharrum.site/api/gostis/${id}`)
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
