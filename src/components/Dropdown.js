import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from 'styles/Dropdown.scss'

class Dropdown extends PureComponent {
  getItemByType (item, key) {
    switch(item.type) {
      case 'link':
        return <DropdownLinkItem key={key} href={item.href} text={item.text}/>;
      case 'dropdown':
        return <DropdownSubDropdownItem key={key} href={item.href} text={item.text} items={item.items}/>;
      default:
        return <DropdownItem key={key} text={item.text}/>;
    }
  }
  render () {
    let subDropdown;
    this.props.subdropdown ? subDropdown = 'sub' : subDropdown = ''
    return (
      <div className={"dropdown " + subDropdown}>
        <div className="dropdown__default">
          { this.props.defaultText }
        </div>
        <ul className="dropdown__list">
          {this.props.items.map(this.getItemByType)}
        </ul>
        <style jsx>{styles}</style>
      </div>
    )
  }
}

const DropdownLinkItem = function(props) {
  return (
    <li key={props.key} className="dropdown__item">
      <Link href={ props.href }>
        <a>{ props.text }</a>
      </Link>
      <style jsx>{styles}</style>
    </li>
  )
}

const DropdownItem = function(props) {
  return (
    <li key={props.key} className="dropdown__item">
      { props.text }
        <style jsx>{styles}</style>
    </li>
  )
}

const DropdownSubDropdownItem = function(props) {
  return (
    <li key={props.key} className="dropdown__item subdropdown">
      <Dropdown subdropdown={true} items={props.items} defaultText={props.text}/>
      <style jsx>{styles}</style>
    </li>
  )
}

export default Dropdown