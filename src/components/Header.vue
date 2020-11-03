<template>
  <header class="main-header">
    <div class="container">
      <div class="main-header__wrap">
        <div class="sandwitch-wrap">
          <div class="sandwitch">
            <div class="sandwitch__line sandwitch__line--top"></div>
            <div class="sandwitch__line sandwitch__line--middle"></div>
            <div class="sandwitch__line sandwitch__line--bottom"></div>
          </div>
        </div>
        <ul class="main-menu" id="js-main-menu">
          <li>
            <g-link to="/">Home</g-link>
          </li>
          <li>
            <g-link to="/le-nostre-birre">Le nostre birre</g-link>
          </li>
          <li>
            <g-link to="/altre-bevande">Altre bevande</g-link>
          </li>
          <li>
            <g-link to="/servizi">Servizi</g-link>
          </li>
          <li>
            <g-link to="/chi-siamo">Chi siamo</g-link>
          </li>
          <li>
            <g-link to="/contatti">Contatti</g-link>
          </li>
        </ul>
        <g-link class="logo" to="/">
          <g-image src="~/assets/i/logo.svg" alt=""/>
        </g-link>
        <ul class="header-socials">
          <li>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

