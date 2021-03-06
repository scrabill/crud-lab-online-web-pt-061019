import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({reviews: state.reviews})

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({type: 'ADD_REVIEW', text, restaurantId}),
  deleteReview: (id) => dispatch({type: 'DELETE_REVIEW', id})
  // addReview: (obj) => dispatch({type: 'ADD_REVIEW', obj})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
