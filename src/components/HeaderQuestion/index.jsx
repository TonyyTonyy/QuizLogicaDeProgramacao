import React from 'react'
import style from './style.module.css'
const HeaderQuestion = (props) => {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.QuestionContainer}>
          <h1>{props.question}</h1>
        </div>
      </div>
    </>
  )
}

export default HeaderQuestion