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
        label="密码"
        placeholder="请输入密码"
        type="password"
        rule="^.{6,16}$"
        @inputChange="res => password = res"
        />
        <confirm-button
        class="loginBtn"
        type="danger"
        innerTxt="登录"
        @confirm="loginConfirm"
        />
        <router-link to="/">
            <login-info
            class="loginInfo"
            loginTxt="其他登录方式"
            >
            </login-info>
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
  name: 'LoginNumber',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    LoginTop,
    LoginPic,
    LoginText,
    ConfirmButton,
    LoginInfo
  },
  methods: {
    async loginConfirm () {
      const rulg = new RegExp(/^.{6,16}$/)
      if (rulg.test(this.username) && rulg.test(this.password)) {
        const res = await axios.post('/login', {
          username: this.username,
          password: this.password
        })
        // 后端返回的msg
        this.$toast(res.data.msg)
      } else {
        this.$toast('格式不正确，重新输入')
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
        .loginBtn
            margin-top: .3rem
        .loginInfo
            margin-top: .7rem
            height: .4rem
            text-align: center
</style>
