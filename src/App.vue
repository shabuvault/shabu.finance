<template>
    <div>
        <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: transparent;">
      <!-- Logo -->
      <span class="ml-5">
        <a class="navbar-brand" href="#">Shabu</a>
      </span>

      <div class="navbar-collapse" id="navbarNav">

        <!-- Nav Item Center -->
        <ul class="navbar-nav  flex-row ml-auto justify-content-between mx-auto ">
          <li class="nav-item">
            <div class="dropdown">
              <router-link to="/opensale" class="nav-link">
              <img class="icon-food" src="@/assets/025-hot-pot.png"></router-link>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item">PUBLIC SALE</span>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <router-link to="/whitelist" class="nav-link">
              <img class="icon-food" src="@/assets/020-dumpling-2.png"></router-link>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item">Whitelist</span>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <div class="dropdown">
              <router-link to="/" class="nav-link">
              <img class="icon-food" src="@/assets/001-tempura.png"></router-link>
              <!--<a class="nav-link" href="#"><img class="icon-food"src="@/assets/001-tempura.png"> <span class="sr-only">(current)</span></a> -->
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item">Home</span>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <router-link to="/stake" class="nav-link">
              <img class="icon-food" src="@/assets/041-sushi-1.png"></router-link>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item">Stake</span>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <router-link to="/gov" class="nav-link">
              <img class="icon-food" src="@/assets/005-chef-1.png"></router-link>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item">Governance</span>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a class="nav-link" href="https://medium.com/@shabuvault" target="_blank"><img class="icon-food" src="@/assets/medium.png"></a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item">Medium</span>
              </div>
            </div>
          </li>


          <li class="nav-item">
            <div class="dropdown">
              <a class="nav-link" href="//t.me/shabuvault" target="_blank"><img class="icon-food" src="@/assets/telegram.png"></a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item">Telegram</span>
              </div>
            </div>
          </li>
        </ul >
        <ul class="navbar-nav">
        <li class="nav-item flex-row mx-auto justify-content">
          <button class="btn" data-toggle="modal" data-target="#exampleModalCenter"
            style="background:#03254c;color: white;border: none;border-radius: 4px;"><span v-if="walletStatus == 'connected'">{{ address.substring(0, 12) }}</span><span v-else>Connect Wallet</span></button>
        </li>
        </ul>
      </div>
    </nav>
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
    <router-view/>
    </div>
</template>
<style>
  @media (max-width: 992px) {  
     .navbar-brand{
       display: none;
     }
  }

</style>
<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import {} from 'vue-router'
  import Web3 from 'web3'
  export default {
    name: 'App',
    data: function () {
      return {
        walletStatus: 'pending',
        address: null,
        client: null,
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
                    that.client = new Web3(window.web3.currentProvider)
                })
                .catch(() => {
                    
                    that.walletStatus = 'rejected'
                    
                });
            },
    }
  }
</script>