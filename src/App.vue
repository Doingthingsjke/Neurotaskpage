<template>
  <div id="app">
    <stats-list :quantity_data="QUANTITY" :departments_data="DEPARTMENTS" />
  </div>
</template>

<script>
import StatsList from './components/StatsList'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    StatsList,
  },
  mounted() {
    this.GET_QUANTITY()
    this.GET_DEPARTMENTS()
  },
  methods: {
    ...mapActions(['GET_QUANTITY', 'GET_DEPARTMENTS']),
  },
  computed: {
    ...mapGetters(['QUANTITY', 'DEPARTMENTS']),
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: Roboto-Black;
  src: url('./fonts/Roboto-Black.ttf');
}
@font-face {
  font-family: Roboto-Bold;
  src: url('./fonts/Roboto-Bold.ttf');
}
@font-face {
  font-family: Roboto-Regular;
  src: url('./fonts/Roboto-Regular.ttf');
}

#app {
  font-family: Roboto-Regular;
  font-style: normal;

  position: relative;
  margin: 0 auto;
  width: 1920px;
  height: 1397px;
  background-color: #ffffff;
}
</style>
