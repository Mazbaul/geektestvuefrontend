<template>
  <div id="right-panel" class="right-panel">

          <!-- Header-->
          <header id="header" class="header">
              <div class="top-left">
                  <div class="navbar-header">
                      <a class="navbar-brand" href="./"><img src="" alt="Logo"></a>
                      <a class="navbar-brand hidden" href="./"><img src="" alt="Logo"></a>
                      <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
                  </div>
              </div>
              <div class="top-right">
                  <div class="header-menu">
                      <div class="header-left">

                      </div>

                      <div class="user-area dropdown float-right">
                          <div style="line-height: 50px;height: 50px;display: flex;align-items: center;">
                              <b>Interview Task - Admin Panel</b>
                          </div>
                      </div>
                  </div>
              </div>
          </header><!-- /header -->
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "Header",
  data() {
    return {
      scrolling: true,
      cartOpen: false,
      loginModel: false,
      search:'',
    }
  },
  created() {
  },
  methods: {

  },
  watch: {

  },
  computed: {

  },

}
</script>

<style scoped>

}
</style>
