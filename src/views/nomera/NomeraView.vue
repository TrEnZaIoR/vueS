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
                            <h2>Номера</h2>
      <button class="btn btn-warning"><router-link to="/nomera/add">Добавить номер</router-link></button>
        <table   class="table">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Номер</th>
              <th scope="col">Место</th>
              <th scope="col">Этаж</th>
              <th scope="col">Площадь</th>
              <th scope="col">Цена</th>
              <th scope="col">Оценка</th>
              <th scope="col">Заселен</th>
              <th scope="col">Заселился</th>
              <th scope="col">Выселился</th>
              <th>###</th>
            </tr>
            <tr v-for="nomer in nomera" v-bind:key="nomer.id">
                <td>{{nomer.id}}</td>
                <td>{{nomer.nom}}</td>
                <td>{{nomer.mest}}</td>
                <td>{{nomer.etaz}}</td>
                <td>{{nomer.plosh}}</td>
                <td>{{nomer.cena}}</td>
                <td>{{nomer.ocenca}}</td>
                <td>{{nomer.zaseln}}</td>
                <td>{{nomer.zas}}</td>
                <td>{{nomer.vis}}</td>
                <td class="btn btn-danger">
                  <ul>
                    <li><button class="btn btn-light"><router-link :to="'/nomera/'+ nomer.id">Просмотр</router-link></button></li>
                    <li><button class="btn btn-warning"><router-link :to="'/nomera/edit/'+ nomer.id">Изменить</router-link></button></li>
                    <li><button class="btn btn-danger" v-on:click="deletNomera(nomer.id)">Удалить</button></li>
                  </ul>
                </td>
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
      axios.get('http://anharrum.site/api/nomera', function (req, res) {
        res.set('Access-Control-Allow-Origin', '*')
      })
        .then(response => {
          console.log('+++ SUCCESS +++')
          this.nomera = response.data.values
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    },
    deletNomera (id) {
      axios.delete(`http://anharrum.site/api/nomera/${id}`)
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
