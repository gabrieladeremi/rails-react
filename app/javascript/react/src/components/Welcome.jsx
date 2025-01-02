import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import QuestionList from './QuestionList'

class Welcome extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='mt-3 text-center'>Fullstack Interview Questionnaire</h1>
        <p className='mt-5 text-center fs-5'>Here you will find all you need to know and prepare for your next interview. The collection of questions not only
          help you in getting a better job but also in understanding the concepts much better.
        </p>
        <QuestionList />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('welcome'));
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);


export default Welcome
