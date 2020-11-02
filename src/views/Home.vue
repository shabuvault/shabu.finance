<template>
  <div >
    <!-- Modal -->
 

    <!-- Card -->

    <div class="card mx-auto mt-5">

      <!-- Header -->
      <div class="card-header">
        <div class="mt-2">
          <img class="image-logo" src="@/assets/010-soy-sauce-1.png">
          <span class="HeaderFont"> Shabu </span>
        </div>
      </div>

      <!-- Content -->
          <div style="background-color: blanchedalmond;background-size: cover;" class="card-body">
        <!---->
        <div class="row-sm content-font">
          Welcome to shabu <br/>
          <br/>
        </div>
        <div class="row-sm content-font1">
          ShabuVault is the first ultra-deflationary fully dictated by the smart contract and trading volume
        
        </div>

        
      </div>
    </div>
  </div>
</template>
<style>
  body {
    font-family: 'Grandstander', cursive;
    background-image: url('../assets/background.jpg');
    background-size: cover;
  }

  .card {
    border: 10px solid white;
    text-align: center;
    width: 40%;
    height: 415px;
  }

  .card-header {
    background-image: url("../assets/header.jpg");
    border-radius: 30px;
  }

  .card-content {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  .icon-food {
    width: 50px;
    height: 50px;
    background: #076196;
    border-radius: 50%;
    padding: 6px;
    margin-left: 12px;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .HeaderFont {
    color: black;
    -webkit-text-fill-color: white;
    /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: xx-large;
    vertical-align: middle;
  }

  .modal-header {
    background-image: url("../assets/content2.jpg");
    color: white;
  }

  .content-font {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: xx-large;
  }
    .content-font1{
      -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: x-large;
    }
  .image-logo{
    width: 50px;
    height: 50px;
  }
  @media (max-width: 992px) {  
  .card {
    border: 10px solid white;
    text-align: center;
    width: 80%;
    height:350px;
  }
  .HeaderFont {
    color: black;
    -webkit-text-fill-color: white;
    /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size:medium;
    vertical-align: middle;
  }
 
  .content-font {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: x-large;
    }
       .content-font1{
      -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: large;
    
  }
  body {
  overflow: hidden;
   background-attachment:fixed;
  background-position: center;
  } 
@media (max-width: 768px) { 
  
  .card {
    border: 10px solid white;
    text-align: center;
    width: 80%;
    height:350px;
  }
  .content-font {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: large;
  }

 body {
  overflow: hidden;
   background-attachment:fixed;
  background-position: center;
  }
 }
  }
</style>