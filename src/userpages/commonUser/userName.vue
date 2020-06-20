<template>
    <van-row class="userName" type="flex" align="center">
        <van-col offset="1" class="userPhoto">
            <img class="infoPto" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png">
        </van-col>
        <van-col offset="1" class="importInfo">
            <div class="loginUser">
                <p>jnuchr803233</p>
                <p class="membership">尊贵会员</p>
            </div>
        </van-col>
    </van-row>
</template>

<script>
export default {
  name: 'userName'
}
</script>

<style lang="stylus" scoped>
    .userName
        height: 2.7rem
        background: linear-gradient(#FFDEAD,#FFEBCD)
        .userPhoto
            height: 1.4rem
            width: 1.4rem
            .infoPto
                width: 100%
                border-radius: 0.7rem
        .importInfo
            height: 0.8rem
            width: 2.4rem
            .loginUser
                color: white
                font-size: .35rem
                .membership
                    margin-top: .15rem
                    font-size: .3rem
</style>
