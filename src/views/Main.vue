<template>
  <div>
    <div>
      <!-- Navbar -->
      <Navbar />

      <div id="layoutSidenav">
        <!-- Sidebar -->
        <Sidebar />
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <router-view></router-view>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../templates/Footer.vue";
import Navbar from "../templates/Navbar";
import Sidebar from "../templates/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>

<style>
</style>