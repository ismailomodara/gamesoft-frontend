<template>
  <div class="gs-activities mt-4">
    <el-form class="gs-filters">
      <el-dropdown @command="filterBy">
        <el-button plain
          >Filter by<i class="gs-icon--chevron-down"></i
        ></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">All</el-dropdown-item>
          <el-dropdown-item command="credit">Credit CR</el-dropdown-item>
          <el-dropdown-item command="debit">Debit DB</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
      <el-table-column prop="type" width="60">
        <template slot-scope="scope">
          <span
            v-if="scope.row.type === 'credit'"
            class="gs-activity-type credit"
            ><i class="gs-icon--arrow-up"></i
          ></span>
          <span v-else class="gs-activity-type debit"
            ><i class="gs-icon--arrow-down"></i>
          </span>
        </template>
      </el-table-column>
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
  name: 'AllActivities',
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

<style lang="scss" scoped>
.gs-activities {
  padding: 20px;
  border-radius: 10px;
  background: #fff;

  .gs-activity-type {
    height: 30px;
    width: 30px;
    border-radius: 100px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      font-size: 11px;
    }

    &.credit {
      background: #67c23a20;
      color: #67c23a;
    }

    &.debit {
      background: #f56c6c20;
      color: #f56c6c;
    }
  }

  a {
    font-weight: 600;
    font-size: 12px;
  }
}

.gs-filters {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;

  .el-form-item {
    margin-bottom: 0;
    height: auto !important;
    width: 300px;
  }

  .el-button {
    margin-right: 10px;
    display: flex;
    align-items: center;

    i {
      margin-left: 5px;
      font-size: 12px;
    }

    &:hover {
      border-color: #7f828b;
      color: #7f828b;
      transform: translateY(0) !important;
      box-shadow: none !important;
    }
  }
}
</style>
