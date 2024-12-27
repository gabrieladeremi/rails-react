import * as React from 'react'
import { useState, useEffect } from 'react'

import QuestionDetails from './QuestionDetails'
import EmptyQuestionMessage from './EmptyQuestionMessage'

const QuestionList = () => {

  const questionTags = [
    { label: 'All', value: 0 },
    { label: 'Ruby', value: 1 },
    { label: 'Rails', value: 2 },
    { label: 'React', value: 3 },
    { label: 'Bootstrap', value: 4 },
    { label: 'JS', value: 5 }
  ]

  const [questionList, setQuestionList] = useState([])
  const [selectedOption, setSelectedOption ] = useState(questionTags[0].value)

  const url = 'http://localhost:3000/api/v1/questions'

  const fetchQuestions = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setQuestionList(data)
    })
    .catch((error) => console.log('error', error))
  }

  const updateSelectedItem = (event) => {
    setQuestionList([])
    setSelectedOption(event.target.value)

    fetch(url + `?tags=${questionTags[event.target.value].label}`)
    .then((response) => response.json())
    .then((data) => {
      setQuestionList(data)
    })
    .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    fetchQuestions()
  },[])

  return (
    <div className='row'>
      <div className="col-lg-10 mx-auto mb-3">
        <p className="lead fw-bold">Filter questions by tags</p>
        <select name="" id="" className="form-select form-select-lg" value={selectedOption} onChange={event => updateSelectedItem(event)}>
          {questionTags.map(tag => (
            <option key={tag.value} value={tag.value}> {tag.label} </option>
          ))}
        </select>
        {questionList.length > 0 ?
          questionList.map((question) =>
            <QuestionDetails question={question} key={question.id}/>
          ) :
          <EmptyQuestionMessage tagname={questionTags[selectedOption].label}/> 
        }
      </div>
    </div>
  )

}

export default QuestionList
