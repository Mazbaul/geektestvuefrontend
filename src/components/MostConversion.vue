<template>
  <div class="content">
          <div class="animated fadeIn">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="card">
                          <div class="card-header">
                              <strong class="card-title">Most Conversion</strong>
                          </div>
                          <div class="card-body">
                              <div>
                                  <div class="card-body">
                                      <div class="card-title">
                                          <h3 class="text-center">User who used most currency conversion</h3>
                                      </div>
                                      <hr>
                                      <div class="form-group text-center">
                                          <ul class="list-inline">
                                              <li class="list-inline-item"><i class="fa fa-cc-visa fa-2x"></i></li>
                                              <li class="list-inline-item"><i class="fa fa-cc-mastercard fa-2x"></i></li>
                                              <li class="list-inline-item"><i class="fa fa-cc-amex fa-2x"></i></li>
                                              <li class="list-inline-item"><i class="fa fa-cc-discover fa-2x"></i></li>
                                          </ul>
                                      </div>
                                      <div v-if="isLoaded == true" class="row">
                                          <div class="col-12 col-md-6 offset-md-3">
                                              <table class="table table-bordered">
                                                  <tbody>
                                                      <tr>
                                                          <td style="width:200px;">Name</td>
                                                          <td>{{ this.userData.mostConversionUser.name}}</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Email</td>
                                                          <td>{{ this.userData.mostConversionUser.email}}</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Current Wallet</td>
                                                          <td>{{ this.userData.mostConversionUser.wallet}}</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Number of Conversion</td>
                                                          <td>{{this.userData.mostConversion.conversionQuantity}}</td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div> <!-- .card -->
                  </div><!--/.col-->
              </div>
          </div><!-- .animated -->
      </div><!-- .content -->
</template>
<script >
export default {
  name: "MostConversion",
  data() {
    return {
      userData:{},
      isLoaded:false
    };
  },
  methods:{
    getData:function(){
      const th = this
      this.axios.get('http://127.0.0.1:8000/api/most-conversion').then(response => (
        th.isLoaded=true,
        th.userData = response.data

      ))
    }
  },
  mounted(){
     this.getData();
   }
}
</script>
<style scoped>

</style>
