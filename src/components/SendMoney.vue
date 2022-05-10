<template>
<div class="content">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Send Money</strong>
                        </div>
                        <div class="card-body">
                            <div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 col-md-8 offset-md-3">
                                                <div class="row form-group">
                                                    <div class="col-3" style="padding-right: 0;">
                                                      <label for="from">From:</label>
                                                        <select v-model="from" name="from" id="from" class="form-control">
                                                            <option value="">Please select user</option>
                                                            <option v-for="(user, index) in userData.allUsers" :key="index" :value="user.id" >{{user.name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-3" style="padding-right: 0;">
                                                      <label for="to">To:</label>
                                                        <select v-model="to" name="to" id="to" class="form-control">
                                                            <option value="">Please select user</option>
                                                            <option v-for="(user, index) in userData.allUsers" :key="index" :value="user.id" >{{user.name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-3" style="padding-right: 0;">
                                                      <label for="amount">Amount:</label>
                                                        <input type="text" name="amount" class="form-control" v-model="amount">
                                                    </div>

                                                    <div class="col-3" style="padding-top: 3%;">
                                                        <button type="submit" @click="this.sendmoney(from,to,amount)" class="btn btn-info pull-right" style="width:100%;"><i class="fa fa-search"></i>&nbsp; Send</button>
                                                    </div>
                                                </div>
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
      name: "SendMoney",
      data() {
        return {
          userData:{},
          from:'',
          to:'',
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
        },
        sendmoney:function(from,to,amount){
          const th = this
          this.axios.post('http://127.0.0.1:8000/api/send-money-without-auth?sender_id='+from+'&receiver_id='+to+'&amount='+amount).then(response => (
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
