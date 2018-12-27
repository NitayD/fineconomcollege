import React, { Component } from 'react'
import PopupLink                from 'components/popup/PopupLink'
import InputMask                from 'react-input-mask'
import axios                    from 'axios'
import { connect }              from 'react-redux'
import { closePopupWith }       from 'actions/popup'

class CallMe extends Component {
  state = {
    value: '',
    status: 'await'
  }
 
  onChange (event) {
    this.setState({
      value: event.target.value
    });
  }

  sendOrder() {
    if (this.state.value.length !== 18) return
    axios.post('http://89.223.94.209:2020/createorderphone', {
      phone: this.state.value,
      locale: 'Русский',
      message: 'Прошу перезвонить мне'
    }).catch((err) => {
      this.setState({
        status: 'fail'
      });
    })
    this.setState({
      status: 'success'
    });
    this.props.closePopupWith()
  }

  render () {
    const { status } = this.state
    return (
      <div ref={this.header} className='wrap unical_footer_class'>
        <p>{ status === 'await' ? 
          <PopupLink popupInner={
            <div className="form form__unical01 d-flex flex-column align-items-center">
              <h5>Оставьте ваш номер телефона, и мы вам перезвоним</h5>
              <InputMask mask="+7 (999) 999-99-99" maskChar={null} onChange={this.onChange.bind(this)} />
              <button className={`${this.state.value.length === 18 ? 'current' : ''}`} onClick={this.sendOrder.bind(this)}>
                Перезвонить
              </button>
            </div>
          }>
            Перезвоните мне
          </PopupLink>
          : 'Ваша заявка отсправлена'}
        </p>
        <i className="icon-phone"/>
        <style jsx global>{`
          .form__unical01 button {
            display: inline-block;
            font-size: 20px;
            line-height: 20px;
            padding: 7.5px 12.5px;
            position: relative;
            color: white;
            background-color: #7C4DFF;
            white-space: nowrap;
            border: none;
          }
          .form__unical01 input {
            display: inline-block;
            font-size: 20px;
            line-height: 20px;
            padding: 7.5px 12.5px;
            position: relative;
            color: #7C4DFF;
            background-color: white;
            white-space: nowrap;
            border: 0 solid #7C4DFF;
            border-bottom-width: 1px;
            border-left-width: 1px;
          }
          .unical_footer_class.wrap {
            position: fixed;
            right: 60px;
            bottom: 40px;
            border-radius: 200px;
            background-color: #7C4DFF;
            min-width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            font-size: 40px;
            cursor: pointer;
            overflow: hidden;
          }
          @media screen and (max-width: 991px) {
            .unical_footer_class.wrap {
              min-width: 60px;
              height: 60px;
              font-size: 32px;
              right: 30px;
              bottom: 20px;
            }
            .unical_footer_class i {
              right: 30px !important;
            }
          }
          .unical_footer_class.wrap:hover p {
            margin-right: 0;
            opacity: 1;
            transition: all 0.3s ease-out, opacity 0.5s ease 0s;
          }
          .unical_footer_class p {
            opacity: 0;
            transition: all 0.3s ease-out, opacity 0.5s ease 0.2s;
            font-size: 20px;
            display: flex;
            position: relative;
            margin-right: -1000px;
            white-space: nowrap;
            padding: 0 75px 0 30px;
          }
          .unical_footer_class i {
            position: absolute;
            top: 50%;
            right: 40px;
            transform: translate(50%, -50%);
          }
        `}</style>
      </div>
    )
  }
}

export default connect(()=>{return {}}, {
  closePopupWith
})(CallMe)