import React, { PureComponent } from 'react'
import ParsedDate               from 'components/Universal/ParsedDate'
import ParsedHTML               from 'components/Universal/ParsedHTML'
import BackBtn                  from 'components/Universal/BackBtn'
import Btn                      from 'components/Universal/Btn'
import CategoryBtn              from 'components/news/CategoryBtn'

import styles                   from 'styles/news/NewsItem.scss'
import { Link }                 from '/../routes'

class NewsItemPreview extends PureComponent {
  render () {
    const { Дата_публикации, Заголовок, Изображение, Категории, Содержимое, slug } = this.props.data
    const { Короткое } = Содержимое
    return (
        <div className="row block">
          <div className="col-md-8">
            <Link route="news_item" params={{slug: slug}}>
              <a>
                <h1>{ Заголовок }</h1>
              </a>
            </Link>
            <ParsedHTML text={ Короткое }/>
            <div className="row justify-content-between no-gutters">
              <Categoryes data={Категории}/>
              <h3 className="d-flex align-items-center"><ParsedDate date={ Дата_публикации }/></h3>
            </div>
            <div className="row justify-content-end no-gutters">
              <Btn text="Подробнее" route="news_item" params={{slug: slug}} margin="30px 0 15px"/>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <Link route="news_item" params={{slug: slug}}>
              <a>
                <figure>
                    <img src={ Изображение ? Изображение.secure_url : '' } alt={Заголовок}/>
                </figure>
              </a>
            </Link>
          </div>
          <style jsx>{`
              img {
                max-width: 100%;
                width: 100%;
              }
              .block {
                margin-bottom: 30px;
              }
          `}</style>
          <style jsx>{ styles }</style>
        </div>
    )
  }
}

const Categoryes = ({ data }) => (
    <div className="category">
        {data.map((el) => (
            <CategoryBtn id={el} key={el}/>
        ))}
        <style jsx>{ styles }</style>
    </div>
)

export default NewsItemPreview
