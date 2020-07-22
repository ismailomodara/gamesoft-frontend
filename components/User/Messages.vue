<template>
  <el-card>
    <div class="gs-messages">
      <div class="gs-empty-message">
        <img src="@/assets/img/new-message.svg" alt />
      </div>
      <p>You have 2 new messages</p>
      <el-button size="mini" type="primary">Show me</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Messages',
  props: {
    messages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.gs-messages {
  position: relative;
  height: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;

  .gs-empty-message {
    height: 120px;
    width: auto;
    margin-bottom: 20px;

    img {
      height: 100%;
      width: auto;
    }
  }

  p {
    font-weight: 500;
    font-size: 0.9rem;
  }
}
</style>
