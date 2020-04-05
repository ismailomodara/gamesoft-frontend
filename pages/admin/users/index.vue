<template>
  <div>
    Users
  </div>
</template>

<script>
export default {
  name: 'AdminUsers',
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
