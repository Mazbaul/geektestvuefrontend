<template>

  <!-- Left Panel -->

      <aside id="left-panel" class="left-panel">
          <nav class="navbar navbar-expand-sm navbar-default">

              <div id="main-menu" class="main-menu collapse navbar-collapse">
                  <ul class="nav navbar-nav">
                      <li class="menu-title">P2P wallet (Pay)</li>

                      <li >
                          <a href="#"><i class="menu-icon fa fa-exchange"></i>Most Conversion</a>
                      </li>
                      <li >
                          <a href="#"><i class="menu-icon fa fa-money"></i>User Transaction Info</a>
                      </li>
                      <li >
                          <a href="#"><i class="menu-icon fa fa-tasks"></i>All Transaction History</a>
                      </li>
                  </ul>
              </div><!-- /.navbar-collapse -->
          </nav>
      </aside><!-- /#left-panel -->

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {
      openKeys: [],
      defaultKey: [],
    };
  },
  methods: {

  },
  created() {

  },
  computed: {
  },
  watch: {

  }
}
</script>

<style scoped>
.top {
  top: 61px;
  transition: all 0.5s;
}


@media only screen and (max-width: 770px) {
  .top {
    top: 90px;
    transition: all 0.5s;
  }

  .customStyle {
    width: 0 !important;
    min-width: 0 !important;
  }
  .ant-layout-sider {
   background:white !important;
  }
}
</style>
