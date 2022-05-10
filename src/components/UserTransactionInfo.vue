<template>
<div class="content">
        <div class="animated fadeIn">

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">User Transaction Info</strong>
                        </div>
                        <div class="card-body">
                            <div>
                                <div class="card-body">
                                    <div class="card-title">
                                        <h3 class="text-center">Transaction info for a particular user</h3>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-12 col-md-6 offset-md-3">
                                                <div class="row form-group">
                                                    <div class="col-12" style="padding-right: 0;">
                                                      <label for="user">User:</label>
                                                        <select v-model="user" @change="this.getData(user)" name="user" id="user" class="form-control" >
                                                            <option value="">Please select user</option>
                                                            <option v-for="(user, index) in userData.allUsers" :key="index" :value="user.id" >{{user.name}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <br>
                                            <table v-if="isLoaded==true" class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td style="width:300px;">Name</td>
                                                        <td>{{userData.userInfo.name}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email</td>
                                                        <td>{{userData.userInfo.email}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current Wallet</td>
                                                        <td>{{userData.userInfo.wallet}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Converted Amount by Sending</td>
                                                        <td id="sendingConvertedAmount">{{userData.sendingConvertedAmount}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Converted Amount by Receiving</td>
                                                        <td id="receivingConvertedAmount">{{userData.receivingConvertedAmount}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Converted Amount</td>
                                                        <td id="totalConvertedAmount">{{userData.sendingConvertedAmount+userData.receivingConvertedAmount}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Third Highest Transaction Amount</td>
                                                        <td id="thirdHighestTransaction" v-if="typeof userData.thirdHighestTransaction !== 'undefined'">{{userData.thirdHighestTransaction}}</td>
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
      name: "UserTransactionInfo",
      data() {
        return {
          userData:{},
          user:'',
          isLoaded:false
        };
      },
      methods:{
        getData:function(user=0){
          const th = this
          this.axios.get('http://127.0.0.1:8000/api/transaction-info?user='+user).then(response => (
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
