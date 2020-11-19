<template>
  <div class="body_stats">
    <div class="body_stats--total">
      <div class="body_stats_big">{{ number_data.total }}</div>
      <div class="body_stats_big--info">Сотрудников в штате</div>
    </div>
    <div class="body_stats--total">
      <div class="body_stats_big">{{ number_data.males }}</div>
      <div class="body_stats_big--info">Мужчины</div>
    </div>
    <div class="body_stats--total">
      <div class="body_stats_big">{{ number_data.females }}</div>
      <div class="body_stats_big--info">Женщины</div>
    </div>
    <div class="body_stats--total">
      <div class="body_stats_big">{{ number_data.couples }}</div>
      <div class="body_stats_big--info">Пар</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BodyHeader',
  props: {
    number_data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style>
.body_stats {
  padding-top: 33px;
  padding-left: 245px;
  display: flex;
  justify-content: space-around;
  width: 1250px;
  padding-bottom: 50px;
}
.body_stats--total {
  width: 169px;
  align-items: center;
  justify-content: center;
}
.body_stats_big {
  font-family: Roboto-Black;
  text-align: center;
  color: #2b78fe;
  font-size: 80px;
}
.body_stats_big--info {
  font-family: Roboto-Bold;
  font-style: normal;
  font-size: 24px;
  color: #353d54;
  text-align: center;
}
</style>
