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
                            <h2>Гости</h2>
      <button class="btn btn-warning"><router-link to="/gosti/add">Добавить гостя</router-link></button>
        <table   class="table">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Имя</th>
              <th scope="col">Отчество</th>
              <th scope="col">Возраст</th>
              <th scope="col">Телефон</th>
              <th scope="col">Серия</th>
              <th scope="col">Номер</th>
              <th scope="col">Заселился</th>
              <th scope="col">Выселился</th>
              <th>###</th>
            </tr>
            <tr v-for="gost in gosti" v-bind:key="gost.id">
                <td>{{gost.id}}</td>
                <td>{{gost.fam}}</td>
                <td>{{gost.imya}}</td>
                <td>{{gost.otch}}</td>
                <td>{{gost.vozrast}}</td>
                <td>{{gost.telephone}}</td>
                <td>{{gost.setia}}</td>
                <td>{{gost.nomerp}}</td>
                <td>{{gost.zas}}</td>
                <td>{{gost.vis}}</td>
                <th class="btn btn-danger">
                  <ul>
                    <li><button class="btn btn-light"><router-link :to="'/gosti/'+ gost.id">Просмотр</router-link></button></li>
                    <li><button class="btn btn-warning"><router-link :to="'/gosti/edit/'+ gost.id">Изменить</router-link></button></li>
                    <li><button class="btn btn-danger" v-on:click="deletMezgorod(gost.id)">Удалить</button></li>
                  </ul>
                </th>
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
      axios.get('https://anharrum.site/api/gostis', function (req, res) {
        res.set('Access-Control-Allow-Origin', '*')
      })
        .then(response => {
          console.log('+++ SUCCESS +++')
          console.log(response.data.values)
          this.gosti = response.data.values
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    },
    deletMezgorod (id) {
      axios.delete(`https://anharrum.site/api/gostis/${id}`)
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
