<template>
    <div>
        <van-field
        :placeholder="placeholder"
        :type="type"
        :label="label"
        :rule="rule"
        v-model="content"
        >
        </van-field>
    </div>
</template>

<script>
export default {
  name: 'LoginText',
  data () {
    return {
      content: ''
    }
  },
  props: ['placeholder', 'type', 'label', 'rule'],
  methods: {
    // 校验是否为6位以上字符串
    handlerPass () {
      const rue = new RegExp(this.rule)
      if (rue.test(this.content)) {
        this.$emit('inputChange', this.content)
      }
    }
  },
  watch: {
    content () {
      this.handlerPass()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
