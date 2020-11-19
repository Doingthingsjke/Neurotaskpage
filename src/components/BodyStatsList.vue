<template>
  <div class="body_stats_row">
    <body-row
      v-for="department in departments_data"
      :key="department.id"
      :row_data="department"
    />
  </div>
</template>

<script>
import BodyRow from './BodyRow'

export default {
  name: 'BodyStatsList',
  props: {
    departments_data: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  components: {
    BodyRow,
  },
}
</script>

<style>
.body_stats_row {
  display: inline;
  justify-content: left;
}
</style>
