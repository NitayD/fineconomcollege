import React, { PureComponent } from 'react'

import styles from 'styles/abiturientam/Specialnosti.scss'

class TermsAndPaymentTable extends PureComponent {
  getRow ({ payment, startFrom, term }, index) {
    return (
      <tr className="specialnost__row" key={`${index}-specialnost-table-key`}>
        <td className="specialnost__col">{ startFrom }</td>
        <td className="specialnost__col">{ term }</td>
        <td className="specialnost__col">{ payment }</td>
        <style jsx>{styles}</style>
      </tr>
    )
  }
  render () {
    return (
      <table className="specialnost__table">
        <thead>
          <tr className="specialnost__row">
            <td className="specialnost__col">Начало</td>
            <td className="specialnost__col">Срок</td>
            <td className="specialnost__col">Оплата в год</td>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(this.getRow)}
        </tbody>
        <style jsx>{styles}</style>
      </table>
    )
  }
}

export default TermsAndPaymentTable