<template>
  <div>
    <div class="header">
      <v-header :seller="seller"></v-header>
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/api/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/api/ratings">评论</router-link>
        <!--<a v-link="{ path:'/ratings' }">评论</a>-->
      </div>
      <div class="tab-item">
        <router-link to="/api/seller">商家</router-link>
        <!--<a v-link="{ path:'/seller' }">商家</a>-->
      </div>
    </div>
    <!--路由外链   当路由改变时对应的视图-->
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';

  const ERR_OK = 0;
  export default {
    data () {
      return {
        seller: {}
      };
    },
    created () {
      this.$http.get('/seller').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl";

  .tab
    display: flex
    width: 100%
    height: 40%
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.router-link-active
          color: rgb(240, 20, 20)
</style>
