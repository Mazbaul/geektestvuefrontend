<template>
  <div class="clearfix"></div>

            <footer class="site-footer">
                <div class="footer-inner bg-white">
                    <div class="row">
                        <div class="col-sm-6">
                            Copyright &copy; {{date('Y')}} <a href="https://www.geekpicker.com/" target="_blank">Geekpicker</a>
                        </div>
                        <div class="col-sm-6 text-right">
                            Developed by <a href="https://github.com/sumondeb" target="_blank">Sumon Deb</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div><!-- /#right-panel -->
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: "Footer",
  computed: {

  },
}
</script>

<style scoped>
</style>
