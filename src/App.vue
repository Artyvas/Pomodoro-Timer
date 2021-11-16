<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <div id ="pomodoro">
      <div id="pombuttons">
        <button @click="setPomodoro()">Pomodoro</button>
        <button @click="setShortBreak()">Short Break</button>
        <button @click="setLongBreak()">Long Break</button>
      </div>
      <div id="timer">{{ totalTime }}</div>
      <div>
      <button v-if="paused" @click="startTimer()">Start</button>
      <button v-if="!paused" @click="stopTimer">Stop</button>
      </div>
      <div id="taskList">
        <ul>
          <tasks
          v-for="task in tasks"
          :key="task.id"
          :id="task.id"
          :name="task.name"
          :estPom="task.estPom"
          :isActive="task.isActive"
          ></tasks>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [{
        id: "first",
        name: 'Finish Vue App',
        estPom: 9,
        isActive: false
        },
        {
        id: "second",
        name: 'Eat some tasty food',
        estPom: 1,
        isActive: false
        },
      ],
      timer: null,
      resetTimer: false,
      totalTime: (25 * 60),
      paused: true,
      playButton: false
    }
  },
  methods: {
    setPomodoro() {
      this.totalTime = (25 * 60);
    },
    setShortBreak() {
      this.totalTime = (5 * 60);
    },
    setLongBreak() {
      this.totalTime = (15 * 60);
    },
    startTimer() {
      this.paused = !this.paused
      if(!this.paused) {
        this.timer = setInterval(() => this.countdown(),1000);
      } else {
        clearInterval(this.timer);
        this.playButton = true;
      }
    },
    countdown() {
      this.totalTime = this.totalTime - 1;
    },
    stopTimer() {
      this.paused = true;
      clearInterval(this.timer)
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
