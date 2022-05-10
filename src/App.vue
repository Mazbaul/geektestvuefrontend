<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div id="right-panel" class="right-panel">

            <!-- Header-->
            <header id="header" class="header">
                <div class="top-left">
                </div>
                <div class="top-right">
                    <div class="header-menu">
                        <div class="header-left">

                        </div>

                        <div class="user-area dropdown float-right">
                            <div style="line-height: 50px;height: 50px;display: flex;align-items: center;">

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
                      <li class="menu-title">Payment System</li>

                      <li >
                          <router-link  to="/mostconversion">Most Conversion</router-link>
                      </li>
                      <li >
                          <router-link  to="/usertransactioninfo">User Transaction Info</router-link>
                      </li>
                      <li >
                            <router-link  to="/sendmoney">Send Money</router-link>
                      </li>
                  </ul>
              </div><!-- /.navbar-collapse -->
          </nav>
      </aside><!-- /#left-panel -->
      <div :style="{ marginLeft: '5%',minHeight: '100vh',marginRight: '5%',marginTop: '5%'}" class="fcontent">

        <div class="clearfix">

          <RouterView />
        </div>

                  <!-- <footer class="site-footer">
                      <div class="footer-inner">
                          <div class="row">
                              <div class="col-sm-6">
                                  Copyright &copy;  <a href="https://www.geekpicker.com/" target="_blank">Geekpicker</a>
                              </div>
                              <div class="col-sm-6 text-right">
                                  Developed by <a href="https://github.com/mazbaul" target="_blank">Mazbaul Alam</a>
                              </div>
                          </div>
                      </div>
                  </footer> -->

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
@import '@/assets/base.css';


#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

</style>
