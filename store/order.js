import * as epayment from '~/helpers/epayment-api';
import { createPaymentObject } from '~/helpers/payment-helpers';

export const state = () => ({
  isLoading: false,
  error: null,
  data: null,
})

export const mutationTypes = {
  sendOrderStart: 'mutation/sendOrderStart',
  sendOrderSuccess: 'mutation/sendOrderSuccess',
  sendOrderFailure: 'mutation/sendOrderStart',
  clearCart: 'cart/mutation/clearCart',
}

export const actionTypes = {
  sendOrder: 'action/sendOrder'
}

export const mutations = {
  [mutationTypes.sendOrderStart](state) {
    state.isLoading = true;
  },
  [mutationTypes.sendOrderSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.sendOrderFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
}

export const actions = {
  [actionTypes.sendOrder]({ commit, rootState }, { callBack, ...payload }) {
    if (payload.payment_type === 'card') {
      this.$api.post('/cart/store', payload)
        .then(response => {
          if (response.status === 200) {
            commit(mutationTypes.sendOrderSuccess, payload)
            commit(mutationTypes.clearCart, null, { root: true })
            const paymentData = response.data;

            epayment.showPaymentWidget(
              createPaymentObject(paymentData.auth, paymentData.payment.invoiceID, paymentData.cart.price),
              callBack
            )
          }
        })
        .catch((e) => {
          commit(mutationTypes.sendOrderFailure, e?.response.data?.message)
          Promise.reject(e)
        })
    } else if (payload.payment_type === 'cash') {
      this.$api.post('/cart/store', payload)
        .then(response => {
          if (response.status === 200) {
            commit(mutationTypes.sendOrderSuccess, payload)
            commit(mutationTypes.clearCart, null, { root: true })
            callBack({ success: true })
          }
        })
        .catch((e) => {
          commit(mutationTypes.sendOrderFailure, e?.response.data?.message)
          Promise.reject(e)
        })

    }
  }
}
