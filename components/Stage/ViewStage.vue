<template>
  <el-card>
    <el-form
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
      <el-row>
        <el-col :span="24">
          <el-table :data="stage.questions" style="width: 100%">
            <el-table-column
              fixed
              prop="Question"
              :label="`(${stage.questions.length}) Questions`"
              min-width="300"
            >
            </el-table-column>
            <el-table-column
              prop="A"
              label="A"
              min-width="200"
            ></el-table-column>
            <el-table-column
              prop="B"
              label="B"
              min-width="200"
            ></el-table-column>
            <el-table-column
              prop="C"
              label="C"
              min-width="200"
            ></el-table-column>
            <el-table-column
              prop="D"
              label="D"
              min-width="200"
            ></el-table-column>
            <el-table-column prop="Answer" label="Answer"></el-table-column>
            <el-table-column fixed="right" label="Actions" min-width="200">
              <template slot-scope="scope">
                <div class="d-flex">
                  <el-button
                    type="danger"
                    plain
                    size="small"
                    @click="deleteQuestion(scope.$index)"
                    >Delete</el-button
                  >
                  <el-button
                    plain
                    size="small"
                    @click="editQuestion(scope.$index)"
                    >Edit</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <div class="d-flex justify-content-center my-3">
        <el-button type="text" @click="shouldShow = false">Back</el-button>
        <el-button :loading="updatingStage" type="primary" @click="updateStage"
          >Update</el-button
        >
      </div>
    </el-form>
    <el-dialog
      title="Edit Question"
      :visible.sync="showEditQuestion"
      width="55%"
    >
      <el-form
        :model="question"
        label-width="200px"
        label-position="top"
        class="gs-form"
      >
        <el-row type="flex" class="flex-wrap">
          <el-col :span="24">
            <el-form-item
              v-custom-input="question.Question"
              class="gs-form-item--auth"
              label="Question"
              prop="question"
            >
              <el-input
                v-model="question.Question"
                type="text"
                auto-complete="off"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="12">
            <el-form-item
              v-custom-input="question.A"
              class="gs-form-item--auth"
              label="A"
              prop="A"
            >
              <el-input
                v-model="question.A"
                type="text"
                auto-complete="off"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="12">
            <el-form-item
              v-custom-input="question.B"
              class="gs-form-item--auth"
              label="B"
              prop="B"
            >
              <el-input
                v-model="question.B"
                type="text"
                auto-complete="off"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="12">
            <el-form-item
              v-custom-input="question.C"
              class="gs-form-item--auth"
              label="C"
              prop="C"
            >
              <el-input
                v-model="question.C"
                type="text"
                auto-complete="off"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="12">
            <el-form-item
              v-custom-input="question.D"
              class="gs-form-item--auth"
              label="D"
              prop="D"
            >
              <el-input
                v-model="question.D"
                type="text"
                auto-complete="off"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="12">
            <el-form-item
              v-custom-input="question.Answer"
              class="gs-form-item--auth"
              label="Answer"
              prop="Answer"
            >
              <el-select v-model="question.Answer" placeholder="Choose answer">
                <el-option label="A" value="A"></el-option>
                <el-option label="B" value="B"></el-option>
                <el-option label="C" value="C"></el-option>
                <el-option label="D" value="D"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="d-flex justify-content-center my-3">
          <el-button type="primary" @click="updateQuestion">Update</el-button>
        </div>
      </el-form>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: 'ViewStage',
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
      showEditQuestion: false,
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
      updatingStage: false,
      question: {
        Question: '',
        A: '',
        B: '',
        C: '',
        D: '',
        Answer: ''
      }
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
    stagePropertiesComputed: {
      get() {
        return this.stageProperties
      },
      set(value) {
        return this.$emit('update:stageProperties', value)
      }
    }
  },
  created() {
    this.stage = this.stagePropertiesComputed
  },
  methods: {
    deleteQuestion(index) {
      this.$confirm(
        'Are you sure you want to delete this question?',
        'Warning',
        {
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      ).then(() => {
        this.stage.questions.splice(index, 1)
        this.$message({
          type: 'success',
          message: 'Question deleted'
        })
      })
    },
    editQuestion(index) {
      this.question = this.stage.questions[index]
      this.showEditQuestion = true
    },
    updateQuestion(index) {
      this.stage.questions[index] = this.question
      this.showEditQuestion = false
    },
    updateStage() {
      this.updatingStage = true
      setTimeout(() => {
        this.updatingStage = false
        this.shouldShow = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped></style>
