import * as React from 'react'
import * as ReactDOM from 'react-dom'

const QuestionList = () => {

  const questionList = [
    { title: 'How to check if a key is present in a Hash?', tag: 'Ruby'},
    { title: 'What is the difference between strings and symbol?', tag: 'Ruby'},
    { title: 'What happens if you have two object with same keys in Hash?', tag: 'Ruby'},
    { title: 'How to delete a given key from Hash?', tag: 'Ruby'},
    { title: 'How to check if two hashes are identical?', tag: 'Ruby'},
    { title: 'How to combine two hashes in Ruby?', tag: 'Ruby'},
    { title: 'How to get unique keys from two hashes?', tag: 'Ruby'},
    { title: 'What does the hash key?, key?, member? and include? methods in a hash?', tag: 'Ruby'},
    { title: 'What are blocks in Ruby?', tag: 'Ruby'},
    { title: 'Does the order of keys matters to compare two hashes in Ruby?', tag: 'Ruby'}
  ]

  return (
    <div className='row'>
      <div className="col-lg-10 mx-auto">
        {
          questionList.map((question) =>
            <div className="card rounded-0 mt-3">
              <div className="card-body">
                <h3 className="card-title"> { question.title} </h3>
                <p className="lead">
                  <span className='badge bg-primary'>{question.tag}</span>
                </p>
              </div>
            </div>
          )
        }

      </div>
    </div>
  )

}

export default QuestionList
