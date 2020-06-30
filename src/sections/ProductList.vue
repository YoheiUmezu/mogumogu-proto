<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products List</h1>
          <div class="row">
              <div class="col-md-4" v-for="(product, index) in products" v-bind:key="index">
                  <div class="card product-item">
                        <carousel :perPage="1">
                          <slide v-for="(image, index) in product.images" v-bind:key="index">
                                <img :src="image" class="card-img-top" alt="..." width="250px">
                          </slide>
                        </carousel>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-price  ">{{ product.price | currency }}</h5>
                          </div> 
                            <p class="card-text" v-html="product.description"></p>
                            <!-- propsを渡す -->
                            <!-- 最初のイメージだけ渡す -->
                           <add-to-cart
                            :image="getImage(product.images)"
                            :product-image="getImage(product.images)"
                            :p-id="product.id"
                            :price="product.price"
                            :name="product.name" >
                          </add-to-cart>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {db} from '../firebase';
export default {
  name: "Products-list",
  props: {
    msg: String
  },
data(){
    return {
        products: [],
     
    }
  },
  methods:{
    getImage(images) {
      //console.log (images[0])
      //最初の一つ目を表示する
      return images[0];
    }
  },
  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>