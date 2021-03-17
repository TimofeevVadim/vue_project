<template>
  <header class="header">
    <div class="container">
      <div class="row d-flex">
        <h1 class="header_logo">interior</h1>
        <nav class="nav">
          <a href="" class="nav_link">About us</a>
          <a href="" class="nav_link">Pricing</a>
          <a href="" class="nav_link">Team</a>
        </nav>
      </div>
      <div class="head">
        <div class="head__left head__width">
          <h1>Support your beloved community businesses</h1>
          <p>BizBot helps entrepreneurs and investors get an overview of shares and convertible notes, enabling
            effective
            management on an easy to use and connected platform</p>
          <div class="send d-flex">
            <input type="text" class="input" placeholder="Your e-mail">
            <button class="btn">Send offer</button>
          </div>
        </div>
        <div class="head__right head__width">
          <div class="header__img">
            <img src="https://mars-images.imgix.net/Rectangle245.jpg?auto=compress&w=1200&fit=max">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'header'
}
</script>

<style scoped>
.header {
  background: #F5F5F9;
}
.header_logo {
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #53CF76;
}
.nav {
  display: flex;
  text-decoration: none;
}
.nav_link {
  display: inline-block;
  margin: 0 15px;
  text-decoration: none;
  transition: color .2s linear;
  font-size: 18px;
  line-height: 24px;
  color: #071B0C;
}
.head__left h1 {
  font-weight: 500;
  font-size: 56px;
  line-height: 80px;
  margin-top: calc(0px + 60 * ((100vw - 320px)/ 1080));
}
.head__left p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #84868E;
}

.head__left {
}
.input {
  height: 64px;
  background: #FFFFFF;
  border: none;
  text-align: center;
}
.btn {
  outline: none;
  height: 64px;
  background: #53CF76;
  color: #fff;
  border: none;
}
.head__img {
}
.head {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.head__width{
}
.head__left {
}
.head__right {
  position: relative;
  padding-bottom: 10px;
}
.header__img img{
  width: 100%;
}
.row {
  align-items: center;
  padding: 35px 0 45px 0;
}
</style>
