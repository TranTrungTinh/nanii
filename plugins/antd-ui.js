import Vue from 'vue'
import {
  BackTop,
  Card,
  Col,
  Drawer,
  Divider,
  Layout,
  Menu,
  Rate,
  Row,
  Tag
} from 'ant-design-vue'

// css manual import
[
  'back-top',
  'card',
  'col',
  'drawer',
  'divider',
  'layout',
  'menu',
  'rate',
  'row',
  'tag'
].forEach(libName => import(`ant-design-vue/lib/${libName}/style/css`))

export default () => {
  Vue.use(BackTop)
  Vue.use(Card)
  Vue.use(Col)
  Vue.use(Drawer)
  Vue.use(Divider)
  Vue.use(Layout)
  Vue.use(Menu)
  Vue.use(Rate)
  Vue.use(Row)
  Vue.use(Tag)
}
