<template>
  <div class="chart">
    <doughnut-chart :chart-data="data" :heigth="50" :options="options">
    </doughnut-chart>
  </div>
</template>

<script>
import DoughnutChart from './DoughnutChart.js'

export default {
  name: 'Chart',
  components: {
    DoughnutChart,
  },
  data: () => {
    return {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          backgroundColor: '#ffffff',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
        },
      ],
    }
  },
  options: () => {
    return {
      responsive: true,
      maintainAspectRatio: true,
    }
  },
}
</script>

<style></style>
