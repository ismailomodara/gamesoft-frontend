<template>
  <div>
    <div class="gs-app-section-spacing">
      <h3 class="gs-app-layout-heading">OVERVIEW</h3>
      <el-row type="flex" :gutter="40" class="flex-wrap">
        <el-col v-for="i in 3" :key="i" :lg="8">
          <el-card>
            <h4>{{ i }}</h4>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminOverview',
  layout: 'admin',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
