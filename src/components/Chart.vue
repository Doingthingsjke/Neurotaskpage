<template>
  <div class="chart">
    <doughnut-chart :chartdata="chart_data" :options="options" class="chart_d">
    </doughnut-chart>

    <img src="../img/Logo.png" alt="Neurosoft" class="img_logo" />
  </div>
</template>

<script>
import DoughnutChart from './DoughnutChart.js'

export default {
  name: 'Chart',
  components: {
    DoughnutChart,
  },
  props: {
    chart_data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data: () => ({
    loading: true,
    chartdata: null,
    options: {
      responsive: true,
      maintainAspectRatio: true,
    },
  }),
}
</script>

<style>
.chart {
  position: relative;
  padding-top: 15px;
  padding-left: 265px;
  width: 609px;
}
.chart_d {
  position: absolute;
  width: 70%;
}
.img_logo {
  position: absolute;
  padding-top: 230px;
  padding-left: 230px;
}
</style>
