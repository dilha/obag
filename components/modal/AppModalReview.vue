<template>
   <div class="modal">
      <div class="modal__container">
         <div v-if="!responseMessage" class="modal__review">
            <h6 class="modal__review-title">
               Оставить отзыв
            </h6>
            <p v-if="error" style="color: red; font-size: 12px margin-bottom:8px;">
               {{ error }}
            </p>
            <form class="modal__review-form" @submit.prevent="sendReview">
               <input v-model="user.email" class="modal__review-input modal__review-email" type="email"
                  placeholder="Эл. почта" required />
               <textarea v-model="user.text" class="modal__review-input modal__review-textarea" placeholder="Текст"
                  required></textarea>
               <button class="modal__review-btn" type="submit">
                  Оставить отзыв
               </button>
            </form>
         </div>
         <div v-if="responseMessage" class="modal__review">
            <p>{{ responseMessage }}</p>
         </div>
      </div>
      <button class="modal__close" @click="close">
         <img src="@/assets/images/icons/close-modal.svg" alt="" />
      </button>
   </div>
</template>

<script>

export default {
   name: 'AppModalReview',
   props: {
      productId: {
         type: Number,
         default: null
      }
   },
   data() {
      return {
         user: {
            email: '',
            text: ''
         },
         error: null,
         responseMessage: null
      }
   },
   mounted() {
      this.$emit('mounted')
   },
   methods: {
      close() {
         this.responseMessage = null
         this.$emit('close')
      },
      sendReview() {
         if (!this.productId) {
            this.$emit('close')
            return
         }
         this.$api.post(`/product/${this.productId}/review`, {
            text: this.user.text,
            rating: 5
         })
            .then((response) => {
               this.responseMessage = response.data.message
            }).catch((error) => {
               console.log(error)
               this.$emit('close')
            })
      }
   },
}
</script>
