import React,{ Component } from 'react'
import DateInput from './dateInput'
import HomePage from './homePage'

class picOfDay extends Component {
    state = {
      date: new Date(),
      photo: ''
    }
    randomDate = (start, end) => {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
    }
  
    handleClick = (date) => {
      let ranDate = this.randomDate(new Date(1995, 0o6 - 1, 16), new Date())
      this.changeDate(ranDate)
    }
    formatDate = (date) => {
      return date.toISOString().split('T')[0]
    }
    changeDate = (date) => {
      this.setState({ date: date })
      this.getPhotoByDate(this.formatDate(date))
    }
  
    getPhotoByDate = date => {
      fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=Cj8Qbeb7PdHM6KF79fd99lf5obQBRK16JRi4xwrc`)
        .then((response) => {
          return response.json()
        })
        .then((photoData) => {
          this.setState({ photo: photoData })
        })
    }
    
    componentDidMount(){
      fetch(`https://api.nasa.gov/planetary/apod?api_key=Cj8Qbeb7PdHM6KF79fd99lf5obQBRK16JRi4xwrc`)
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          this.setState({ photo: json })
        })
    }
  
    
  
  
    render() {
    return (
<>
<div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <DateInput
      date={this.state.date}
      changeDate={this.changeDate}
      handleClick={this.handleClick}
    />
    <div style={{ display: 'flex', alignItems: 'flex-start', border: '5px solid #FFFFFF', borderRadius: '10px', padding: '10px', margin: '20px 0', backgroundColor: '#4863A0' }}>
      {this.state.photo && (
        <>
          <img src={this.state.photo.url} alt={this.state.photo.title} style={{ maxWidth: '50%', border: '5px solid #FFFFFF',borderRadius: '10px', marginRight: '20px' }} />
          <div>
            <h2  style={{ maxWidth: '100%', marginRight: '20px' }}>{this.state.photo.title}</h2>
            <p  style={{ maxWidth: '100%', marginRight: '20px' }}>{this.state.photo.explanation}</p>
          </div>
        </>
      )}
    </div>
  </div>
</>



      
    )
  }
  }

export default picOfDay;