<template>
  <div id="StatsList">
    <div class="header">
      <p class="header_title">
        В настоящий момент в министерстве магии
      </p>
    </div>
    <div class="body">
      <body-header
        :quantity_data="number_data"
        v-for="item in quantity_data"
        :key="item.id"
        :number_data="item"
      />
      <p class="header_title">По департаментам</p>
      <div class="body_info">
        <chart />
        <div class="line"></div>
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
  padding-top: 4px;
}
.body_info {
  display: flex;
  justify-content: space-around;
}
.body {
  padding-bottom: 100px;
}
</style>
