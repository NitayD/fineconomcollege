import React, { Fragment } from 'react'

function getMounthString(mounthNumber) {
  switch (mounthNumber) {
    case 0: return 'Янв'
    case 1: return 'Фев'
    case 2: return 'Мар'
    case 3: return 'Апр'
    case 4: return 'Май'
    case 5: return 'Июн'
    case 6: return 'Июл'
    case 7: return 'Авг'
    case 8: return 'Сен'
    case 9: return 'Окт'
    case 10: return 'Ноя'
    case 11: return 'Дек'
    default: return ''
  }
}
const ParsedDate = ({date}) => {
    let dateParsed
    if (typeof date === 'number')
        dateParsed = new Date(date)
    else if (typeof date === 'object' || typeof date === 'string')
        dateParsed = new Date(Date.parse(date))
    else
        dateParsed = new Date()
    return (
        <Fragment>
        { `${dateParsed.getDate()} ${getMounthString(dateParsed.getMonth())} ${dateParsed.getFullYear()}` }
        </Fragment>
    )
}
export default ParsedDate