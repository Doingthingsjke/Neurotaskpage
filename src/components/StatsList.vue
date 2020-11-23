<template>
  <div id="StatsList">
    <div class="header">
      <p class="header_title">
        В настоящий момент в министерстве магии
      </p>
    </div>
    <div class="body">
      <body-header
        v-for="item in quantity_data"
        :key="item.id"
        :number_data="item"
      />
      <p class="header_title">По департаментам</p>
      <div class="body_info">
        <chart :chart_data="chart_data" />
        <div class="line"><div class="line_horisont"></div></div>
        <div class="line_vertical"></div>
        <div class="line_dots">
          <div class="line_dot dot_1"></div>
          <div class="line_dot dot_2"></div>
        </div>
        <body-stats-list :departments_data="departments_data" />
      </div>
    </div>
    <div class="footer">
      <div class="footer_info">
        ООО "Нейрософт", 2020 Медицинское оборудование
      </div>
      <div class="footer_social">
        <p class="footer_social--info">Подписывайся в соц сетях</p>
        <div class="buttons">
          <div class="button_social">
            <a><img class="img_1" src="../img/Inst.png" alt="Inst"/></a>
          </div>
          <div class="button_social">
            <a><img src="../img/Vk.png" alt="Vk"/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BodyHeader from './BodyHeader.vue'
import BodyStatsList from './BodyStatsList.vue'
import Chart from './Chart.vue'

export default {
  name: 'StatsList',
  props: {
    quantity_data: {
      type: Array,
      default: () => {
        return []
      },
    },
    departments_data: {
      type: Array,
      default: () => {
        return []
      },
    },
    chart_data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  components: {
    BodyStatsList,
    BodyHeader,
    Chart,
  },
}
</script>

<style>
.header {
  height: 136px;
  background: #f0f1f4;
  margin: 0 auto;
}
.header_title {
  font-family: Roboto-Bold;
  font-style: normal;
  font-size: 30px;
  color: #353d54;
  padding: 31px 308px;
}
.footer {
  background: rgba(53, 61, 84, 0.85);
  height: 152px;
  font-size: 15px;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer_social {
  padding-left: 180px;
  align-items: center;
  justify-content: space-between;
  display: flex;
}
.footer_social--info {
  padding-right: 21px;
}
.footer_info {
  width: 218px;
  height: 63px;
  padding-top: 20px;
}
.buttons {
  width: 67px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button_social {
  background: rgb(255, 255, 255);
  border-radius: 50%;
  height: 2em;
  width: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img_1 {
  padding-top: 3px;
}
.body_info {
  display: flex;
  justify-content: space-around;
}
.body {
  padding-bottom: 100px;
}
.line {
  position: relative;
}
.line_horisont {
  position: absolute;
  top: 50%;
  width: 55px;
  border-top: 3px solid #c1c3c8;
  padding-left: 15px;
  margin-right: 0;
}
.line_vertical {
  margin-left: 36px;
  width: 50px;
  border-top: 3px solid #c1c3c8;
  border-left: 3px solid #c1c3c8;
  border-bottom: 3px solid #c1c3c8;
  border-radius: 4px;
}
.line_dots {
  position: relative;
  width: 8px;
  margin-right: -60px;
}
.line_dot {
  background: #c1c3c8;
  border-radius: 50%;
  height: 8px;
  width: 8px;
  margin-left: -40px;
}
.dot_1 {
  position: absolute;
  top: -0.45%;
}
.dot_2 {
  position: absolute;
  bottom: -0.45%;
}
</style>
