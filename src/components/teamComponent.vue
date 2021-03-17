<template>
<div class="team">
  <div class="container">
    <h1 class="team__head">Team</h1>
    <div class="swipe-container d-flex">
      <div class="swipe">
        <div class="swipe__img">
          <img src="https://mars-images.imgix.net/1.jpg?auto=compress&w=1200&fit=max" alt="kristin">
        </div>
        <div class="swipe__text">
          <div class="swipe__title">
            Kristin Mccoy
          </div>
          <div class="swipe__subtitle">
            Founder
          </div>
          <p>
            consectetur excepteur cupidatat aliqua nulla qui enim et nulla pariatur anim ullamco
            cupidatat ea id
            velit
            exercitation occaecat veniam deserunt consectetur et officia consectetur
          </p>
        </div>
      </div>
      <div class="swipe">
        <div class="swipe__img">
          <img src="https://mars-images.imgix.net/1.jpg?auto=compress&w=1200&fit=max" alt="kristin">
        </div>
        <div class="swipe__text">
          <div class="swipe__title">
            Kristin Mccoy
          </div>
          <div class="swipe__subtitle">
            Founder
          </div>
          <p>
            consectetur excepteur cupidatat aliqua nulla qui enim et nulla pariatur anim ullamco
            cupidatat ea id
            velit
            exercitation occaecat veniam deserunt consectetur et officia consectetur
          </p>
        </div>
      </div>
      <div class="swipe">
        <div class="swipe__img">
          <img src="https://mars-images.imgix.net/1.jpg?auto=compress&w=1200&fit=max" alt="kristin">
        </div>
        <div class="swipe__text">
          <div class="swipe__title">
            Kristin Mccoy
          </div>
          <div class="swipe__subtitle">
            Founder
          </div>
          <p>
            consectetur excepteur cupidatat aliqua nulla qui enim et nulla pariatur anim ullamco
            cupidatat ea id
            velit
            exercitation occaecat veniam deserunt consectetur et officia consectetur
          </p>
        </div>
      </div>
      <div class="swipe">
        <div class="swipe__img">
          <img src="https://mars-images.imgix.net/1.jpg?auto=compress&w=1200&fit=max" alt="kristin">
        </div>
        <div class="swipe__text">
          <div class="swipe__title">
            Kristin Mccoy
          </div>
          <div class="swipe__subtitle">
            Founder
          </div>
          <p>
            consectetur excepteur cupidatat aliqua nulla qui enim et nulla pariatur anim ullamco
            cupidatat ea id
            velit
            exercitation occaecat veniam deserunt consectetur et officia consectetur
          </p>
        </div>
      </div>
      <div class="swipe">
        <div class="swipe__img">
          <img src="https://mars-images.imgix.net/1.jpg?auto=compress&w=1200&fit=max" alt="kristin">
        </div>
        <div class="swipe__text">
          <div class="swipe__title">
            Kristin Mccoy
          </div>
          <div class="swipe__subtitle">
            Founder
          </div>
          <p>
            consectetur excepteur cupidatat aliqua nulla qui enim et nulla pariatur anim ullamco
            cupidatat ea id
            velit
            exercitation occaecat veniam deserunt consectetur et officia consectetur
          </p>
        </div>
      </div>
    </div>
  </div>
    <swipeComponent></swipeComponent>
  </div>
</template>

<script>
import swipeComponent from '@/components/swipeComponent'
export default {
  name: 'team',
  components: {
    swipeComponent
  },
  mounted () {
  }
}
</script>

<style scoped>
.swipe-container {
  margin-bottom: 114px;
}
.team__head {
  margin: 0 0 80px 0;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 80px;
  color: #071B0C;
}
.swipe__subtitle {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;color: #071B0C;
}
.swipe__text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #071B0C;
}
.swipe__title {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #071B0C;
}
</style>
