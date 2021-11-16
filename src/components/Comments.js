import React from "react";

function Comments({comments, commentsDisplayed}){
    const commentsElements = comments.map(comment => {
        return (
            <div key={comment.id}>
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
            </div>
        )
    })


    return (
        <div>
            {commentsDisplayed ? <h2>{commentsElements.length} Comments</h2>: null}
            {commentsDisplayed ? commentsElements: null}
        </div>
    )
}

export default Comments