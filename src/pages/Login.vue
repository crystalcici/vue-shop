<template>
    <div class="main">
        <login-top></login-top>
        <login-pic></login-pic>
        <login-button></login-button>
        <login-other></login-other>
    </div>
</template>

<script>
import LoginTop from './common/LoginTop'
import LoginPic from './common/LoginPic'
import LoginButton from './common/LoginButton'
import LoginOther from './common/LoginOther'
export default {
  name: 'Login',
  components: {
    LoginTop,
    LoginPic,
    LoginButton,
    LoginOther
  }
}
</script>
<style lang="stylus" scoped>
    .main
        background: whitesmoke
        height: 16.24rem
</style>
