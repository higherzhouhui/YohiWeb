<script setup>

</script>

<template>
  <div class="header container">
    <div class="left">
      <router-link to="/"><img src="/assets/logo.png" alt="logo" /></router-link>
    </div>
    <a href="https://t.me/YohiCryptoBot" target="_blank">
      <div class="right touch-btn global-btn">
        {{ $t('begin') }}
      </div>
    </a>
  </div>
</template>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left img {
    width: 3.6rem;
  }
}
</style>
