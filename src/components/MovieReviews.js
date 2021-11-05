// Code MovieReviews Here
import React from 'react'

export default function MovieReviews({reviews}) {
    return (
        <ul className="review-list">
           {reviews.map(review => <li className="review">{review.display_title}</li>)}
        </ul>
    )
}

