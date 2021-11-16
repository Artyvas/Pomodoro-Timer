<template>
  <div>
  <button v-if="isFinished">Insert check mark image</button>
  <h2>{{ name }}</h2>
  <h4>Estimated pomodoros: {{ estPom }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    estPom: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isFinished: false
    }
  }
}
</script>

<style scoped>

</style>
