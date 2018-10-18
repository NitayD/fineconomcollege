import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from 'styles/NavMenu.scss'
import Dropdown from './Dropdown'
import { Media } from 'react-breakpoints'
import Humburger from './Humburger'

const menu = {
  toStudents: [{
    href: '/studentam/raspisanie',
    text: 'Расписание',
    type: 'link'
  }],
  toAbituriens: [{
      href: '/abiturientam/studencheskaya_zhizn',
      text: 'Студенческая жизнь',
      type: 'link'
    },{
      href: '/abiturientam/specialnosti',
      text: 'Специальности',
      type: 'link'
    },{
      href: '/abiturientam/konkursi',
      text: 'Конкурсы',
      type: 'link'
    },{
      href: '/abiturientam/dokumenti',
      text: 'Документы',
      type: 'link'
    },{
      href: '/abiturientam/pravila',
      text: 'Правила',
      type: 'link'
    },{
      href: '/abiturientam/dni_otkritih_dverei',
      text: 'Дни открытых дверей',
      type: 'link'
    },{
      href: '/abiturientam/obshezhitie',
      text: 'Общежитие',
      type: 'link'
    },{
      href: '/abiturientam/vne_urochnaya_deyatelnost',
      text: 'Внеурочная деятельность',
      type: 'link'
    }],
  o_nas: [{
      href: '/o_nas/istoriya',
      text: 'История колледжа',
      type: 'link'
    },{
      href: '/o_nas/klubi',
      text: 'Клубы',
      type: 'link'
    },{
      href: '/o_nas/prepodavateli',
      text: 'Преподаватели',
      type: 'link'
    },{
      href: '/o_nas/administraciya',
      text: 'Администрация',
      type: 'link'
    },{
      href: '/o_nas/pomesheniya',
      text: 'Помещения',
      type: 'link'
    }]
};

export default class NavMenu extends PureComponent {
  render () {
    const mini = this.props.mini ? 'mini' : '';
    return (
      <Media>
        {({ breakpoints, currentBreakpoint }) => {
          if (breakpoints[currentBreakpoint] >= breakpoints.tabletLandscape)
            return (
            <nav className={"navmenu " + mini}>
              <ul className="navmenu__list">
                <li className="navmenu__item">
                  <Link href="">
                    <a>Главная</a>
                  </Link>
                </li>
                <li className="navmenu__item">
                  <Dropdown items={menu.toStudents} defaultText="Обучение"/>
                </li>
                <li className="navmenu__item">
                  <Dropdown items={menu.toAbituriens} defaultText="Поступление"/>
                </li>
                <li className="navmenu__item">
                  <Dropdown items={menu.o_nas} defaultText="О колледже"/>
                </li>
                <li className="navmenu__item">
                  <Link href="/auth/">
                    <a>Войти/Зарегистрироваться</a>
                  </Link>
                </li>
              </ul>
              <style jsx>{styles}</style>
            </nav>
          )
          return (
            <nav className="navmenu">
            <Humburger>
              <ul className="navmenu__list">
                <li className="navmenu__item">
                  <Link href="">
                    <a>Главная</a>
                  </Link>
                </li>
                <li className="navmenu__item">
                  <Dropdown items={menu.toStudents} defaultText="Обучение"/>
                </li>
                <li className="navmenu__item">
                  <Dropdown items={menu.toAbituriens} defaultText="Поступление"/>
                </li>
                <li className="navmenu__item">
                  <Dropdown items={menu.o_nas} defaultText="О колледже"/>
                </li>
                <li className="navmenu__item">
                  <Link href="/auth/">
                    <a>Войти/Зарегистрироваться</a>
                  </Link>
                </li>
              </ul>
            </Humburger>
              <style jsx>{styles}</style>
            </nav>
          )
        }
        }
      </Media>
    )
  }
}
