<template>
   <div class="modal">
      <div class="modal__container">
         <div class="modal__review">
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
      </div>
      <button class="modal__close" @click="close">
         <img src="@/assets/images/icons/close-modal.svg" alt="" />
      </button>
   </div>
</template>

<script>

export default {
   name: 'AppModalReview',
   data() {
      return {
         user: {
            email: '',
            text: ''
         },
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
      sendReview() {
         // this.$api.post('/sendReview', this.user).then(() => {
         //    // TODO set user data, now don't get from api user data
         //    this.$emit('close')
         // })
         console.log(this.user)
         this.$emit('close')
      }
   },
}
</script>
