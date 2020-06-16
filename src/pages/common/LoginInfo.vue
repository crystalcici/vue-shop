<template>
    <div class="loginTxt">
        {{loginTxt}}
        <span class="iconfont link">&#xe600;</span>
    </div>
</template>

<script>
export default {
  name: 'LoginInfo',
  props: ['loginTxt']
}
</script>

<style lang="stylus" scoped>
    .loginTxt
        color: black
        .link
            height: .3rem
            margin-left: -.1rem
</style>
