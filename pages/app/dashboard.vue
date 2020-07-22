<template>
  <div>
    <div class="gs-layout--section">
      <div class="gs-layout--heading">
        <h3>Categories</h3>
      </div>
      <el-row type="flex" :gutter="20" class="flex-wrap">
        <el-col
          v-for="category in categories"
          :key="category.id"
          :sm="12"
          :md="8"
          :lg="8"
        >
          <category-item :category="category"></category-item>
        </el-col>
      </el-row>
    </div>
    <div class="gs-layout--section">
      <div class="gs-layout--heading">
        <h3>Credit</h3>
      </div>
      <el-row type="flex" :gutter="20" class="flex-wrap">
        <el-col :sm="12" :md="8">
          <div class="gs-credit">
            <p>Referrals Bonus</p>
            <h3>&#8358;130.00</h3>
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="gs-credit">
            <p>Quiz Funds</p>
            <h3>&#8358;7,830.00</h3>
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="gs-credit">
            <p>Referrals Bonus</p>
            <h3>&#8358;680.00</h3>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="gs-layout--section">
      <el-row type="flex" :gutter="20" class="flex-wrap">
        <el-col :sm="24" :md="16" :lg="16">
          <div class="gs-layout--heading">
            <h3>Recent Transactions</h3>
          </div>
          <recent-transactions />
        </el-col>
        <el-col :sm="24" :md="8" :lg="8">
          <div class="gs-layout--heading">
            <h3>Messages</h3>
          </div>
          <messages />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CategoryItem from '../../components/User/Categories/CategoryItem'
import RecentTransactions from '../../components/User/Wallet/RecentTransactions'
import Messages from '../../components/User/Messages'

export default {
  name: 'Dashboard',
  layout: 'app',
  components: {
    CategoryItem,
    RecentTransactions,
    Messages
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Music',
          score: 240,
          percentage: 62
        },
        {
          id: 2,
          name: 'Sports',
          score: 302,
          percentage: 75
        },
        {
          id: 3,
          name: 'IQ Basic',
          score: 150,
          percentage: 50
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-credit {
  background: #fff;
  height: 120px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 0;
    opacity: 0.74;
  }
}

a {
  font-size: 12px;
  font-weight: 500;
  margin-right: 15px;
}
</style>
