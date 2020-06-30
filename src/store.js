import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {//data()的なやつ
      cart: []
    },
    mutations: {
      addToCart(state, item) {
        //item.productId = ユーザーが入れたproduct 
        //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
        //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        let found = state.cart.find(product => product.productId == item.productId )
        if (found) {
          found.productQuantity++;
        } else {
          state.cart.push(item )
        }
      }
    }
  })