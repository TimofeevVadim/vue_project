<template>
  <div>
    <headerComponent></headerComponent>
    <featuresComponent></featuresComponent>
    <teamComponent></teamComponent>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent'
import footerComponent from '@/components/footerComponent'
import featuresComponent from '@/components/featuresComponent'
import teamComponent from '@/components/teamComponent'
export default {
  name: 'task1',
  components: {
    headerComponent,
    teamComponent,
    footerComponent,
    featuresComponent
  }
}
</script>

<style scoped>

</style>
