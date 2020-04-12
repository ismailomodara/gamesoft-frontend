<template>
  <div class="gs-admin-layout">
    <div class="gs-admin-layout-sidebar">
      <div class="gs-user">
        <div class="d-flex">
          <div class="gs-user-avatar">
            <img src="@/assets/img/mosh.jpeg" alt />
          </div>
          <div class="gs-user-details">
            <h6>Admin Admin</h6>
            <p>admin@admin.com</p>
          </div>
        </div>
        <el-popover
          placement="right"
          title="Notifications"
          width="200"
          trigger="click"
          content="Display users' activities here"
        >
          <el-badge slot="reference" :value="2" class="item" type="success">
            <div class="gs-notifications">
              <i class="gs-icon--bell"></i>
            </div>
          </el-badge>
        </el-popover>
      </div>
      <div class="gs-active-users">
        <p>Active Users</p>
        <h2>120</h2>
      </div>
      <el-menu
        :default-active="activeTab"
        :router="true"
        class="gs-admin-layout-menu"
      >
        <el-menu-item
          :route="{ name: 'admin-leaderboard' }"
          index="leaderboard"
        >
          <i class="gs-icon--"></i>
          <span>Leaderboard</span>
        </el-menu-item>
        <el-menu-item :route="{ name: 'admin-categories' }" index="categories">
          <i class="gs-icon--server"></i>
          <span>Categories</span>
        </el-menu-item>
        <el-menu-item :route="{ name: 'admin-users' }" index="users">
          <i class="gs-icon--users"></i>
          <span>Users</span>
        </el-menu-item>
        <el-menu-item
          :route="{ name: 'admin-transactions' }"
          index="transactions"
        >
          <i class="gs-icon--clipboard"></i>
          <span>Transactions</span>
        </el-menu-item>
        <el-menu-item :route="{ name: 'admin-payments' }" index="payments">
          <i class="gs-icon--credit-card"></i>
          <span>Payments</span>
        </el-menu-item>
      </el-menu>
      <div class="gs-logout" @click="logout">
        <i class="gs-icon--power"></i>
      </div>
    </div>
    <div class="gs-admin-layout-main">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
  data() {
    return {
      activeTab: ''
    }
  },
  watch: {
    $route(to) {
      if (to.name !== null) {
        const value = to.name.split('-')
        this.activeTab = value[1]
      }
    }
  },
  mounted() {
    if (this.$route.name !== null) {
      const value = this.$route.name.split('-')
      this.activeTab = value[1]
    }
  },
  methods: {
    logout() {
      this.$router.push({ name: 'accounts-login' })
    }
  }
}
</script>

<style scoped lang="scss">
$--sidebar-width: 20%;

.gs-admin-layout {
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  .gs-admin-layout-sidebar {
    width: $--sidebar-width;
    background: #ffffff;
    height: 100vh;
    padding: 40px 30px;
    position: fixed;

    .gs-user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      .gs-user-avatar {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        margin-right: 10px;

        img {
          height: 100%;
          width: 100%;
          border-radius: 100%;
          object-fit: cover;
        }
      }
      p {
        font-size: 0.85rem;
        color: #070013;
        opacity: 0.7;
        margin-bottom: 0;
      }

      .el-badge__content {
        font-size: 10px;
      }

      .gs-notifications {
        color: #070013;
        opacity: 0.7;
        cursor: pointer;
        transition: opacity 0.2s ease-out;

        i {
          font-size: 20px;
        }

        &:hover {
          opacity: 1;
          transition: opacity 0.2s ease-out;
        }
      }
    }
    .gs-active-users {
      height: 130px;
      padding: 15px 0;
      background: #4d00d2;
      border-radius: 10px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 0;
        color: #fff;
      }

      h2 {
        font-weight: 600;
        margin-bottom: 10px;
        color: #fff;
      }
    }
    .el-menu {
      height: 100%;
      background: #ffffff;
      border-right: none;

      .el-menu-item {
        height: 70px;
        padding-left: 30px !important;
        display: flex;
        align-items: center;
        font-size: 1rem;
        border-radius: 5px;
        opacity: 0.5;

        i {
          margin-right: 12px;
        }

        &.is-active {
          font-weight: 600;
          opacity: 1;
          background: #4d00d215;
          color: #4d00d2;
          transition: all 0.2s ease-in;
        }
      }
    }
    .gs-logout {
      position: absolute;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
      background: #07001315;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #070013;
      border-radius: 100%;
      transition: all 0.2s ease-out;

      &:hover {
        background: #070013;
        color: #fff;
        transition: all 0.2s ease-in;
      }
    }
  }

  .gs-admin-layout-main {
    position: relative;
    left: $--sidebar-width;
    width: calc(100% - #{$--sidebar-width});
    height: 100%;
    background: #f3eff9;
    padding-bottom: 80px;

    > div {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      padding: 40px 20px;
    }
  }
}
</style>
