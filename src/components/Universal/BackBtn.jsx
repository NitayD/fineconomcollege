function backToLastWindow() {
  return window ? window.history.back() : false
}
const BackBtn = ({ withIcon, text }) => {
  return (
    <a onClick={backToLastWindow} className={`${withIcon ? 'icon' : ''}`}>
      { text ? text : 'Назад'}
      <style jsx>{`
        a {
          display: inline-block;
          font-size: 20px;
          line-height: 20px;
          padding: 7.5px 12.5px;
          position: relative;
          color: white;
          background-color: #7C4DFF;
        }
        a.icon {
          padding-left: 25px;
          margin-bottom: 15px;
        }
        a.icon:before {
          content: '\\21A9';
          position: absolute;
          top: 50%;
          left: 5px;
          transform: translateY(-50%);
        }
      `}</style>
    </a>
  )
}
export default BackBtn