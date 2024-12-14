<script setup>
import { onMounted, reactive } from 'vue';

const visibleArray = reactive({f0: true, f1: true, f2: false, f3: false});


const earnList = [
  {
    logo: '/assets/earn.png',
    title: 'earn1',
    desc: 'earn1Desc'
  },
  {
    logo: '/assets/task.png',
    title: 'earn2',
    desc: 'earn2Desc'
  },
  {
    logo: '/assets/rank.png',
    title: 'earn3',
    desc: 'earn3Desc'
  },
  {
    logo: '/assets/usdt.png',
    title: 'earn4',
    desc: 'earn4Desc'
  },
]

const planList = [
  {
    title: 'plan1',
    desc: 'earn1Desc',
  },
  {
    title: 'plan2',
    desc: 'plan2Desc',
  },
  {
    title: 'plan3',
    desc: 'plan3Desc',
  },
  {
    title: 'plan4',
    desc: 'plan4Desc',
  },
]

const partnerList1 = [
  {
    title: 'Telegram',
    logo: '/assets/telegram.png',
  },
  {
    title: 'Ton',
    logo: '/assets/ton.png',
  },
  {
    title: 'Mexc',
    logo: '/assets/mexc.png',
  },
  {
    title: 'Bitget',
    logo: '/assets/bitget.png',
  },
]

const partnerList2 = [
  '/assets/binance.png',
  '/assets/gateio.png',
  '/assets/bybit.png',
]

onMounted(() => {
  // 在这里执行加载完成后的操作  
  document.addEventListener('scroll', debounce(scroll, 30))

});

const debounce = (fn, delay) => {
  // 记录上一次的延时器
  var timer = null
  return function () {
    // 清除上一次的演示器
    clearTimeout(timer)
    // 重新设置新的延时器
    timer = setTimeout(function () {
      // 修正this指向问题
      fn.apply(this)
    }, delay)
  }
}

const scroll = () => {
  const list = document.getElementsByClassName('animate__animated')
  const judgeIsView = element => {
    var rect = element.getBoundingClientRect()
    var viewportHeight =
      window.innerHeight || document.documentElement.clientHeight
    return rect.top >= 0 && rect.bottom <= viewportHeight
  }
  for (let i = 0; i < list.length; i++) {
    if (judgeIsView(list[i])) {
      visibleArray[`f${i}`] = true
    } else {
      // visibleArray[`f${i}`] = false
    }
  }
  // console.log(visibleArray)
}


</script>

<template>

  <div class="create-container container p-container">
    <div class="left  animate__animated" :class="visibleArray.f0 ? 'animate__bounce' : ''">
      <div class="title">{{$t('firstCX')}}</div>
      <div class="sbu-title">{{$t('qzxApp')}}</div>
      <a href="https://t.me/YohiCryptoBot" target="_blank">
        <div class="touch-btn global-btn">{{$t('ztgsdk')}}</div>
      </a>
    </div>
    <div class="right animate__animated" :class="visibleArray.f1 ? 'animate__bounceInRight' : 'animate__bounceOutRight'">
      <img src="/assets/yohi.png" alt="yohi" />
    </div>
  </div>
  <div class="container p-container">
    <div class="earn-container">
      <div class="title">
         {{$t('nzxkytg')}}<a href="https://t.me/YohiCryptoBot" target="_blank"><span>@YohiCryptoBot</span></a><br />
        {{ $t('earn1') }}
      </div>
      <div class="earn-list">
        <div v-for="(item, index) in earnList" :key="item.logo" class="list-item animate__animated" :class="visibleArray[`f${index + 2}`] ? 'animate__fadeIn' : 'animate__fadeOut'">
          <img :src="item.logo" alt="logo">
          <div class="e-title">{{ $t(item.title )}}</div>
          <div class="e-desc">{{ $t(item.desc) }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="home-container">
    <div class="home-img animate__animated" :class="visibleArray.f6 ? 'animate__zoomIn' : 'animate__zoomOut'">
      <img src="/assets/home.png" alt="home" />
    </div>
    <div class="hc-top">
      <div class="hc-top1">
        <div class="hc-img" v-for="(item, index) in Array(20).fill('')" :key="index">
          <img :src="`/assets/coin/${index + 1}.png`" alt="icon" :class="`hc-img${index + 1}`" />
        </div>
      </div>
      <div class="hc-top1 hc-top2">
        <div class="hc-img" v-for="(item, index) in Array(20).fill('')" :key="index">
          <img :src="`/assets/coin/${index + 21}.png`" alt="icon" :class="`hc-img${index + 1}`" />
        </div>
      </div>
    </div>
    <div class="hc-bot">
      <div class="hc-bot1">
        <div class="hc-img" v-for="(item, index) in Array(20).fill('')" :key="index">
          <img :src="`/assets/coin/${index + 11}.png`" alt="icon" :class="`hc-img${index + 1}`" />
        </div>
      </div>
      <div class="hc-bot1 hc-bot2">
        <div class="hc-img" v-for="(item, index) in Array(20).fill('')" :key="index">
          <img :src="`/assets/coin/${index + 6}.png`" alt="icon" :class="`hc-img${index + 1}`" />
        </div>
      </div>
    </div>
  </div>
  <div class="create-container container p-container">
    <div class="left animate__animated" :class="visibleArray.f7 ? 'animate__backInLeft' : 'animate__backOutLeft'">
      <div class="title">{{$t('ktyfzsq')}}</div>
      <div class="desc">
        {{ $t('ktyfzsqDesc') }}
      </div>
    </div>
    <div class="right animate__animated" :class="visibleArray.f8 ? 'animate__bounceIn' : 'animate__bounceOut'">
      <img src="/assets/airdrop.png" alt="airdrop" />
    </div>
  </div>
  <div class="plan-container container p-container">
    <div class="left animate__animated" :class="visibleArray.f9 ? 'animate__slideInLeft' : 'animate__slideOutLeft'">
      <img src="/assets/earnpage.png" alt="earnpage" />
    </div>
    <div class="right animate__animated" :class="visibleArray.f10 ? 'animate__slideInRight' : 'animate__slideOutRight'">
      <div class="title">{{$t('wmdqdjdjh')}}</div>
      <div class="sub-title">{{$t('wmdqdjdjhDesc')}}</div>
      <div class="right-list" v-for="(item, index) in planList" :key="index">
        <div class="rl-top">
          <div class="sort">{{ index + 1 }}</div>
          <div class="rlt-title">{{ $t(item.title) }}</div>
        </div>
        <div class="rl-bot">{{ $t(item.desc) }}</div>
      </div>
    </div>
  </div>
  <div class="partner-container container p-container">
    <div class="title">{{$t('hzhuoban')}}</div>
    <div class="partner-list1">
      <div class="partner-item" v-for="item in partnerList1" :key="item.title">
        <img :src="item.logo" alt="logo" />
        <div>{{ item.title }}</div>
      </div>
    </div>
    <div class="partner-list2">
      <div class="partner-item" v-for="item in partnerList2" :key="item.title">
        <img :src="item" alt="logo" />
      </div>
    </div>
  </div>
  <div class="container p-container create-container assets-container">
    <div class="left">
      <div class="title">{{$t('jtjksjmzl')}}</div>
      <a href="https://t.me/YohiCryptoBot" target="_blank">
        <div class="touch-btn assets-btn">{{$t('ztgsdk')}}</div>
      </a>
    </div>
    <div class="right">
      <img src="/assets/wallet.png" alt="yohi" />
    </div>
  </div>
</template>

<style scoped lang="less">
.p-container {
  padding: 0 6rem;
  margin: 8rem auto;
  @media (max-width: 900px) {
    padding: 0;

  }
}

.create-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    .global-btn {
      margin: 0 auto;
    }
  }
  .left {
    flex: 1;

    .title {
      font-size: 3.5rem;
      line-height: 5rem;
      font-weight: bold;
    }

    .sbu-title {
      font-size: 3.2rem;
      line-height: 5rem;
      color: var(--color-high);
      margin-bottom: 2rem;
      font-weight: bold;
    }

    .desc {
      color: var(--color-dark);
      margin-top: 3rem;
      line-height: 2;
    }
  }

  .right {
    img {
      width: 35rem;
      max-width: 90%;
    }
  }
}

.assets-container {
  background: var(--color-high);
  border-radius: 1.5rem;
  overflow: hidden;
  padding-top: 3rem;
  .title {
    color: #000;
    font-weight: 500 !important;
    font-size: 2.4rem !important;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: bold!important;
  }
  .left {
    text-align: center;
  }
  .assets-btn {
    background: var(--color-background);
    color: var(--color-high);
    width: fit-content;
    border-radius: 1rem;
    padding: 1rem 1.8rem;
    font-size: 1.3rem;
    margin: 0 auto;
    font-weight: bold;
    &:hover {
      color: #eee;
      background: #000;
    }
  }

  .right {
    margin-top: 1rem;
    width: 32rem;
    height: 31rem;
    position: relative;
    max-width: 90%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.earn-container {
  background: var(--color-content);
  border-radius: 1.5rem;
  padding: 3rem 1.5rem;
  margin-top: 1rem;

  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;

    span {
      color: var(--color-high);
    }
  }

  .earn-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .list-item {
      border-radius: 1rem;
      padding: 2rem 1rem;
      background: rgb(5, 3, 3);
      img {
        height: 7rem;
      }

      .e-title {
        font-size: 1.1rem;
      }

      .e-desc {
        color: var(--color-dark);
        margin-top: 0.6rem;
      }
    }
  }
}

.home-container {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 5rem 0;

  .home-img {
    width: 22rem;
    padding-bottom: 44.2rem;
    position: relative;
    height: 0;
    z-index: 9;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 9;
    }
  }

  .hc-top {
    position: absolute;
    top: 8rem;
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 7rem;

    @media (max-width: 1000px) {
      height: 4rem;
    }

    .hc-top1 {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      width: 200%;
      flex-wrap: nowrap;
      position: absolute;
      top: 0;
      height: 100%;
      animation: rightMove1 24s linear infinite;

      .hc-img {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 7rem;
          object-fit: contain;

          @media (max-width: 1000px) {
            height: 4rem;
          }

        }
      }
    }

    .hc-top2 {
      transform: translate3d(-100%, 0, 0);
      animation: rightMove2 24s linear infinite;
    }

    .hc-img3 {
      animation: rotate 2s linear infinite 8s;
    }

    @keyframes rotate {
      0% {
        transform: translate3d()
      }

      360% {
        transform: rotate(180deg);
      }
    }

    @keyframes rightMove1 {
      0% {
        transform: translate3d(0%, 0, 0);
      }

      100% {
        transform: translate3d(100%, 0, 0);
      }
    }

    @keyframes rightMove2 {
      0% {
        transform: translate3d(-100%, 0, 0);
      }

      100% {
        transform: translate3d(0%, 0, 0);
      }
    }
  }

  .hc-img1 {
    animation: rotate 2s linear infinite;
  }

  .hc-img5 {
    animation: rotate 6s linear infinite;
  }

  .hc-img8 {
    animation: rotate 6s linear infinite;
  }

  .hc-img12 {
    animation: rotate 7s linear infinite;
  }

  .hc-img15 {
    animation: rotate 8s linear infinite;
  }

  .hc-img20 {
    animation: rotate 6s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0) rotateZ(0deg) skew(0deg, 0deg);
    }

    100% {
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(360deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }


  .hc-bot {
    position: absolute;
    bottom: 20rem;
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 7rem;

    @media (max-width: 1000px) {
      height: 4rem;
    }

    .hc-bot1 {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      width: 200%;
      flex-wrap: nowrap;
      position: absolute;
      top: 0;
      height: 100%;
      animation: leftMove1 36s linear infinite;

      .hc-img {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 7rem;
          object-fit: contain;

          @media (max-width: 1000px) {
            height: 4rem;
          }
        }
      }
    }

    .hc-bot2 {
      transform: translate3d(-100%, 0, 0);
      animation: leftMove2 36s linear infinite;
    }


    @keyframes leftMove1 {
      0% {
        transform: translate3d(0%, 0, 0);
      }

      100% {
        transform: translate3d(-100%, 0, 0);
      }
    }

    @keyframes leftMove2 {
      0% {
        transform: translate3d(100%, 0, 0);
      }

      100% {
        transform: translate3d(0%, 0, 0);
      }
    }
  }
}

.plan-container {
  display: flex;
  align-items: center;
  padding: 0 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
    .left {
      margin-bottom: 3rem;
    }
  }
  .left {
    flex: 1;
    display: flex;

    img {
      width: 22rem;
      object-fit: contain;
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 3rem;
    }
    .sub-title {
      font-size: 1rem;
      opacity: 0.8;
      width: 90%;
      min-width: 300px;
      text-align: center;
    }

    .right-list {
      border-radius: 1rem;
      background: var(--color-content);
      margin-top: 2rem;
      padding: 0.5rem 1rem;
      width: 90%;
      min-width: 300px;

      .rl-top {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 1.1rem;

        .sort {
          border: 1px solid #ccc;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }
      }

      .rl-bot {
        opacity: 0.8;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        padding-left: 0.5rem;
      }
    }
  }
}

.partner-container {
  text-align: center;
  margin: 5rem auto;

  .title {
    margin-bottom: 3rem;
    font-size: 2.6rem;
  }

  .partner-list1 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
    max-width: 800px;
    margin: 0 auto;
    @media (max-width: 900px) {
      max-width: 100%;
      .partner-item {
        font-size: 1rem!important;
        gap: 3px;
      }
      img {
        height: 1.2rem!important;
      }
    }
    .partner-item {
      border-radius: 1rem;
      background: var(--color-content);
      display: flex;
      align-items: center;
      padding: 1rem;
      gap: 1rem;
      font-size: 1.6rem;
      letter-spacing: 1px;

      img {
        height: 3rem;
        object-fit: contain;
      }
    }
  }

  .partner-list2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
    max-width: 650px;
    margin: 0 auto;
    margin-top: 1rem;
    @media (max-width: 900px) {
      max-width: 100%;
      img {
        height: 1.2rem!important;
      }
    }
    .partner-item {
      border-radius: 1rem;
      background: var(--color-content);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      gap: 1rem;

      img {
        height: 3rem;
        object-fit: contain;

      }
    }
  }
}
a {
  display: inline-block;
}
</style>
