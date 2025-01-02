import * as React from 'react'

class QuestionDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likeCount: this.props.question.likes_count,
      disLikeCount: this.props.question.dislikes_count
    }

    this.updateLikeCount = this.updateLikeCount.bind(this)
    this.updateDisLikeCount = this.updateDisLikeCount.bind(this)
  }

  updateLikeCount() {
    this.setState(function(state) {
      return {
        likeCount: state.likeCount + 1
      }
    })

    this.updateQuestionCounter({ count_for: 'like'})
  }

  updateDisLikeCount() {
    this.setState(function(state) {
      return {
        disLikeCount: state.disLikeCount + 1
      }
    })

    this.updateQuestionCounter({ count_for: 'dislike'})
  }

  updateQuestionCounter = (data) => {
    const url = `/api/v1/questions/${this.props.question.id}/update_counter`

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('data', data)
    })
    .catch((error) => console.log('error', error))
  }

  render(){
    return(
      <div className="card rounded-0 mt-3" key={this.props.question.id}>
        <div className="card-body">
          <h3 className="card-title"> { this.props.question.title} </h3>
          <p className="lead">
            <span className='badge bg-primary'>{this.props.question.tag}</span>
          </p>

          <button type="button" className="btn btn-primary position-relative" onClick={this.updateLikeCount} style={{marginRight: 1 + 'em'}}>
            Like
            { this.state.likeCount > 0 ?
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.state.likeCount}</span> :
              ''
            }
          </button>

          <button type="button" className="btn btn-primary position-relative" onClick={this.updateDisLikeCount}>
            Dislike
            { this.state.disLikeCount > 0 ?
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.state.disLikeCount}</span> :
              ''
            }
          </button>
        </div>
      </div>
    )
  }
}

export default QuestionDetails
