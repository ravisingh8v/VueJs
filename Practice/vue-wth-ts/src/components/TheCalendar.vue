<template>
  <section>
    <header class="p-3 border shadow-sm d-flex justify-content-between">
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
          <span class="border p-1 rounded me-3">Today</span>
          <span class="material-symbols-outlined fs-5"> arrow_back_ios </span>
          <span class="material-symbols-outlined fs-5">
            arrow_forward_ios
          </span>
          <span class="text-dark text-opacity-75 fs-5 ms-3">April 2023</span>
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
    <main></main>
  </section>
</template>
