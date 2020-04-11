<template>
  <el-dialog
    title="Send Message"
    :visible.sync="shouldShow"
    width="45%"
    @close="clearFields"
  >
    <el-form
      ref="messageForm"
      :model="message"
      label-width="200px"
      label-position="top"
    >
      <el-row type="flex" class="flex-wrap">
        <el-col :lg="24">
          <el-form-item class="gs-form-item--auth" label="" prop="user">
            <el-select
              v-model="message.userId"
              placeholder="Select user"
              filterable
            >
              <el-option
                v-for="(account, index) in allUsers"
                :key="index"
                :label="account.name"
                :value="account.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :lg="24">
          <el-form-item
            v-custom-input="message.content"
            class="gs-form-item--auth"
            label="Message"
            prop="content"
          >
            <el-input
              v-model="message.content"
              type="textarea"
              :rows="5"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="d-flex justify-content-center my-3">
        <el-button type="primary" @click="sendMessage">Send</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'SendMessage',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    users: {
      type: Array,
      default() {
        return []
      }
    },
    userId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      message: {
        userId: null,
        content: ''
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
    allUsers() {
      return this.users
    },
    userIdValue() {
      return this.userId
    }
  },
  created() {
    this.message.userId = this.userIdValue
  },
  methods: {
    sendMessage() {
      //
    },
    clearFields() {
      //
    }
  }
}
</script>

<style lang="scss" scoped></style>
