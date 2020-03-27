declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
//TS引入SVG，CRM学习法
declare module "*.svg" {
  const content: string;
  export default content;
}