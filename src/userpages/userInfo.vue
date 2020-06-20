<template>
    <div>
        <user-name></user-name>
        <user-pkg></user-pkg>
    </div>
</template>

<script>
import userName from './commonUser/userName'
import userPkg from './commonUser/userPkg'
export default {
  name: 'userInfo',
  components: {
    userName,
    userPkg
  }
}
</script>

<style lang="stylus" scoped>

</style>
