<template>
  <div>
    <h3>第二个页面</h3>
    <img
      class="headerimg"
      src="https://www.zhanx.cn/sfmyimages/banner/banner3.jpg"
      alt=""
    >
    <ul>
      <li
        v-for="item in mineArr"
        class="mineItem"
        :key="item.lable"
        v-on:click="itemClick(item)"
      >
        <span class="mineTitle">{{item.label}}</span>
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
  </div>
</template>

<script>
//import {listSoftProduct} from "../api/fetch";
import { listSoftProduct } from "@/api/fetch"; //@代表src目录 这两种写法都可以

export default {
  data() {
    return {
      mineArr: [
        { label: "商品收藏" },
        { label: "我的足迹" },
        { label: "店铺收藏" },
        { label: "我的软件", type: "soft" },
        { label: "退出", type: "exit" },
      ],
      softwareList: [],
    };
  },
  methods: {
    itemClick(item) {
      if (item.type == "soft") {
        console.log("software......");
        this.getSoftProductList();
      } else if (item.type == "exit") {
        console.log("退出......");
      }
    },

    //查询软件产品
    async getSoftProductList() {
      try {
        const res = await listSoftProduct();
        if (res.data.code == 0) {
          this.softwareList = res.data.data;
          console.log(this.softwareList);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.mineItem
  font-size 14px
  text-align left
  height 50px
  line-height 50px
  padding-left 5%
  border-bottom 1px solid #eee
  .mineTitle
    display inline-block
    width 90%
.headerimg
  height 150px
  width 100%
</style>