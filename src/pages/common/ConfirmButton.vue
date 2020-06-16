<template>
    <div class="ConfirmBtn">
        <van-button
        class="login"
        square
        :type="type"
        @click="confirm"
        >
        {{innerTxt}}
        </van-button>
    </div>
</template>

<script>
export default {
  name: 'ConfirmButton',
  props: ['type', 'innerTxt'],
  methods: {
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .ConfirmBtn
        text-align: center
        .login
            width: 6.6rem
</style>
