<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Loading from '@/components/Loading.vue';
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  loading.value = false
});

</script>

<template>
  <Header /> 
  <main><router-view />  </main>
  <Footer />
  <Loading v-if="loading"/>
</template>

<style scoped lang="less">
main {
  min-height: calc(100vh - 267px);
}
</style>
