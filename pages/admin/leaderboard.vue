<template>
  <div>
    <div class="gs-app-section-spacing">
      <h3 class="gs-app-layout-heading">OVERVIEW</h3>
      <el-row type="flex" :gutter="40" class="flex-wrap mb-5">
        <el-col class="mb-4" :sm="12" :md="8" :lg="8">
          <el-card>
            <div class="gs-leaderboard-specifics">
              <div>
                <p>Most Active User</p>
                <nuxt-link :to="{ name: 'admin-users-id', params: { id: 1 } }"
                  >Moshood Alaran</nuxt-link
                >
              </div>
              <h4>IC</h4>
            </div>
          </el-card>
        </el-col>
        <el-col class="mb-4" :sm="12" :md="8" :lg="8">
          <el-card>
            <div class="gs-leaderboard-specifics">
              <div>
                <p>Most Played Category</p>
                <h6>Music</h6>
              </div>
              <h4>IC</h4>
            </div>
          </el-card>
        </el-col>
        <el-col class="mb-4" :sm="12" :md="8" :lg="8">
          <el-card>
            <div class="gs-leaderboard-specifics">
              <div>
                <p>Most Wins</p>
                <h6>Olasupo Yusuff</h6>
              </div>
              <h4>IC</h4>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <h3 class="gs-app-layout-heading">LEADERBOARD</h3>
      <el-row type="flex">
        <el-col :span="24">
          <el-card>
            <leaderboard></leaderboard>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Leaderboard from '../../components/Admin/Leaderboard'

export default {
  name: 'AdminLeaderboard',
  layout: 'admin',
  components: {
    Leaderboard
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-leaderboard-specifics {
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #4d00d2;
    font-size: 0.8rem;
    margin-bottom: 5px;
    font-weight: 600;
  }

  h6,
  a {
    font-size: 0.9rem;
    color: #070013;
  }
}
</style>
