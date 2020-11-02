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
  <span class="ml-2 " style="margin-top:15px;" >(APY): 0% <a href="">Contract</a></span> 
  </div>

   <div class="card-header mobile" style="border-radius:0;margin-top:25px;height:6%;">
        <div style="margin-top:-10px;">
          <span class="fontmini">Uniswap</span>
        </div>
      </div>
      <div class="card-body" style="margin-top:-10px;">
🍤 GET SHABU ON UNISWAP
<br>
🍥 GET SHABU/ETH ON UNISWAP
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
        <p class="card-text"><input class="form-control"  placeholder="Input Stake/ claim/ unstake "></p>
        <p style=" margin-top: -10px;margin-bottom: 2px;text-align:center;font-size: 12px;">STEP: ApproveAll -> Stake-> Earning</p> 
        <p><button type="button" style="margin-right:10px;" class="btn btn-success btn-custom">Approve</button>
        <button type="button" style="margin-right:10px;" class="btn btn-danger btn-custom">Stake</button>
        <button type="button" style="margin-right:10px;" class="btn btn-info btn-custom">Claim</button>
        <button type="button" class="btn btn-primary btn-custom">Unstake</button>
        </p>
      
<div class="row">
  <div class="col">
<p class="margin-text">Total Staked: 0 </p> 
<p class="margin-text">Distribution(1 day): 0 </p> 
<p class="margin-text">Halving Time: 1970-01-01 07:00:00</p> 
<p class="margin-text">Your Staked: 0 </p> 
<p class="margin-text">Earning (1D): 0 </p> 
<p class="margin-text">Current APY: 0%</p> 
</div>
<div class="col">
<p class="margin-text-right">Claimable: 0 </p> 
<p class="margin-text-right">Shabu Max supply = 50000</p> 
<p class="margin-text-right">This pool will distrbute 14500 </p> 
<p class="margin-text-right">Risk: Medium</p> 
<p class="margin-text-right">Reward: Medium</p> 
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
  <span class="ml-2 " style="margin-top:10px;" >(APY): 0% <a href="">Contract</a></span> 
  </div>

   <div class="card-header mobile" style="border-radius:0;margin-top:10px;height:6%;">
        <div style="margin-top:-10px;">
          <span class="fontmini">Uniswap</span>
        </div>
      </div>
      <div class="card-body" style="margin-top:-10px;">
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
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import {} from 'vue-router'
  export default {
    name: 'Stake',
    data: function () {
      return {
        selectedPool: {},
        pools: [
          {
            'name': 'SHABU',
            'apy': 0,
            'contract': ''
          },
          {
            'name': 'SHABU/ETH',
            'apy': 0,
            'contract': ''
          },

        ]
      }
    },
    mounted: function () {
      this.selectedPool = this.pools[0]
    }
  }
</script>