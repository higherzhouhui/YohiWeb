<script setup>

</script>

<template>
  <div className='loading-wrapper'>
    <div className="loading">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>

.loading-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  background: rgba($color: #222, $alpha: 0.6);
  backdrop-filter: blur(10px);
}
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #fff;
}

.loading.la-dark {
  color: #000;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 32px;
  height: 32px;
}

.loading > div {
  position: absolute;
  top: 50%;
  left: 50%;
  background: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
}

.loading > div:first-child {
  position: absolute;
  width: 40px;
  height: 40px;
  border-right-color: transparent;
  border-left-color: transparent;
}

.loading > div:last-child {
  width: 20px;
  height: 20px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation-duration: 0.5s;
  animation-direction: reverse;
}

@keyframes ball-clip-rotate-multiple-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

</style>
