<template>
    <div class="Top-content">
        <div class="LoginTop">
            <div class="TopContent">
                <div class="iconfont Top-left">
                    &#xe62e;
                </div>
                <div class="Top-middle">
                    <p>网易严选</p>
                </div>
                <div class="iconfont Top-right">
                    <span class="Top-search">&#xe632;</span>
                    <span>&#xe60e;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginTop'
}
</script>

<style lang="stylus" scoped>
    .Top-content
        position: relative
        border: none
        &:after
            position: absolute
            content: ''
            height: 1px
            width:100%
            transform: scaleY(0.5)
            bottom: 0
            background: #cacaca
        .LoginTop
            height: 0.9rem
            line-height: 0.9rem
            background: whitesmoke
            .TopContent
                padding 0 0.16rem 0 0.24rem
                height: 100%
                display: flex
                align-items: center
                .Top-left
                    float: left
                    width: .5rem
                    font-size: .6rem
                .Top-middle
                    flex: 1
                    margin-left: 2.4rem
                .Top-right
                    float: right
                    font-size: .5rem
                    margin-right: .2rem
                    .Top-search
                        margin-right: .2rem
</style>
