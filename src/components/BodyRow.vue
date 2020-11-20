<template>
  <div class="body_info_list">
    <ul class="list">
      <li class="body_info_list--li">
        <div class="circle"></div>
        <div class="body_info_list--stats">{{ row_data.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BodyRow',
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style>
.circle {
  background: #456bd9;
  border-radius: 50%;
  height: 2em;
  width: 2em;
}
.list {
  list-style-type: none;
}
.body_info_list--li {
  font-family: Roboto-Bold;
  font-style: normal;
  font-size: 22px;
  color: #353d54;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 800px;
  padding-bottom: 5px;
}
.body_info_list--stats {
  padding-left: 23px;
}
</style>
