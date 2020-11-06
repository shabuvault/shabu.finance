<template>
    <div >



    <!-- Card -->

    <div style="height:40%;" class="card mx-auto mt-5">

      <!-- Header -->
      <div class="card-header">
        <div class="mt-2">
          <img style=" width: 50px;
          height: 50px;" src="@/assets/025-hot-pot.png">
          <span class="HeaderFont"> Open Sale </span>
        </div>
      </div>

      <!-- Content -->
          <div style="background-color: blanchedalmond;background-size: cover;" class="card-body">
        <!---->
        <div class="row-sm">
            <p class="content-font">10:00 PM UTC 6th Nov - <br/> 03:00 AM UTC 7th Nov</p>
            <label>Input ETH</label>
           <p class="card-text"><input  style="width:50%;" class="form-control mx-auto" v-model="eth"  placeholder="Input ETH "></p>
            <div class="row">
  <div class="col">
 <p>Current ETH: {{ collectedETH }}</p>
 <p>Total sale: 1000 $SHABU</p>
</div>
<div class="col">
 <p><button style="margin-top:10px" type="button" class="btn btn-success btn-custom"  @click="deposit">SUBMIT</button></p>
</div>
</div>
            <div class="progress d-none">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const OPENSALE_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Token","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectedETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"contributionCheck","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"endPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reclaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"whitelistCheck","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
export default {
    name: 'Opensale',
    data: function () {
      return {
        invited: false,
        collectedETH: 0,
        contribution: 0,
        contract: null,
        eth: 0
      }
    },
    methods: {
      refresh: function () {
          
          let parent = this.$parent.$data
          let that = this
          if(parent.address == null) return;
          this.contract = new parent.client.eth.Contract(OPENSALE_ABI, "0x916E9919345395f758182d485Be4B8B61D27CF28")

          this.contract.methods.collectedETH().call().then((data) => {
              that.collectedETH = parent.client.utils.fromWei(data)
          })
          this.contract.methods.contributionCheck(parent.address).call().then((data) => {
              that.contribution = parent.client.utils.fromWei((parseFloat(data) / 5).toString())
          })
      },
      deposit: function () {
        if(this.contract != null){
            this.contract.methods.deposit().send({
                from: this.$parent.$data.address,
                value: this.$parent.$data.client.utils.toWei(this.eth)
            })
        }
      }
    },
    mounted: function () {
        setInterval(this.refresh, 1000)
    }
  }
</script>