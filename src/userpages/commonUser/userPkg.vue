<template>
    <div class="kindPkg">
        <div class="property">
            <p class="item">我的资产</p>
        </div>
        <div class="ownerInfo">
            <van-row class="owner">
                <van-col class="ownerPkg">
                    <div class="cost">
                        <p class="number">0</p>
                        <p class="desc">回馈金</p>
                    </div>
                </van-col>
                <van-col class="ownerPkg">
                    <div class="cost">
                        <p class="number">0</p>
                        <p class="desc">红包</p>
                    </div>
                </van-col>
                <van-col class="ownerPkg">
                    <div class="cost">
                        <p class="number">0</p>
                        <p class="desc">优惠券</p>
                    </div>
                </van-col>
                <van-col class="ownerPkg">
                    <div class="cost">
                        <p class="number">0</p>
                        <p class="desc">津贴</p>
                    </div>
                </van-col>
                <van-col class="ownerPkg">
                    <div class="cost">
                        <p class="number">0</p>
                        <p class="desc">礼品卡</p>
                    </div>
                </van-col>
            </van-row>
        </div>
        <div class="spacebt">
        </div>
    </div>
</template>

<script>
export default {
  name: 'userPkg'
}
</script>

<style lang="stylus" scoped>
    .kindPkg
        height: 2.8rem
        .property
            height: 1rem
            display: flex
            align-items: center
            position: relative
            border: none
            &:after
                position: absolute
                content: ''
                height: 1px
                width:100%
                transform: scaleY(0.5)
                bottom: 0
                background: linear-gradient(#ffffff,#cacaca)
            .item
                margin-left: .4rem
        .ownerInfo
            height: 1.6rem
            .owner
                .ownerPkg
                    width: 20%
                    height: 1.6rem
                    display: flex
                    justify-content: center
                    align-items: center
                    .cost
                        text-align: center
                        .number
                            margin-bottom: .15rem
                            font-weight: bold
                            font-size: .3rem
                        .desc
                            font-size: .1rem
        .spacebt
            height: 0.2rem
            background: whitesmoke
</style>
