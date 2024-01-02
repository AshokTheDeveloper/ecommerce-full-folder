// Write your code here
import {Component} from 'react'
import './index.css'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  renderActionMovies = () => {
    const {moviesList} = this.props
    const filteredMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    return filteredMovies
  }

  renderComedyMovies = () => {
    const {moviesList} = this.props
    const filteredMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    return filteredMovies
  }

  render() {
    const actionMovies = this.renderActionMovies()
    const comedyMovies = this.renderComedyMovies()
    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-image"
        />
        <div className="movies-bg-container">
          <div className="movies-container action">
            <h1 className="movies-heading">Action Movies</h1>
            <MoviesSlider movieDetails={actionMovies} />
          </div>
          <div className="movies-container">
            <h1 className="movies-heading">Comedy Movies</h1>
            <MoviesSlider movieDetails={comedyMovies} />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
