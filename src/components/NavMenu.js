import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from 'styles/NavMenu.scss'
import Dropdown from './Dropdown'

const menu = {
  toStudents: [{
    href: '/students',
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
  about: [{
      href: '/about/istoriya',
      text: 'История колледжа',
      type: 'link'
    },{
      href: '/about/klubi',
      text: 'Клубы',
      type: 'link'
    },{
      href: '/about/prepodavateli',
      text: 'Преподаватели',
      type: 'link'
    },{
      href: '/about/administraciya',
      text: 'Администрация',
      type: 'link'
    },{
      href: '/about/pomesheniya',
      text: 'Помещения',
      type: 'link'
    }]
};

export default class NavMenu extends PureComponent {
  render () {
    const mini = this.props.mini ? 'mini' : '';
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
            <Dropdown items={menu.about} defaultText="О колледже"/>
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
  }
}
