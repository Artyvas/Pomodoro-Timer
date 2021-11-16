<template>
  <div>
    <button @click="isVisibleToggle()" v-if="!isVisible">Add Task</button>
    <form v-if="isVisible" @submit.prevent="submitData">
      <h2>Task Name:</h2>
      <input type="text" v-model="enteredName">
      <h2>Estimated Pomodoros</h2>
      <input type="number" v-model="enteredEstPoms">
      <div>
      <button @click="isVisibleToggle()">Cancel</button>
      <button>Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['add-task'],
  data() {
    return {
      isVisible: false,
      enteredName: '',
      enteredEstPoms: 0
      }
  },
  methods: {
    isVisibleToggle() {
      this.isVisible = !this.isVisible
    },
    submitData() {
      this.$emit(
        'add-task',
        this.enteredName,
        this.enteredEstPoms
      )
    }
  }
}
</script>
