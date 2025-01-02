import React, { useState } from 'react'

import ServerSideError from './ServerSideError'

const NewQuestion = () => {
  const questionTags = [
    { label: 'Ruby', value: 'Ruby' },
    { label: 'Rails', value: 'Rails' },
    { label: 'React', value: 'React' },
    { label: 'Bootstrap', value: 'Bootstrap' },
    { label: 'JS', value: 'JS' },
    { label: 'Data Science', value: 'Data Science'}
  ]

  const [ isServerSideError, setIsServerSideError ] = useState(false)
  const [serverErrors, setServerErrors ] = useState([])
  const [ formFields, setFormFields ] = useState({
    title: '',
    tag: questionTags[0].value
  })

  const handleFormFields = event => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value
    })
  }

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    createQuestion(formFields)
  }

  const createQuestion = (data) => {
    const url = `http://localhost:3000/api/v1/questions`

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
      if(data['status'] === 'failure') {
        setIsServerSideError(true)
        setServerErrors(data['data'])
      } else {
        setIsServerSideError(false)
        setServerErrors([])
      }
    })
    .catch((error) => console.log('error', error))
  }


  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Question</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={handleQuestionSubmit}>
            <div className="modal-body">
              { isServerSideError && <ServerSideError errors={serverErrors}/> }
              <div className="form-group">
                <label className="form-label mt-3 mb-3">Title</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-1"
                  value={formFields.title}
                  onChange={event => handleFormFields(event)}
                  name='title'
                />
              </div>
              <div className="form-group">
                <label className="form-label mt-3 mb-3">Select question tag</label>
                <select
                  className="form-select form-select-lg rounded-1"
                  value={formFields.tag}
                  onChange={event => handleFormFields(event)}
                  name='tag'
                  >
                  {questionTags.map(tag => (
                    <option key={tag.value} value={tag.value}> {tag.label} </option>
                  ))
                  }
                </select>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Submit Question</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default NewQuestion
