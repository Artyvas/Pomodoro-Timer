<template>
  <div>
    <button @click="isVisible()">Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
      }
  },
  methods: {
    isVisible() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>
