<template>
    <div class="main">
        <login-top></login-top>
        <login-pic></login-pic>
        <login-text
        class="username"
        label="账号"
        placeholder="请输入账号"
        rule="^.{6,16}$"
        @inputChange="res => username = res"
        />
        <login-text
        class="username"
        label="密码"
        placeholder="请输入密码"
        type="password"
        rule="^.{6,16}$"
        @inputChange="res => password = res"
        />
        <login-text
        label="确认密码"
        placeholder="请再次输入密码"
        type="password"
        rule="^.{6,16}$"
        @inputChange="res => ConfirmPwd = res"
        />
        <confirm-button
        class="registerBtn"
        type="danger"
        innerTxt="注册"
        @confirm="registerConfirm"
        />
        <router-link to="/login">
            <login-info
            class="loginInfo"
            loginTxt="注册完毕，登录"
            />
        </router-link>
    </div>
</template>

<script>
import LoginTop from './common/LoginTop'
import LoginPic from './common/LoginPic'
import LoginText from './common/LoginText'
import ConfirmButton from './common/ConfirmButton'
import LoginInfo from './common/LoginInfo'
// eslint-disable-next-line
import axios from 'axios'
export default {
  name: 'Register',
  components: {
    LoginTop,
    LoginPic,
    LoginText,
    ConfirmButton,
    LoginInfo
  },
  methods: {
    registerConfirm () {
      const rulg = new RegExp(/^.{6,16}$/)
      if (rulg.test(this.username) && rulg.test(this.password) && rulg.test(this.ConfirmPwd)) {
        if (this.password !== this.ConfirmPwd) {
          this.$toast('两次密码需一致，请重新输入')
        }
        axios.post('/register', {
          username: this.username,
          password: this.password
        })
      }
      if (rulg.test(this.username) === false || !rulg.test(this.password) === false || !rulg.test(this.ConfirmPwd) === false) {
        this.$toast('sb，请重新输入')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    .main
        background: whitesmoke
        height: 16.24rem
        .username
            position: relative
            border: none
            &:after
                content: ''
                position: absolute
                height: 1px
                width: 100%
                transform: scaleY(0.5)
                bottom: 0
                background: whitesmoke
        .registerBtn
            margin-top: .3rem
        .loginInfo
            margin-top: .7rem
            height: .4rem
            text-align: center
</style>
