export const state = () => ({
  cartProducts: [],
  deliveryPrice: 0,
  deliveryMethod: null,
  paymentMethod: null,
})

export const mutationTypes = {
  addProduct: 'mutation/addProduct',
  removeProduct: 'mutation/removeProduct',
  updatedQuantity: 'mutation/updatedQuantity',
  clearCart: 'mutation/clearCart',
  setDeliveryPrice: 'mutation/setDeliveryPrice',

  setPaymentMethod: 'mutation/setPaymentMethod',
  setDeliveryMethod: 'mutation/setDeliveryMethod'
}
export const actionTypes = {
  addProduct: 'action/addProduct',
  updatedQuantity: 'action/updatedQuantity',
  removeProduct: 'action/removeProduct',
  clearCart: 'action/clearCart',
  setDeliveryPrice: 'action/setDeliveryPrice',

  setPaymentMethod: 'action/setPaymentMethod',
  setDeliveryMethod: 'action/setDeliveryMethod'
}

export const mutations = {
  [mutationTypes.addProduct](state, payload) {
    state.cartProducts.push(payload)
  },
  [mutationTypes.setDeliveryPrice](state, payload) {
    state.deliveryPrice = payload
  },
  [mutationTypes.removeProduct](state, payload) {
    state.cartProducts.forEach((p, i) => {
      if (p.id === payload) {
        state.cartProducts.splice(i, 1);
      }
    })
  },
  [mutationTypes.updatedQuantity](state, { type, product }) {

    const productIndex = state.cartProducts.findIndex(p => p.id === product.id);

    switch (type) {
      case 'increase':
        state.cartProducts.forEach((p, i) => {
          if (i === productIndex) {

            const newQuantity = state.cartProducts[i].quantity++;
            this._vm.$set(state.cartProducts, i, {
              quantity: newQuantity,
              ...state.cartProducts[i],
            })
          }
        })
        return

      case 'decrease':
        state.cartProducts.forEach((p, i) => {
          if (i === productIndex && p.quantity > 1) {
            const newQuantity = state.cartProducts[i].quantity--
            this._vm.$set(state.cartProducts, i, {
              quantity: newQuantity,
              ...state.cartProducts[i],
            })
          } else if (i === productIndex && p.quantity === 1) {
            state.cartProducts.splice(i, 1);
          }
        })
    }
  },
  [mutationTypes.clearCart](state) {
    state.cartProducts = []
  },

  [mutationTypes.setPaymentMethod](state, payload) {
    state.paymentMethod = payload
  },
  [mutationTypes.setDeliveryMethod](state, payload) {
    state.deliveryMethod = payload
  },
}
export const actions = {
  [actionTypes.addProduct]({ commit, state }, product) {
    let productWithQuantity = null;

    if (!product.quantity) {
      productWithQuantity = { ...product, quantity: 1 }
    } else {
      productWithQuantity = product
    }

    const isProductExists = state.cartProducts.some(p => p.id === product.id);

    if (!isProductExists) {

      commit(mutationTypes.addProduct, productWithQuantity)
    }

    return new Promise(resolve => {
      resolve(isProductExists)
    })
  },

  [actionTypes.updatedQuantity]({ commit }, { type, product }) {
    commit(mutationTypes.updatedQuantity, { type, product })
  },
  [actionTypes.removeProduct]({ commit }, product) {
    commit(mutationTypes.removeProduct, product)
  },
  [actionTypes.clearCart]({ commit }) {
    commit(mutationTypes.clearCart)
  },
  [actionTypes.setDeliveryPrice]({ commit }) {
    return new Promise(resolve => {
      this.$api.get('/delivery-price')
        .then((response) => {
          commit(mutationTypes.setDeliveryPrice, parseInt(response.data.price))
          resolve(response)
        })
    })
  },

  [actionTypes.setPaymentMethod]({ commit }, payload) {
    commit(mutationTypes.setPaymentMethod, payload)
  },
  [actionTypes.setDeliveryMethod]({ commit }, payload) {
    commit(mutationTypes.setDeliveryMethod, payload)
  },
}
export const getters = {
  totalProductCount: state => state.cartProducts.length,
  // eslint-disable-next-line no-return-assign
  totalProductCost: state => state.cartProducts.reduce((acc, p) => acc += p.price * p.quantity, 0) + state.deliveryPrice,
  products: state => state.cartProducts,
  getProductQuantityById: (state) => (id) => {
    const product = state.cartProducts.find(item => parseInt(item.id) === parseInt(id))
    return product ? product.quantity : null
  }
}
