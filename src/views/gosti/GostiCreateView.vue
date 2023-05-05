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
    <h1>Добавление записи о госте</h1>
      <form @submit.prevent="CreateGosti" novalidate>
        <input type="hidden" name="id" v-model="gosti.id" />
        <label for="fam" class="form-label">Фамилия</label><br>
        <input name="fam" type="text" id="fam" v-model="gosti.fam" class="form-control"   /><br><br>
        <label for="imya" class="form-label">Имя</label><br>
        <input name="imya" type="text" id="imya" v-model="gosti.imya"  class="form-control"  /><br><br>
        <label for="otch" class="form-label">Отчество</label><br>
        <input name="otch" type="text" id="otch" v-model="gosti.otch" class="form-control"  /><br><br>
        <label for="vozrast" class="form-label">Возраст</label><br>
        <input name="vozrast" type="number" id="vozrast" v-model="gosti.vozrast" class="form-control"  /><br><br>
        <label for="telephone" class="form-label">Телефон</label><br>
        <input name="telephone" type="text" id="telephone" v-model="gosti.telephone" class="form-control"  /><br><br>
        <label for="setia" class="form-label">Серия</label><br>
        <input name="setia" type="number" id="setia" v-model="gosti.setia" class="form-control"  /><br><br>
        <label for="nomerp" class="form-label">Номер</label><br>
        <input name="nomerp" type="number" id="nomerp" v-model="gosti.nomerp"  class="form-control"  /><br><br>
        <label for="zas" class="form-label">Заселился</label><br>
        <input name="zas" type="text" id="zas" v-model="gosti.zas" class="form-control"  /><br><br>
        <label for="vis" class="form-label">Выселился</label><br>
        <input name="vis" type="text" id="vis" v-model="gosti.vis"  class="form-control"  /><br><br>
        <button type="submit" class="btn btn-success">Отправить</button>
      </form>
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
  name: 'CreateGosti',
  data: () => {
    return {
      gosti: {
        fam: '',
        imya: '',
        otch: '',
        vozrast: '',
        telephone: '',
        setia: '',
        nomerp: '',
        zas: '',
        vis: ''
      }
    }
  },
  created () { },
  methods: {
    CreateGosti () {
      axios.post('http://anharrum.site/api/gostis', this.gosti)
        .then(response => {
          console.log(response)
          console.log('+++ SUCCESS +++')
          this.$router.push('/gosti')
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    }
  }
}
</script>
