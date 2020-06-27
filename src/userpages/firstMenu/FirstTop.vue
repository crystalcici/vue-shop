<template>
    <div class="firstTop">
        <van-row class="TopSearch">
            <van-col span="6">
                <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" class="logo">
            </van-col>
            <van-col span="18">
                <van-search class="search" v-model="search_v" placeholder="搜索商品" />
            </van-col>
        </van-row>
        <van-tabs class="tableList">
            <van-tab v-for="(item,index) in tableList" :key="index" :title="item">
                内容 {{ index }}
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
  name: 'FirstTop',
  data () {
    return {
      search_value: '',
      tableList: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清理', '母婴亲子', '运动旅行', '数码家电', '严选全球']
    }
  }
}
</script>

<style lang="stylus" scoped>
    .firstTop
        height: .95rem
        .tableList
            height: .6rem
        .TopSearch
            .logo
                width: 1.7rem
                height: .6rem
                margin: .2rem .2rem .2rem .1rem
            .search
                width: 5.5rem
                height: .35rem
                margin-top: .3rem
            .van-search__content
                background-color: #ededed
                border-radius: .15rem
                .van-cell
                    background: #ededed
</style>
