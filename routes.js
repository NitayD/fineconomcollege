const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const APP_ROUTES = [{
  name: 'specialnost',
  page: 'abiturientam/specialnosti/specialnost',
  pattern: '/abiturientam/specialnosti/:specialnost'
}, {
  page: 'about',
  pattern: '/about'
}]

APP_ROUTES.forEach(route => routes.add(route))
