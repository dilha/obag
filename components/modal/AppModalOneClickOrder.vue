<template>
   <div class="modal">
      <template v-if="OrderModal">
         <div class="modal__container">
            <div class="modal__one-click-order">
               <h6 class="modal__one-click-order-title">
                  Заказать в 1 клик!
               </h6>
               <p v-if="error" style="color: red; font-size: 12px margin-bottom:8px;">
                  {{ error }}
               </p>
               <form class="modal__one-click-order-form" @submit.prevent="handleOrder">
                  <input v-model="user.name" class="modal__one-click-order-input modal__one-click-order-name"
                     type="text" placeholder="Имя" required />
                  <input v-model="user.phone" class="modal__one-click-order-input modal__one-click-order-phone"
                     type="text" placeholder="Номер телефона" required />
                  <button class="modal__one-click-order-btn" type="submit">
                     Заказать
                  </button>
               </form>
            </div>
         </div>
         <button class="modal__close" @click="close">
            <img src="@/assets/images/icons/close-modal.svg" alt="" />
         </button>
      </template>
      <template v-else>
         <div class="modal">
            <div class="modal__container">
               <div class="modal__one-click-order">
                  <h6 class="modal__one-click-order-title">Готово!</h6>
                  <!-- <p
                      v-if="error"
                      style="color: red; font-size: 12px margin-bottom:8px;"
                    >
                      {{ error }}
                    </p> -->
               </div>
            </div>
            <button class="modal__close" @click="close">
               <img src="@/assets/images/icons/close-modal.svg" alt="" />
            </button>
         </div>
      </template>
   </div>
</template>

   <script>
export default {
   name: 'AppModalOneClickOrder',
   data() {
      return {
         user: {
            name: '',
            phone: ''
         },
         OrderModal: true,
         error: null
      }
   },
   mounted() {
      this.$emit('mounted')
   },
   methods: {
      close() {
         this.$emit('close')
      },
      async handleOrder() {
         await this.$axios
            .post('order-callback', {
               phone: this.user.phone,
               name: this.user.name,
            })
            .then((response) => {
               console.log(response)
               this.OrderModal = false
               // this.res = response.message
            })
            .catch((err) => {
               console.log(err)
            })
      },
   },
}
</script>
