import Vue from 'vue'
import {
  BackTop,
  Card,
  Col,
  Icon,
  Drawer,
  Divider,
  Layout,
  Menu,
  Rate,
  Row,
  Tag
} from 'static/vendor/ant-design-vue'

// css manual import
[
  'back-top',
  'card',
  'col',
  'icon',
  'drawer',
  'divider',
  'layout',
  'menu',
  'rate',
  'row',
  'tag'
].forEach(libName => import(`static/vendor/ant-design-vue/lib/${libName}/style/css`))

export default () => {
  Vue.use(BackTop)
  Vue.use(Card)
  Vue.use(Col)
  Vue.use(Icon)
  Vue.use(Drawer)
  Vue.use(Divider)
  Vue.use(Layout)
  Vue.use(Menu)
  Vue.use(Rate)
  Vue.use(Row)
  Vue.use(Tag)
}
