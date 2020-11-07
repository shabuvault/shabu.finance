<template>
 <div class="overflow-hidden">
 <div class="card side">
  <div class="card-header mobile" style="height:12%;">
        <div >
          <span class="Fontstake"> Pool </span>
        </div>
      </div>
  <div style="margin-left:30px;" class="row mt-3" v-for="(pool, index) in pools" :key="index">
<button class="btn btn-warning btn-pool" @click="selectedPool = pool">{{ pool.name }}</button>
  <span class="ml-2 " style="margin-top:15px;" >(APY): {{ 3600 * pool.rewardRate * 24 * 365 * shabuPrice / (pool.totalSupply * (totalWETH / totalShabu)) }}% <a :href="`https://etherscan.io/address/${pool.contract}`" target="_blank"> Contract</a></span> 
  </div>

   <div class="card-header mobile" style="border-radius:0;margin-top:25px;height:6%;">
        <div style="margin-top:-10px;">
          <span class="fontmini">Uniswap</span>
        </div>
      </div>
      <div class="card-body" style="margin-top:-10px;">
        Shabu Price {{ (totalWETH / totalShabu).toFixed(3) }} ETH
        <br/>
        <br/>
<a href="https://www.dextools.io/app/uniswap/pair-explorer/0x17827d961b5fbfbb69fd74bead854fe5602621ae">🍤 GET SHABU ON UNISWAP</a>
<br>
<a href="https://www.dextools.io/app/uniswap/pair-explorer/0x17827d961b5fbfbb69fd74bead854fe5602621ae">🍥 GET SHABU/ETH ON UNISWAP</a>
<br>
🍜 GET WBTC ON UNISWAP
<br>
🍚 GET WETH ON UNISWAP
      </div>
</div>

 <div class="row mt-5">
  <div class="col-sm-6 mx-auto">
    <div class="card stake mx-auto">
       <div class="card-header mobile">
        <div class="headerclass">
          <span class="HeaderFont"> Stake </span>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ selectedPool.name }}</h5>
        <p class="card-text"><input class="form-control" v-model="tokenAmount"  placeholder="Input Stake/ claim/ unstake "></p>
        <p style=" margin-top: -10px;margin-bottom: 2px;text-align:center;font-size: 12px;">STEP: ApproveAll -> Stake-> Earning</p> 
        <p><button type="button" style="margin-right:10px;" class="btn btn-success btn-custom" @click="approve">Approve</button>
        <button type="button" style="margin-right:10px;" class="btn btn-danger btn-custom" @click="stake">Stake</button>
        <button type="button" style="margin-right:10px;" class="btn btn-info btn-custom" @click="claim">Claim</button>
        <button type="button" class="btn btn-primary btn-custom">Unstake</button>
        </p>
      
<div class="row">
  <div class="col">
<p class="margin-text">Total Staked: {{ (this.$parent.$data.client == null ? 0 : this.$parent.$data.client.utils.fromWei(selectedPool.totalSupply)) }} </p> 
<p class="margin-text">Halving Time: 1970-01-01 07:00:00</p> 
<p class="margin-text">Your Staked: {{ selectedPool.balance }} </p> 
<p class="margin-text">Current APY: {{ 3600 * selectedPool.rewardRate * 24 * 365 * shabuPrice / (selectedPool.totalSupply * shabuPrice) }}%%</p> 
</div>
<div class="col">
<p class="margin-text-right">Claimable: {{ selectedPool.rewardAmount }} </p> 
<p class="margin-text-right">Shabu Max supply = 39600</p> 
<p class="margin-text-right">This pool will distrbute {{ selectedPool.initialReward * 2 }} </p> 
<p class="margin-text-right">Risk: {{ selectedPool.risk }}</p> 
<p class="margin-text-right">Reward: {{ selectedPool.reward }}</p> 
</div>
</div>
      </div>
    </div>
  </div>
 
</div>
 <!-- Card Mobile -->
  <div class="card mobile mx-auto">
  <div class="card-header mobile" style="height:5%;">
        <div class="headerclass">
          <span class="Fontstake mobile"> Pool </span>
        </div>
      </div>
  <div style="margin-left:30px;" class="row mt-3" v-for="(pool, index) in pools" :key="index">
  <button  style="font-size:15px;" class="btn btn-warning" @click="selectedPool = pool">{{ pool.name }}</button>
  <span class="ml-2 " style="margin-top:10px;" >(APY): % <a :href="`https://etherscan.io/address/${pool.contract}`">Contract</a></span> 
  </div>

   <div class="card-header mobile" style="border-radius:0;margin-top:10px;height:6%;">
        <div style="margin-top:-10px;">
          <span class="fontmini">Uniswap</span>
        </div>
      </div>
      <div class="card-body" style="margin-top:-10px;">
        Shabu Price {{ totalWETH / totalShabu }} ETH
🍤 GET SHABU ON UNISWAP
<br>
🍥 GET SHABU/ETH ON UNISWAP
<br>
🍜 GET WBTC ON UNISWAP
<br>
🍚 GET WETH ON UNISWAP
      </div>
</div>

</div>
</template>
<style >
.Fontstake{
    color: black;
    /* Will override color (regardless of order) */
    /*background: rgb(221, 226, 223);*/
    -webkit-text-fill-color: white;
    /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size:xx-large;
}
.fontmini{
    color: black;
    /* Will override color (regardless of order) */
    /*background: rgb(221, 226, 223);*/
    -webkit-text-fill-color: white;
    /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size:larger;
}
.card.stake{
 width:500px;
}
.card.side {
  position: fixed;
  z-index: 1;
  top: 90px;
  width:25%; 
  height:83%; 
  left: 20px;
  overflow-x: hidden;
  padding: 8px 0;
}
.card.side button {
  margin-top: 10px;
  display: block;
  width: 40%;
}
.margin-text{
  margin: 0px;
  font-size: 12px;
  text-align: left;
}
.margin-text-right{
  text-align: right;
  font-size: 12px;
  margin: 0px;
}
.card.mobile{
  display: none;
}
@media (max-width: 992px) { 
.card.mobile{
  display: block;
  top: -40px;
  height: 17rem;
  font-size: 11px;
}
  .card.side {
display: none;
}
.card.stake{
 width:320px;
 height: 95%;
 top: -40px;
}
.margin-text{
  margin: 0px;
  font-size: 10px;
  text-align: left;
}
.margin-text-right{
  text-align: right;
  font-size: 10px;
  margin: 0px;
}
.Fontstake{
    font-size:large;
}
.card-header.mobile {
   height: 15px;
  }
.HeaderFont{
  margin-top:10px ;
  font-size: large;
}
.headerclass{
  margin-top:-10px;
}
}
</style>
<script>
  const POOL_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Halving","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Start","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"changeLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devDistributeDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devDistributeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFinishTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getRewardsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"halvingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"haveStarted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastDistributeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRewardTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerLPToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"shabuAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startFarming","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"testMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAddr","type":"address"}],"name":"transferDevAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  const SHABU_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getLockStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isInWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"minters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeFromWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setTaxDestination","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setTaxer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxDestination","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  const ERC_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import {} from 'vue-router'
  export default {
    name: 'Stake',
    data: function () {
      return {
        selectedPool: {},
        shabuPrice: 0.5,
        totalWETH : 0,
        totalShabu: 0,
        shabu: null,
        tokenAmount: 0,
        pools: [
          {
            'name': 'SHABU',
            'apy': 0,
            'contract': '0xB0dC1095D9A21Da8D391017F9c7CcB31564F309B',
            'need': '0xDA8DD97b9C0a4f4691e8C88Fe47c740b70D5A449',
            'initialReward': 5000,
            'risk': 'High',
            'reward': 'High',
            'rewardRate': 0,
            'totalSupply': 0
          },
          {
            'name': 'SHABU/ETH UNISWAP LP',
            'apy': 0,
            'contract': '0xbA4f7C7cD24384247e021cA7F4256007bbA253FA',
            'need': '0x17827d961B5fbFbb69FD74bEaD854FE5602621Ae',
            'initialReward': 10750,
            'risk': 'High',
            'reward': 'High',
            'rewardRate': 0,
            'totalSupply': 0
          },
          {
            'name': 'WETH',
            'apy': 0,
            'contract': '0x198E5E89bdE49c0B8df7a741b2e0F40815dFcecF',
            'need': '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            'initialReward': 375,
            'risk': 'Medium',
            'reward': 'Medium',
            'rewardRate': 0,
            'totalSupply': 0
          },
          {
            'name': 'WBTC',
            'apy': 0,
            'contract': '0x5D42d5bC30aA5621d32A8Dd12814b296048FEAeF',
            'need': '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            'initialReward': 375,
            'risk': 'Medium',
            'reward': 'Medium',
            'rewardRate': 0,
            'totalSupply': 0
          },

        ]
      }
    },
    methods: {
      approve: function () {
        if(this.shabu == null) return;
                let parent = this.$parent.$data
        let need = new parent.client.eth.Contract(ERC_ABI, this.selectedPool.need)
        need.methods.approve(this.selectedPool.contract, this.$parent.$data.client.utils.toWei(this.tokenAmount)).send({from: this.$parent.address})
      },
      stake: function () {
        let parent = this.$parent.$data
        let contract = new parent.client.eth.Contract(POOL_ABI, this.selectedPool.contract)
        contract.methods.stake(this.$parent.$data.client.utils.toWei(this.tokenAmount)).send({from: this.$parent.address})
      },
      claim: function () {

      },
        unstake: function () {

        },
      refresh: function () {
        let parent = this.$parent.$data
        let that = this
        if(parent.address == null) return;
        that.shabu = new parent.client.eth.Contract(SHABU_ABI, "0xDA8DD97b9C0a4f4691e8C88Fe47c740b70D5A449")
        this.pools.forEach((value, key) => {
          if(value.contract != '') {
            let contract = new parent.client.eth.Contract(POOL_ABI, value.contract)
            contract.methods.rewardRate().call().then((data) => {
              that.pools[key].rewardRate = data
            })
            contract.methods.totalSupply().call().then((data) => {
              that.pools[key].totalSupply = data
            })
          }
        })
        if(this.selectedPool != null && this.selectedPool.contract != '') {
          let contract = new parent.client.eth.Contract(POOL_ABI, this.selectedPool.contract)
          contract.methods.balanceOf(parent.address).call().then((data) => {
            that.selectedPool['balance'] = parent.client.utils.fromWei(data)
          })
          contract.methods.getRewardsAmount(parent.address).call().then((data) => {
            that.selectedPool['rewardAmount'] = parent.client.utils.fromWei(data)
          })
        }
        // Shabu Price
        let WETH = new parent.client.eth.Contract(ERC_ABI, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
        let SHABU = new parent.client.eth.Contract(ERC_ABI, "0xDA8DD97b9C0a4f4691e8C88Fe47c740b70D5A449")
        WETH.methods.balanceOf("0x17827d961B5fbFbb69FD74bEaD854FE5602621Ae").call().then((data) => {
          that.totalWETH = parent.client.utils.fromWei(data)
        })
        SHABU.methods.balanceOf("0x17827d961B5fbFbb69FD74bEaD854FE5602621Ae").call().then((data) => {
          that.totalShabu = parent.client.utils.fromWei(data)
        })
      }
    },
    mounted: function () {
      this.selectedPool = this.pools[0]
      setInterval(this.refresh, 3000)
    }
  }
</script>