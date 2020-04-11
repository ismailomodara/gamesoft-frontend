<template>
  <el-dialog
    class="large"
    title="Add New Stage"
    :visible.sync="shouldShow"
    width="55%"
  >
    <el-form
      ref="stageForm"
      :model="stage"
      label-width="200px"
      label-position="top"
      class="gs-form"
    >
      <el-row :gutter="20" type="flex" class="flex-wrap mb-3">
        <el-col :xs="24" :sm="8">
          <el-form-item
            v-custom-input="stage.name"
            class="gs-form-item--auth"
            label="Name"
            prop="name"
          >
            <el-input
              v-model="stage.name"
              type="text"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8">
          <el-form-item
            v-custom-input="stage.duration"
            class="gs-form-item--auth"
            label="Duration (mins)"
            prop="duration"
          >
            <el-input
              v-model="stage.duration"
              type="text"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="8">
          <el-form-item
            v-custom-input="stage.passmark"
            class="gs-form-item--auth"
            label="Passmark (%)"
            prop="passmark"
          >
            <el-input
              v-model="stage.passmark"
              type="text"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="d-flex justify-content-center align-items-center">
        <el-radio-group v-model="questionType" size="small">
          <el-radio-button label="single">Single Question</el-radio-button>
          <el-radio-button label="bulk">Bulk Questions</el-radio-button>
        </el-radio-group>
      </div>
      <el-row>
        <el-col :span="24">
          <template v-if="questionType === 'single'">
            <el-form-item
              v-custom-input="stage.questions[0].Question"
              class="gs-form-item--auth"
              label="Question"
              prop="question"
            >
              <el-input
                v-model="stage.questions[0].Question"
                type="text"
                auto-complete="off"
              ></el-input>
            </el-form-item>
            <el-row type="flex" class="flex-wrap" :gutter="30">
              <el-col :span="12"
                ><el-form-item
                  v-custom-input="stage.questions[0].A"
                  class="gs-form-item--auth"
                  label="A"
                  prop="a"
                >
                  <el-input
                    v-model="stage.questions[0].A"
                    type="text"
                    auto-complete="off"
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="12"
                ><el-form-item
                  v-custom-input="stage.questions[0].B"
                  class="gs-form-item--auth"
                  label="B"
                  prop="b"
                >
                  <el-input
                    v-model="stage.questions[0].B"
                    type="text"
                    auto-complete="off"
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="12"
                ><el-form-item
                  v-custom-input="stage.questions[0].C"
                  class="gs-form-item--auth"
                  label="C"
                  prop="c"
                >
                  <el-input
                    v-model="stage.questions[0].C"
                    type="text"
                    auto-complete="off"
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="12"
                ><el-form-item
                  v-custom-input="stage.questions[0].D"
                  class="gs-form-item--auth"
                  label="D"
                  prop="d"
                >
                  <el-input
                    v-model="stage.questions[0].D"
                    type="text"
                    auto-complete="off"
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="12"
                ><el-form-item
                  class="gs-form-item--auth"
                  label=""
                  prop="answer"
                >
                  <el-select
                    v-model="stage.questions[0].Answer"
                    placeholder="Choose answer"
                  >
                    <el-option label="A" value="A"></el-option>
                    <el-option label="B" value="B"></el-option>
                    <el-option label="C" value="C"></el-option>
                    <el-option label="D" value="D"></el-option>
                  </el-select> </el-form-item
              ></el-col>
            </el-row>
          </template>
          <template v-else-if="questionType === 'bulk'">
            <vue-csv-import
              v-model="stage.questions"
              :map-fields="['Question', 'A', 'B', 'C', 'D', 'Answer']"
            >
              <template slot="error">
                <el-alert title=" File type is invalid" type="error">
                </el-alert>
              </template>

              <template slot="thead">
                <tr>
                  <th>Key</th>
                  <th>CSV Header</th>
                </tr>
              </template>

              <template slot="next" slot-scope="{ load }">
                <el-button size="mini" plain @click.prevent="load"
                  >Load Csv</el-button
                >
              </template>
            </vue-csv-import>
          </template>
        </el-col>
      </el-row>
      <div
        v-if="questionType !== ''"
        class="d-flex justify-content-center my-3"
      >
        <el-button :loading="addingStage" type="primary" @click="addStage"
          >Add Stage</el-button
        >
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddStage',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    stageProperties: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      addingStage: false,
      stage: {
        name: '',
        duration: '',
        passmark: '',
        questions: [
          {
            Question: '',
            A: '',
            B: '',
            C: '',
            D: '',
            Answer: ''
          }
        ]
      },
      questionType: ''
    }
  },
  computed: {
    shouldShow: {
      get() {
        return this.show
      },
      set(value) {
        return this.$emit('update:show', value)
      }
    },
    stagePropertiesUpdate: {
      get() {
        return this.stageProperties
      },
      set(value) {
        return this.$emit('update:stageProperties', value)
      }
    }
  },
  methods: {
    addStage() {
      this.addingStage = true
      if (this.questionType === 'bulk') {
        this.stage.questions.splice(0, 1)
      }
      this.stagePropertiesUpdate = this.stage
      setTimeout(() => {
        this.addingStage = false
        this.shouldShow = false
      }, 2000)
    }
  }
}
</script>
