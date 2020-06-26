<template>
    <div>
        <user-name></user-name>
        <user-pkg></user-pkg>
        <user-menu></user-menu>
    </div>
</template>

<script>
import userName from './commonUser/userName'
import userPkg from './commonUser/userPkg'
import userMenu from './commonUser/userMenu'
export default {
  name: 'userInfo',
  components: {
    userName,
    userPkg,
    userMenu
  }
}
</script>

<style lang="stylus" scoped>

</style>
