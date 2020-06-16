<template>
    <div class="login">
        <router-link to="/login">
            <van-button type="danger" class="login-button">账号登录</van-button>
        </router-link>
        <router-link to="/register">
            <van-button type="default" class="register-button">账号注册</van-button>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'LoginButton'
}
</script>

<style lang="stylus" scoped>
    .login
        text-align: center
        .login-button
            width: 6.6rem
        .register-button
            width: 6.6rem
            margin-top: .4rem
            margin-bottom: .2rem
            border-color: red
            color: red
</style>
