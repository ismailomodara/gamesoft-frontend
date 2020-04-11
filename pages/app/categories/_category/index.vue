<template>
  <div class="gs-app-section-spacing">
    <h3 class="gs-app-layout-heading">ALL STAGES ({{ stages.length }})</h3>
    <el-row type="flex" :gutter="40" class="flex-wrap">
      <el-col :lg="8">
        <stage-item
          v-for="stage in stages"
          :key="stage.id"
          :stage="stage"
          @selected-stage="showSelectedStage"
        ></stage-item>
      </el-col>
      <el-col :lg="16">
        <el-card>
          <stage-item-show :content="selectedStageContent"></stage-item-show>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import StageItem from '~/components/Stage/StageItem'
import StageItemShow from '~/components/Stage/StageItemShow'

export default {
  name: 'Dashboard',
  layout: 'app',
  components: {
    StageItem,
    StageItemShow
  },
  data() {
    return {
      selectedStageContent: '',
      stages: [
        {
          id: 1,
          number: 1,
          score: 240,
          total_score: 400,
          attempted_questions: 18,
          total_questions: 30,
          status: 'in-progress'
        },
        {
          id: 2,
          number: 2,
          score: 240,
          total_score: 400,
          attempted_questions: 18,
          total_questions: 30,
          status: 'completed'
        },
        {
          id: 3,
          number: 3,
          score: 0,
          total_score: 400,
          attempted_questions: 0,
          total_questions: 30,
          status: 'not-attempted'
        }
      ]
    }
  },
  mounted() {
    this.selectedStageContent = this.stages[0]
  },
  methods: {
    showSelectedStage(value) {
      this.selectedStageContent = value
    }
  }
}
</script>

<style lang="scss" scoped></style>
