<template>
  <div>
    Transactions
  </div>
</template>

<script>
export default {
  name: 'AdminTransactions',
  layout: 'admin',
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
      searchQuery: ''
    }
  },
  computed: {},
  methods: {}
}
</script>
