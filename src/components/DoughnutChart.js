import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    chartdata: {
      type: Object,
      default: () => {
        return {}
      },
    },
    options: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
}
