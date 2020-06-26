<template>
    <div class="userMenu">
        <van-grid :column-num="3" class="menuInfo">
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe6ab;</van-icon>
                </div>
                <p class="iconText">我的订单</p>
            </van-grid-item>
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe611;</van-icon>
                </div>
                <p class="iconText">周六一起拼</p>
            </van-grid-item>
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe622;</van-icon>
                </div>
                <p class="iconText">售后服务</p>
            </van-grid-item>
        </van-grid>
        <van-grid :column-num="3" class="menuInfo">
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe6b3;</van-icon>
                </div>
                <p class="iconText">邀请返利</p>
            </van-grid-item>
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe602;</van-icon>
                </div>
                <p class="iconText">优先购</p>
            </van-grid-item>
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe636;</van-icon>
                </div>
                <p class="iconText">积分中心</p>
            </van-grid-item>
        </van-grid>
        <van-grid :column-num="3" class="menuInfo">
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe641;</van-icon>
                </div>
                <p class="iconText">会员俱乐部</p>
            </van-grid-item>
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe610;</van-icon>
                </div>
                <p class="iconText">地址管理</p>
            </van-grid-item>
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe736;</van-icon>
                </div>
                <p class="iconText">账号安全</p>
            </van-grid-item>
        </van-grid>
        <van-grid :column-num="3" class="menuInfo">
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe646;</van-icon>
                </div>
                <p class="iconText">帮助与客服</p>
            </van-grid-item>
            <van-grid-item class="MenuList">
                <div class="iconList">
                    <van-icon class="iconfont iconItem">&#xe61a;</van-icon>
                </div>
                <p class="iconText">意见反馈</p>
            </van-grid-item>
            <van-grid-item class="MenuList">
            </van-grid-item>
        </van-grid>
        <div class="painting"></div>
        <router-link to="/">
            <div class="escape">
                <p>退出登录</p>
            </div>
        </router-link>
        <div class="afterP"></div>
    </div>
</template>

<script>
export default {
  name: 'userMenu'
}
</script>

<style lang="stylus" scoped>
    .userMenu
        .menuInfo
            .MenuList
                height: 1.8rem
                .iconList
                    height: .6rem
                    width: .6rem
                    .iconItem
                        font-size: .5rem
                .iconText
                    margin-top: .1rem
        .painting
            height: .4rem
            background: whitesmoke
        .escape
            height: .95rem
            line-height: .95rem
            text-align: center
            color: black
        .afterP
            height: 1.2rem
            background: whitesmoke
</style>
