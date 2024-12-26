import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import QuestionList from './QuestionList'

const  Welcome = () => {
  return (
    <div className='container'>
      <QuestionList />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('welcome'));
  root.render(<Welcome />);
})

export default Welcome
