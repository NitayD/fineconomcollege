import React, { Component }   from 'react'
import axios                  from 'axios'
import { Link }               from '/../routes'
import { connect }            from 'react-redux'
import { initCategory }       from 'actions/categoryes'

class CategoryBtn extends Component {
  getDataById(id) {
    const result = this.props.data.find(el => el._id === id ? true : false)
    if (result)
      return result
    else
      axios.get(`${process.env.API_ADDRESS}/blog_category/${id}`)
      .then((ress) => {
        console.log(ress)
        this.props.initCategory(ress.data)
      })
      .catch((err) => {
        console.log(err);
        console.dir(err);
      })
  }
  render () {
    const { id, className } = this.props
    if (id) {
      const data = this.getDataById(id)
      if (!data) return <button onClick={() => this.getDataById(id)}>
        Retry
      </button>
      const { Название, key } = data
      return (
        <Link route='news_with_filter' params={{category: key}}>
          <a className={`${className ? className : ''}`}>
            { Название }
            <style jsx>{`
              a {
                display: inline-block;
                background-color: #7C4DFF;
                color: white;
                padding: 5px 10px;
                margin-left: 5px;
                margin-right: 5px;
              }
              a:first-child {
                margin-left: 0;
              }
              a:last-child {
                margin-right: 0;
              }
            `}</style>
          </a>
        </Link>
      )
    } else {
      return <span/>
    }
  }
}

function mapStateToProps({ categoryes }) {
  return {
    data: categoryes.toJS().data
  }
}

export default connect(mapStateToProps, {
  initCategory
})(CategoryBtn)
