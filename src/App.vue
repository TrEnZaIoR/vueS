<template>
<!-- Page Preloder -->
<div id="preloder">
  <div class="loader"></div>
</div>
<!-- Offcanvas Menu Section Begin -->
<div class="offcanvas-menu-overlay"></div>
<div class="canvas-open">
  <i class="icon_menu"></i>
</div>
<div class="offcanvas-menu-wrapper">
  <div class="canvas-close">
      <i class="icon_close"></i>
  </div>
  <nav class="mainmenu mobile-menu">
      <ul>
          <li ><router-link to="/">Главная</router-link></li>
          <li><router-link to="/about">О нас</router-link></li>
          <li><router-link to="/contact">Контакты</router-link></li>
          <li><router-link to="/nomera">Список номеров</router-link></li>
          <li><router-link to="/gosti">Список гостей</router-link></li>
      </ul>
  </nav>
  <div id="mobile-menu-wrap"></div>
</div>
<!-- Offcanvas Menu Section End -->
<!-- Header Section Begin -->
<header class="header-section">
  <div class="menu-item">
      <div class="container">
          <div class="row">
              <div class="col-lg-2">
                  <div class="logo">
                      <router-link to="/">
                          <img src="img/log1.png" alt="">
                      </router-link>
                  </div>
              </div>
              <div class="col-lg-10">
                  <div class="nav-menu">
                      <nav class="mainmenu">
                          <ul>
                              <li ><router-link to="/">Главная</router-link></li>
                              <li><router-link to="/about">О нас</router-link></li>
                              <li><router-link to="/contact">Контакты</router-link></li>
                              <li><router-link to="/nomera">Список номеров</router-link></li>
                              <li><router-link to="/gosti">Список гостей</router-link></li>
                          </ul>
                      </nav>

                  </div>
              </div>
          </div>
      </div>
  </div>
</header>
<!-- Header End -->
  <router-view/>
</template>
<style>
</style>
