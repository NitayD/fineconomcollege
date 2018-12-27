import React, { PureComponent } from 'react'
import ParsedDate               from 'components/Universal/ParsedDate'
import ParsedHTML               from 'components/Universal/ParsedHTML'
import BackBtn                  from 'components/Universal/BackBtn'
import Btn                      from 'components/Universal/Btn'
import CategoryBtn              from 'components/news/CategoryBtn'
import { connect }              from 'react-redux'

import styles                   from 'styles/news/NewsItem.scss'

class NewsItem extends PureComponent {
  render () {
    const { Дата_публикации, Заголовок, Изображение, Категории, Содержимое } = this.props.data.find( el => el.slug === this.props.slug ? true : false )
    const { Полное } = Содержимое
    return (
        <section>
            <div className="container">
                <div className="row ">
                    <div className="col d-flex justify-content-between align-items-start">
                        <BackBtn withIcon={true}/><Btn text="К другим новостям<i class='icon-right-thin d-none d-sm-inline-block'></i>" route="news" margin="0 0 0 10px" right={true}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <figure>
                            <img src={ Изображение ? Изображение.secure_url : '' } alt={Заголовок}/>
                        </figure>
                    </div>
                    <div className="col-md-8">
                        <div className="row justify-content-between no-gutters">
                            <Categoryes data={Категории}/>
                            <h3><ParsedDate date={ Дата_публикации }/></h3>
                        </div>
                        <h1>{ Заголовок }</h1>
                        <ParsedHTML text={ Полное }/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                img {
                    max-width: 100%;
                    width: 100%;
                }
                .container > .row {
                    margin-top: 15px;
                }
            `}</style>
            <style jsx>{ styles }</style>
        </section>
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

function mapStateToProps({ news_page }) {
    return {
        data: news_page.toJS().allNewsData
    }
}

export default connect(mapStateToProps)(NewsItem)
