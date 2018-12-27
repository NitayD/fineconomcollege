import Helmet from 'react-helmet'

const defaultSEO = {
  title: 'Финансово Экономический Колледж',
  description: 'Один из лучших колледжей г.Алматы, который ежегодно выпускает сотни крутых специалистов.',
  image: '/static/img/logo.png'
}

const SEO = ({ title, description, image }) => {
  return (
    <Helmet>
      <title>{ title || defaultSEO.title }</title>
      <meta property="og:title" content={ title || defaultSEO.title } />
      <meta property="title" content={ title || defaultSEO.title } />
      <meta name="description" content={ description || defaultSEO.description } />
      <meta property="description" content={ description || defaultSEO.description } />
      <meta property="og:description" content={ description || defaultSEO.description } />
      <meta property="type" content="website" />
      <meta property="og:type" content="website" />
      <meta property="image" content={ image || defaultSEO.image } />
      <meta property="og:image" content={ image || defaultSEO.image } />
    </Helmet>
  )
}
export default SEO