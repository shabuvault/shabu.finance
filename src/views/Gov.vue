<template>
  <div >


    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title mx-auto" id="exampleModalLongTitle">Wallet</h5>
            <!--
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        -->
          </div>
          <div class="modal-body mx-auto">
            <center v-if="walletStatus == 'connected'">
                <h6>Connected With</h6>
                <h5>{{ address }}</h5>
                <button class="btn btn-danger" @click="walletStatus = 'pending'">Logout</button>
            </center>
            <center v-if="walletStatus == 'connecting'">
                  <img style="width: 128px;height: 128px;"  src="@/assets/loading.gif">
                  <h6>Waiting Approval</h6>
            </center>
            <button class="btn btn-outline-primary" v-if="walletStatus == 'pending'" @click="metamask">Connect With Metamask <img style="width: 64px;height: 64px;cursor: pointer;" src="@/assets/metamas.png"></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Card -->

    <div class="card mx-auto mt-5">

      <!-- Header -->
      <div class="card-header">
        <div class="mt-2">
          <img style=" width: 50px;
          height: 50px;" src="@/assets/005-chef-1.png">
          <span class="HeaderFont"> Governance </span>
        </div>
      </div>

      <!-- Content -->
          <div style="background-color: blanchedalmond;background-size: cover;" class="card-body">
        <!---->
        <div class="row-sm content-font">
          Soon <br/>
          <br/>
        </div>


        
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import {} from 'vue-router'
  export default {
    name: 'Home',
    data: function () {
      return {
        walletStatus: 'pending',
        address: null,
      }
    },
    methods: {
      metamask: function () {
                this.walletStatus = 'connecting'
                let that = this
                window.ethereum.request({ method: 'eth_requestAccounts' })
                .then((address) => {
                    that.walletStatus = 'connected'
                    that.address = address[0]
                   
                })
                .catch(() => {
                    
                    that.walletStatus = 'rejected'
                    
                });
            },
    }
  }
</script>