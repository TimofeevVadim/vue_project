<template>
  <div id="app">
    <div class="tasks">
      <router-link class="t-d-none task__link" to="/task1">Task 1</router-link>
      <router-link  class="t-d-none task__link" to="/task2">Task 2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
* {
  margin: 0;
  font-family: Barlow;
}
h1, h2, h3, h4, h5, h6{
  margin: 0;
}
*,
*:before,
*:after
{
  box-sizing: border-box;
}
.tasks {
  text-align: center;
}

.task__link {
  margin: 30px;
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  color: #0B1F41;
  opacity: 0.6;
}
.container {
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
}
.d-flex {
  display: flex;
}
.s-between {
  justify-content: space-between;
}
.column {
  flex-direction: column;
}
.t-d-none {
  text-decoration: none;
}
@media (min-width: 576px) {
  .left__row {
    padding-right: 110px;
  }
  .input {
    width: 64%;
  }
  .btn {
    width: 36%;
  }
  .send {
    padding: 10px 0;
  }
}
@media (max-width: 576px) {
  .container {
    margin: 0 10px;
  }
  .features__content{
    align-items: center;
    flex-direction: column;
  }
  .send {
    flex-direction: column;
  }
  .input {
    width: 100%;
  }
  .btn {
    width: 100%;
  }
}
@media (max-width: 992px) {
  .container {
    padding: 0 10px;
  }
  .head__right {
    display: none;
  }
  .head__left {
    width: 100%;
  }
  .head__left p {
    margin: 40px 0;
  }
  .nav {
    margin-left: 90px;
  }
}
@media (min-width: 993px) {
  .container {
    padding: 0 10px;
  }
  .head__right {
    width: 43%;
  }
  .head__left {
    width: 57%;
    padding-right: 10px;
  }
  .nav {
    margin-left: 190px;
  }
  .head__left {
    margin-right: 80px;
  }
  .head__left p {
    margin: 30px 70px 0 0;
    margin-bottom: calc(50px + 70 * ((100vw - 320px)/ 1080))
  }
  .send {
    padding: 150px 0;
  }
}
@media (max-width: 1200px) {
  .swipe-container {
    flex-wrap: wrap;
    justify-content: center;
  }
  .swipe {
    margin: 10px;
    width: 232px;
  }
  .send {
    padding: 0 0 10px 0;
  }
}
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;800&display=swap');
</style>
