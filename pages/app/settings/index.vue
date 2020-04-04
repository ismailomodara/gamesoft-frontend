<template>
  <el-tabs v-model="activeSetting" @tab-click="handleClick">
    <el-tab-pane label="Profile" name="profile"
      ><profile></profile
    ></el-tab-pane>
    <el-tab-pane label="Payment" name="payment"
      ><payment></payment
    ></el-tab-pane>
    <el-tab-pane label="Security" name="security">
      <security></security>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Profile from '~/components/Settings/Profile'
import Security from '~/components/Settings/Security'
import Payment from '~/components/Settings/Payment'

export default {
  name: 'Settings',
  layout: 'app',
  components: {
    Profile,
    Security,
    Payment
  },
  data() {
    return {
      activeSetting: 'profile'
    }
  },
  methods: {
    handleClick() {
      //
    }
  }
}
</script>
