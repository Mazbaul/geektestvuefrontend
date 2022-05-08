<script setup>
</script>

<template>
  <div>
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
    <div class="main-menu">
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
      <div :style="{ marginLeft: '300px',minHeight: '100vh'}" class="fcontent">
        <router-view :key="$route.path"></router-view>
        <div class="clearfix"></div>

                  <footer class="site-footer">
                      <div class="footer-inner bg-white">
                          <div class="row">
                              <div class="col-sm-6">
                                  Copyright &copy;  <a href="https://www.geekpicker.com/" target="_blank">Geekpicker</a>
                              </div>
                              <div class="col-sm-6 text-right">
                                  Developed by <a href="https://github.com/mazbaul" target="_blank">Mazbaul Alam</a>
                              </div>
                          </div>
                      </div>
                  </footer>

              </div><!-- /#right-panel -->
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Frontend",
}
</script>

<style scoped>

</style>
