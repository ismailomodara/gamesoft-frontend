<template>
  <div>
    <el-form class="gs-filters">
      <el-form-item class="gs-form-item--auth" label="" prop="search">
        <el-input
          v-model="searchQuery"
          type="text"
          suffix-icon="gs-icon--search"
          placeholder="Search transaction by property"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableDataValue" style="width: 100%">
      <el-table-column width="40"></el-table-column>
      <el-table-column prop="transactionId" label="Transaction Id" width="180">
      </el-table-column>
      <el-table-column prop="amount" label="Amount">
        <template slot-scope="scope"> &#8358; {{ scope.row.amount }} </template>
      </el-table-column>
      <el-table-column prop="description" label="Description">
      </el-table-column>
      <el-table-column prop="date" label="Date"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
  props: {
    recentActivities: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      searchQuery: '',
      tableData: [
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '1,500',
          description: 'Made a withdrawal',
          date: '21st December, 2018'
        },
        {
          type: 'credit',
          transactionId: 'GST-CR03042020',
          amount: '2,000',
          description: 'Winnings addition',
          date: '21st December, 2018'
        },
        {
          type: 'credit',
          transactionId: 'GST-CR03042020',
          amount: '500',
          description: 'Make a deposit',
          date: '21st December, 2018'
        },
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '800',
          description: 'Made a withdrawal',
          date: '21st November, 2018'
        },
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '1,500',
          description: 'Made a deposit',
          date: '21st December, 2018'
        },
        {
          type: 'credit',
          transactionId: 'GST-CR03042020',
          amount: '2,000',
          description: 'Winnings addition',
          date: '21st December, 2018'
        },
        {
          type: 'credit',
          transactionId: 'GST-CR03042020',
          amount: '500',
          description: 'Make a deposit',
          date: '21st December, 2018'
        },
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '800',
          description: 'Made a withdrawal',
          date: '21st December, 2018'
        },
        {
          type: 'debit',
          transactionId: 'GST-DB03042020',
          amount: '1,500',
          description: 'Made a deposit',
          date: '21st December, 2018'
        }
      ]
    }
  },
  computed: {
    tableDataValue() {
      return this.filterWithQuery()
    }
  },
  methods: {
    filterWithQuery(query = this.searchQuery) {
      return this.tableData.filter(
        (data) =>
          !query ||
          data.type.includes(query) ||
          data.transactionId.toLowerCase().includes(query.toLowerCase()) ||
          data.description.toLowerCase().includes(query.toLowerCase()) ||
          data.date.toLowerCase().includes(query.toLowerCase()) ||
          data.amount.includes(query)
      )
    },
    filterBy(command) {
      this.filterWithQuery(command)
    }
  }
}
</script>

<style lang="scss" scoped></style>
