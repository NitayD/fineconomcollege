const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const APP_ROUTES = [{
  name: 'specialnost',
  page: 'abiturientam/specialnosti/specialnost',
  pattern: '/abiturientam/specialnosti/:specialnost'
}, {
  name: 'news',
  page: 'novosti/novosti',
  pattern: '/blog'
}, {
  name: 'news_with_filter',
  page: 'novosti/novosti_s_filtrom',
  pattern: '/blog/:category'
}, {
  name: 'news_item',
  page: 'novosti/novost',
  pattern: '/blog/post/:slug'
}]

APP_ROUTES.forEach(route => routes.add(route))
