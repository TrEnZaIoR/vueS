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
                            <h1>Добавление записи о номере</h1>
      <form @submit.prevent="CreateNomera" novalidate>
        <label for="nom" class="form-label">Номер</label><br>
        <input name="nom" type="number" id="nom" v-model="nomera.nom"  class="form-control"  /><br><br>
        <label for="mest" class="form-label">Место</label><br>
        <input name="mest" type="number" id="mest" v-model="nomera.mest" class="form-control" /><br><br>
        <label for="etaz" class="form-label">Этаж</label><br>
        <input name="etaz" type="number" id="etaz" v-model="nomera.etaz" class="form-control" /><br><br>
        <label for="plosh" class="form-label">Площадь</label><br>
        <input name="plosh" type="number" id="plosh" v-model="nomera.plosh" class="form-control" /><br><br>
        <label for="cena" class="form-label">Цена</label><br>
        <input name="cena" type="number" id="cena" v-model="nomera.cena" class="form-control" /><br><br>
        <label for="ocenca" class="form-label">Оценка</label><br>
        <input name="ocenca" type="number" id="ocenca" v-model="nomera.ocenca" class="form-control" /><br><br>
        <label for="zaseln" class="form-label">Заселен</label><br>
        <input name="zaseln" type="number" id="zaseln" v-model="nomera.zaseln"  class="form-control" /><br><br>
        <label for="zas" class="form-label">Заселился</label><br>
        <input name="zas" type="text" id="zas" v-model="nomera.zas" class="form-control" /><br><br>
        <label for="vis" class="form-label">Выселился</label><br>
        <input name="vis" type="text" id="vis" v-model="nomera.vis"  class="form-control" /><br><br>
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
  name: 'CreateNomera',
  data: () => {
    return {
      nomera: {
        nom: '',
        mest: '',
        etaz: '',
        plosh: '',
        cena: '',
        ocenca: '',
        zaseln: '',
        zas: '',
        vis: ''
      }
    }
  },
  created () { },
  methods: {
    CreateNomera () {
      axios.post('http://anharrum.site/api/nomera', this.nomera)
        .then(response => {
          console.log(response)
          console.log('+++ SUCCESS +++')
          this.$router.push('/nomera')
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    }
  }
}
</script>
