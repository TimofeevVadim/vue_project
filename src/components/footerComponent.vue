<template>
<div class="footer">
  <div class="container">
    <div class="footer__nav d-flex s-between">
      <div class="info d-flex column">
        <h3>Main info</h3>
        <div class="footer__nav d-flex column">
          <a href="" class="t-d-none footer__link">Title 1</a>
          <a href="" class="t-d-none footer__link">Title 2</a>
          <a href="" class="t-d-none footer__link">Title 3</a>
          <a href="" class="t-d-none footer__link">Title 4</a>
        </div>
      </div>
      <div class="features d-flex column">
        <h3>Features</h3>
        <div class="footer__nav d-flex column">
          <router-link class="t-d-none footer__link" to="/task2">Feature 1</router-link>
          <router-link class="t-d-none footer__link" to="/task2">Feature 2</router-link>
          <router-link class="t-d-none footer__link" to="/task2">Feature 3</router-link>
          <router-link class="t-d-none footer__link" to="/task2">Feature 4</router-link>
        </div>
      </div>
      <div class="media d-flex column">
        <h3>Social Media</h3>
        <ul class="d-flex footer__nav">
          <a href="/"><img src="https://mars-images.imgix.net/Facebook.svg?auto=compress&w=1200&fit=max" alt="facebook"></a>
          <a href="/" class="p-item"><img src="https://mars-images.imgix.net/Instagram.svg?auto=compress&w=1200&fit=max" alt="instagram"></a>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
.footer {
  background: #F5F5F9;
  min-height: 496px;
  position: relative;
}
.footer__nav {
  padding: 84px 0;
}
.footer__link {
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #0B1F41;
  opacity: 0.6;
}
.footer__link:not(:first-child) {
  margin-top: 21px;
}
.p-item {
  padding-left: 29px;
}
.info {
}
</style>
