<script setup>

</script>

<template>
  <div class="container">
    <div class="logo-container">
      <router-link to="/"><img src="/assets/logo.png" alt="logo" /></router-link>
      <p>{{$t('yohiDesc')}}</p>
    </div>
    <div class="footer">
      <div class="left">
        <a href="https://t.me/YohiCryptoBot" target="_blank">{{$t('tzzxwm')}}</a>
      </div>
      <div class="right">
        <div class="service">
          <router-link to="/service">Service Terms</router-link>
          <router-link to="/privacy">Privacy And Policy</router-link>
        </div>
        <div class="social">
          <a href="https://twitter.com/" target="_blank">
            <img src="/src/assets/twitter.png" alt="twitter" />
          </a>
          <a href="https://t.me/YohiCryptoBot" target="_blank">
            <img src="/src/assets/tg.png" alt="twitter" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src="/src/assets/group.png" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  margin-top: 5rem;
}

.logo-container {
  color: var(--color-dark);
  margin-bottom: 3rem;
  @media (max-width: 500px) {
    text-align: center;

  }
  img {
    width: 5rem;
    margin-bottom: 1rem;
  }
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;

    .left img {
      margin-bottom: 2rem;
    }
  }

  .left {
    a {
      color: var(--color-dark);

      &:hover {
        color: #fff;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    .service {
      display: flex;
      gap: 1rem;

      a {
        color: var(--color-dark);
        text-decoration: underline;

        &:hover {
          color: #fff;
        }
      }
    }

    .social {
      display: flex;
      align-content: center;
      gap: 2rem;

      img {
        height: 2rem;
      }
    }
  }
}
</style>
