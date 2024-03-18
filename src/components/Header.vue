<template>
  <nav
    class="navbar navbar-expand-md navbar-light sticky-top"
    style="background-color: #e3f2fd"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="..\assets\3885d324-9ba3-4dbd-bde3-7d81cd0d0322.webp"
          alt="Logo"
          class="rounded"
          style="height: 100px"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <div class="nav-link">Home</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">About Us</div>
          </li>
        </ul>
        <div class="text-center">
          <button class="btn btn-outline-info m-1 rounded">FR</button>
          <button class="btn btn-outline-info m-1 rounded">EN</button>
        </div>
        <div class="text-center">
          <button class="btn m-1 rounded">
            <i class="bi bi-box-arrow-right" style="font-size: 25px"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-image: linear-gradient(
    to right,
    green,
    white,
    red,
    green,
    white,
    red,
    green,
    white,
    red
  );
}
</style>
