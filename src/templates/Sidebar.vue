<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Menu</div>
          <router-link class="nav-link" to="/frontend/">
            <div class="sb-nav-link-icon">
              <i class="fas fa-circle"></i>
            </div>
            Dashboard
          </router-link>
          <router-link class="nav-link" to="/frontend/pages">
            <div class="sb-nav-link-icon">
              <i class="fas fa-circle"></i>
            </div>
            Pages
          </router-link>
          <div class="sb-sidenav-menu-heading">Menu Pages Sub</div>
          <a
            class="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-circle"></i>
            </div>
            Pages
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapsePages"
            aria-labelledby="headingTwo"
            data-bs-parent="#sidenavAccordion"
          >
            <nav
              class="sb-sidenav-menu-nested nav accordion"
              id="sidenavAccordionPages"
            >
              <a
                class="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#pagesCollapseAuth"
                aria-expanded="false"
                aria-controls="pagesCollapseAuth"
              >
                Sub Pages
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="pagesCollapseAuth"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordionPages"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="#">List</a>
                  <a class="nav-link" href="#">List</a>
                </nav>
              </div>
            </nav>
          </div>
          <div class="sb-sidenav-menu-heading">Menu Pages List</div>
          <a
            class="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div class="sb-nav-link-icon"><i class="fas fa-circle"></i></div>
            Pages
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav">
              <a class="nav-link" href="#">List</a>
              <a class="nav-link" href="#">List</a>
            </nav>
          </div>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Your Username
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>