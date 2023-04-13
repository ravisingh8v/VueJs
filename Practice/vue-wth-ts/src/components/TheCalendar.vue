<template>
  <section class="h-100 d-flex flex-column">
    <header class="p-3 shadow-sm d-flex justify-content-between">
      <div class="header_left_content d-flex align-items-center">
        <!-- hamburger menu icon  -->
        <div class="d-flex align-items-center">
          <span
            class="material-symbols-outlined text-dark text-opacity-75 fw-normal"
          >
            menu
          </span>
        </div>
        <!-- brand logo here  -->
        <div class="fw-semibold fs-4 mx-3">
          <span class="text-primary">G</span><span class="text-danger">o</span
          ><span class="text-warning">o</span><span class="text-primary">g</span
          ><span class="text-success">l</span><span class="text-danger">e</span
          ><span class="mx-2 text-dark text-opacity-75 fw-normal"
            >Calendar</span
          >
        </div>
        <!-- additional action button  -->
        <div
          class="d-flex align-items-center text-dark text-opacity-75 fw-normal"
        >
          <RouterLink
            class="text-dark text-opacity-75 border p-1 rounded me-3 text-decoration-none"
            to="/calendar"
            @click="refreshDate"
            >Today</RouterLink
          >
          <button
            class="text-dark text-opacity-75 btn material-symbols-outlined fs-5"
            @click="prev"
          >
            arrow_back_ios
          </button>
          <button
            class="text-dark text-opacity-75 btn material-symbols-outlined fs-5"
            @click="next"
          >
            arrow_forward_ios
          </button>
          <span class="text-dark text-opacity-75 fs-5 ms-3">{{
            currentMonthAndYear
          }}</span>
        </div>
      </div>
      <!-- header right side content  -->
      <div class="d-flex align-items-center">
        <!-- action icons -->
        <div class="d-flex align-items-center text-">
          <span class="material-symbols-outlined me-3"> search </span>
          <span class="material-symbols-outlined me-3"> help </span>
          <span class="material-symbols-outlined me-3"> settings </span>
        </div>
        <div>
          <select name="" class="form-select outline-none" id="">
            <option value="" class="bg-white border rounded p-4" selected>
              Week
            </option>
            <option value="" class="bg-white border rounded">Month</option>
          </select>
        </div>
      </div>
    </header>
    <main class="border pt-4 d-flex flex-column flex-grow-1 overflow-hidden">
      <!-- <div class="pt-4 h-100 d-flex flex-column"> -->
      <!-- action bar  -->
      <div
        class="mx-3 d-flex justify-content-between align-items-center text-dark text-opacity-75 fw-normal"
      >
        <div>
          <h3>{{ currentMonthAndYear }}</h3>
        </div>
        <!-- button for changing months  -->
        <div class="">
          <button @click="prev" class="text-dark text-opacity-75 btn fs-1 mx-2">
            &lt;
          </button>
          <button @click="next" class="text-dark text-opacity-75 btn fs-1 mx-2">
            &gt;
          </button>
        </div>
      </div>
      <section
        class="mt-3 d-flex flex-column flex-grow-1 overflow-auto position-relative border"
      >
        <!-- weeks -->
        <div class="position-sticky top-0 w-100">
          <ul class="weeks row g-0">
            <li
              class="col-md-1 text-center py-3 bg-primary text-white border-bottom border-end"
              v-for="week in weeks"
              :key="week"
            >
              {{ week }}
            </li>
          </ul>
        </div>
        <!-- days -->
        <div class="d-flex flex-column flex-grow-1">
          <ul
            class="days weeks row g-0 justify-content-start align-items-start h-100"
          >
            <!-- :class="{ 'h-100': !(lastDateOfMonth.length <= 28) }" -->
            <li
              class="col-md-1 text-center py-5 bg-light text-secondary text-opacity-50 border-bottom border-end"
              v-for="lastDate in lastDateOfLastMonth"
              :key="lastDate"
            >
              {{ lastDate }}
            </li>
            <li
              class="col-md-1 text-center py-5 border-bottom border-end"
              v-for="date in lastDateOfMonth"
              :key="date"
              :class="{
                'bg-primary text-white':
                  currentDate === date &&
                  currentMonth === activeMonth &&
                  currentYear === activeYear,
              }"
            >
              {{ date }}
            </li>
          </ul>
        </div>
      </section>
      <!-- </div> -->
    </main>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  setup() {
    return {};
  },
  name: "TheCalendar",
  data() {
    return {
      currentMonthAndYear: "",
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),

      // to highlight the current date
      activeMonth: new Date().getMonth(),
      activeYear: new Date().getFullYear(),

      lastDateOfMonth: [0],
      lastDateOfLastMonth: [0],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    showingCalendar() {
      console.log(this.currentDate);

      // getting current month and year here for showing in a Dom
      this.currentMonthAndYear = `${this.months[this.currentMonth]} - ${
        this.currentYear
      }`;

      // first day of month
      let firstDayOfMonth = new Date(
        this.currentYear,
        this.currentMonth,
        1
      ).getDay();

      // for getting last day of month
      let lastDateOfMonth = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      ).getDate();

      // last date of las month
      let lastDateOfLastMonth = new Date(
        this.currentYear,
        this.currentMonth,
        0
      ).getDate();

      // getting here previous date to show in active month
      let previousMonthDates = [];
      for (let i = firstDayOfMonth; i > 0; i--) {
        previousMonthDates.unshift(lastDateOfLastMonth);
        lastDateOfLastMonth--;
      }
      this.lastDateOfLastMonth = previousMonthDates;

      // looping after getting months last day
      let dates = [];
      for (let i = 1; i <= lastDateOfMonth; i++) {
        dates.push(i);
      }
      this.lastDateOfMonth = dates;
    },
    prev() {
      if (this.currentMonth <= 0) {
        this.currentMonth = 12;
        this.currentYear -= 1;
      }
      this.currentMonth = this.currentMonth - 1;
      this.showingCalendar();
      this.$router.push("/calendar/" + this.currentMonthAndYear);
    },
    next() {
      if (this.currentMonth >= 11) {
        this.currentMonth = -1;
        this.currentYear += 1;
      }
      this.currentMonth = this.currentMonth + 1;
      this.showingCalendar();
      this.$router.push("/calendar/" + this.currentMonthAndYear);
    },
    // redirect to the current date
    refreshDate() {
      this.currentYear = new Date().getFullYear();
      this.currentMonth = new Date().getMonth();
      this.showingCalendar();
    },
  },
  created() {
    this.showingCalendar();
  },
  components: { RouterLink },
});
</script>
