<template>
  <div class="widgets">
    <a
      class="widgets__whatsapp"
      href="https://api.whatsapp.com/send/?phone=77013481947"
      target="_blank"
    >
      <div class="widgets__whatsapp-logo">
        <img src="@/assets/images/icons/whatsapp-icon.png" alt="" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppFloatingWidgets',
}
</script>

<style lang="scss" scoped>
.widgets {
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 1000;

  &__whatsapp {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background-color: #25d366;
    border-radius: 100%;
    opacity: 0.85;

    &:hover {
      opacity: 1;
    }

    &-logo {
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        animation-name: tossing;
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }
    }
  }
}

@keyframes tossing {
  50% {
    transform: rotate(-10deg);
  }
}
</style>
