import * as React from 'react'
import { useState, useEffect } from 'react'

import QuestionDetails from './QuestionDetails'
import EmptyQuestionMessage from './EmptyQuestionMessage'
import Loader from './Loader'
import NewQuestion from './NewQuestion'

const QuestionList = () => {

  const questionTags = [
    { label: 'Ruby', value: 0 },
    { label: 'Rails', value: 1 },
    { label: 'React', value: 2 },
    { label: 'Bootstrap', value: 3 },
    { label: 'JS', value: 4 },
    { label: 'Data Science', value: 5}
  ]

  const [questionList, setQuestionList] = useState([])
  const [selectedOption, setSelectedOption ] = useState(questionTags[0].value)
  const [isShowAlert, setIsShowAlert ] = useState(true)
  const [isShowLoader, setIsShowLoader] = useState(true)

  const url = '/api/v1/questions'

  const fetchQuestions = () => {
    setIsShowLoader(false)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setQuestionList(data)

      if (data.length == 0) {
        setIsShowAlert(true)
      } else {
        setIsShowAlert(false)
      }
    })
    .catch((error) => console.log('error', error))
  }

  const updateSelectedItem = (event) => {
    setIsShowLoader(false)
    setIsShowAlert(false)
    setQuestionList([])
    setSelectedOption(event.target.value)

    fetch(url + `?tags=${questionTags[event.target.value].label}`)
    .then((response) => response.json())
    .then((data) => {
      setQuestionList(data)
      if (data.length == 0) {
        setIsShowAlert(true)
        setIsShowLoader(true)
      }
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
        <button type="button" className="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Question
        </button>
        <select name="" id="" className="form-select form-select-lg" value={selectedOption} onChange={event => updateSelectedItem(event)}>
          {questionTags.map(tag => (
            <option key={tag.value} value={tag.value}> {tag.label} </option>
          ))}
        </select>
        {questionList.length > 0 ?
          questionList.map((question) =>
            <QuestionDetails question={question} key={question.id}/>
          ) : <Loader isShowLoader={isShowLoader}/>
        }
        {
          isShowAlert &&  <EmptyQuestionMessage tagname={questionTags[selectedOption].label}/>
        }
      </div>
      <NewQuestion />
    </div>
  )

}

export default QuestionList
