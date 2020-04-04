<template>
  <div>
    <div class="gs-app-section-spacing">
      <h3 class="gs-app-layout-heading">ALL ACTIVITIES</h3>
      <el-row type="flex" :gutter="40" class="flex-wrap">
        <el-col :lg="24">
          <all-activities></all-activities>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import AllActivities from '../../components/Activities/AllActivities'

export default {
  name: 'Dashboard',
  layout: 'app',
  components: {
    AllActivities
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
