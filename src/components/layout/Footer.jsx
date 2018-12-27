import React, { PureComponent } from 'react'
import { Link } from '/../routes'
import PopupLink from 'components/popup/PopupLink'
import styles from 'styles/layout/footer.scss'
import Popup from 'components/popup/Popup'

export default class Footer extends PureComponent {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <ul className="footer__list">
                <li className="footer__item">
                  <Link route="/abiturientam/studencheskaya_zhizn">
                    <a className="link link--big">Студенческая жизнь</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/specialnosti">
                    <a className="link link--big">Специальности</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/konkursi">
                    <a className="link link--big">Конкурсы</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/dokumenti">
                    <a className="link link--big">Документы</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/pravila">
                    <a className="link link--big">Правила</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/dni_otkritih_dverei">
                    <a className="link link--big">Дни открытых дверей</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/obshezhitie">
                    <a className="link link--big">Общежитие</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/vne_urochnaya_deyatelnost">
                    <a className="link link--big">Внеурочная деятельность</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="social_icons d-flex justify-content-center">
                <a href="http://google.com" target="_blank">
                  <img src="/static/img/icons/social/fb.svg" alt="Social Fb"/>
                </a>
                <a href="http://google.com" target="_blank">
                  <img src="/static/img/icons/social/youtube.svg" alt="Social Youtube"/>
                </a>
                <a href="http://google.com" target="_blank">
                  <img src="/static/img/icons/social/wt.svg" alt="Social WatsApp"/>
                </a>
              </div>
              <div className="footer__contacts">
                <span>Алматы, Ауэзовский район</span>
                <span>Рыскулбекова, 39а, 050042</span>
                <PopupLink popupInner={
                  <div style={{width: 'calc(100vw - 90px)', height: 'calc(100vh - 90px)'}}>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f1373617a7c40487cdf19a04f244d2d6e8c51c06ed985f75002a00115b7978a&amp;source=constructor" width="100%" height="100%" frameborder="0"/>
                  </div>
                }>Открыть на карте</PopupLink>
                <span>
                  <a href="tel:+77273097400" target="_blank">Приемная: +7 (727) 309–74–00</a>
                </span>
                <span>
                  <a href="tel:+77273097477" target="_blank">+7 (727) 309–74–77</a>
                </span>
                <span>
                  <a href="tel:+77273097212" target="_blank">+7 (727) 309–72–12</a>
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="footer__list footer__list--right">
                <li className="footer__item">
                  <Link route="/abiturientam/istoriya">
                    <a className="link link--big">История колледжа</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/klubi">
                    <a className="link link--big">Клубы</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/prepodavateli">
                    <a className="link link--big">Преподаватели</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/administraciya">
                    <a className="link link--big">Администрация</a>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link route="/abiturientam/pomesheniya">
                    <a className="link link--big">Помещения</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Popup/>
        <style jsx>{styles}</style>
      </footer>
    )
  }
}
