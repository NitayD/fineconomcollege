import React, { PureComponent } from 'react'
import Link from 'next/link'
import styles from 'styles/Dropdown.scss'

let linksCounter = 0

class Dropdown extends PureComponent {
  getItemByType (item, key) {
    ++linksCounter;
    const { text, href, items, type } = item
    switch(type) {
      case 'link':
        return <DropdownLinkItem key={String(linksCounter) + 'DropdownLink'} href={href} text={text}/>;
      case 'dropdown':
        return <DropdownSubDropdownItem key={String(linksCounter) + 'DropdownLink'} text={text} items={items}/>;
      default:
        return <DropdownItem key={String(linksCounter) + 'DropdownLink'} text={text}/>;
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
  const { text, href } = props;
  return (
    <li className="dropdown__item">
      <Link href={ href }>
        <a>{ text }</a>
      </Link>
      <style jsx>{styles}</style>
    </li>
  )
}

const DropdownItem = function(props) {
  const { text } = props;
  return (
    <li className="dropdown__item">
      { text }
        <style jsx>{styles}</style>
    </li>
  )
}

const DropdownSubDropdownItem = function(props) {
  const { text, items } = props;
  return (
    <li className="dropdown__item subdropdown">
      <Dropdown subdropdown={true} items={ items } defaultText={ text }/>
      <style jsx>{styles}</style>
    </li>
  )
}

export default Dropdown