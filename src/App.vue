<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="#page-top">Pomodoro App</a>
        <button
          class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Main App</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="portfolio">
      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column" id="pomodoro">
          <div id="pombuttons">
            <button
              class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              @click="setPomodoro()"
            >
              Pomodoro
            </button>
            <button
              class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              @click="setShortBreak()"
            >
              Short Break
            </button>
            <button
              class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              @click="setLongBreak()"
            >
              Long Break
            </button>
          </div>
          <div id="timer">{{ minutes }}:{{ seconds }}</div>
          <div>
            <button
              class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              v-if="paused"
              @click="startTimer()"
            >
              Start
            </button>
            <button
              class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              v-if="!paused"
              @click="stopTimer"
            >
              Stop
            </button>
          </div>

          <div class="container">
            <!-- Portfolio Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Task List</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
              <div class="divider-custom-line"></div>
            </div>
            <!-- Portfolio Grid Items-->
            <div class="row justify-content-center">
              <!-- Portfolio Item 1-->
              <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                  <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white">
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
                  <new-task @add-task="addTask"></new-task>
                  <!-- <img class="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." /> -->
                </div>
              </div>
            </div>
          </div>
          <div id="taskList"></div>
        </div>
      </header>
    </section>
    <!-- Contact section: -->
    <section class="page-section" id="contact">
      <div class="container">
        <!-- Contact Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Contact Section Form-->
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xl-7">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label for="name">Full name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                />
                <label for="email">Email address</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
              </div>
              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                />
                <label for="phone">Phone number</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
              </div>
              <!-- Message input-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style="height: 10rem"
                  data-sb-validations="required"
                ></textarea>
                <label for="message">Message</label>
                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">Error sending message!</div>
              </div>
              <!-- Submit Button-->
              <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: "first",
          name: "Finish Vue App",
          estPom: 9,
          isActive: false,
        },
        {
          id: "second",
          name: "Eat some tasty food",
          estPom: 1,
          isActive: false,
        },
      ],
      timer: null,
      resetTimer: false,
      totalTime: 25 * 60,
      paused: true,
      playButton: false,
    };
  },
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return minutes;
    },
    seconds: function() {
      const seconds = this.totalTime % 60
      if (seconds == 0) {
        return '00';
      } else {
        return seconds;
      }
    } 
  },
  methods: {
    setPomodoro() {
      this.totalTime = 25 * 60;
    },
    setShortBreak() {
      this.totalTime = 5 * 60;
    },
    setLongBreak() {
      this.totalTime = 15 * 60;
    },
    startTimer() {
      this.paused = !this.paused;
      if (!this.paused) {
        this.timer = setInterval(() => this.countdown(), 1000);
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
      clearInterval(this.timer);
    },
    addTask(name, poms) {
      const newTask = {
        id: new Date().toISOString(),
        name: name,
        estPom: poms,
        isActive: false,
      };
      this.tasks.push(newTask);
    },
  },
};
</script>

<style></style>
