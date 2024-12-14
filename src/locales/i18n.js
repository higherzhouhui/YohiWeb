// i18n配置
import { createI18n } from "vue-i18n";
import tw from "./tw";
import en from "./en";
import ar from "./ar";
import es from "./es";
import id from "./id";
import pt from "./pt";
import ru from "./ru";
import vi from "./vi";
import th from "./th";
import nl from "./nl";
import tr from "./tr";
import hi from "./hi";
import ko from "./ko";
import ja from "./ja";

const judeLanguage = () => {
  const language = navigator.language
  const languageList = ['ar', 'es', 'id', 'pt', 'ru', 'vi', 'th', 'nl', 'tr', 'hi', 'ko', 'ja']
  // 阿拉伯语，西班牙语，印度尼西亚，葡萄牙，俄语，越南语，泰语，荷兰语，土耳其语，印地语，韩语，日语
  console.log(navigator.languages)
  let locale = 'en'
  if (language == 'zh' || language == 'zh-CN' || language == 'zh-TW') {
    locale = 'tw'
  } else if (languageList.includes(language)) {
    locale = language
  }
  return locale
}
judeLanguage()
// 创建i18n
const i18n = createI18n({
  locale:  judeLanguage(), // 语言标识
  globalInjection: true, // 全局注入,可以直接使用$t
  // 处理报错: Uncaught (in promise) SyntaxError: Not available in legacy mode (at message-compiler.esm-bundler.js:54:19)
  legacy: false,
  messages: {
    tw,
    en,
    ar,
    es,
    id,
    pt,
    ru,
    vi,
    th,
    tr,
    nl,
    ko,
    ja,
    hi
  }
});

export default i18n;
