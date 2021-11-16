import React, {useState} from "react";
import Comments from "./Comments"

function VideoInfo({video}){
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.upvotes)
    const [commentsDisplayed, setCommentsDisplayed] = useState(true)

    function handleCommentButton(){
        setCommentsDisplayed(!commentsDisplayed)
    }

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={() => setUpvotes(upvotes => upvotes+=1)}>{upvotes}👍</button>
            <button onClick={() => setDownvotes(downvotes => downvotes-=1)}>{downvotes}👎</button>
            <br></br>
            <button onClick={handleCommentButton}>{commentsDisplayed ? "Hide Comments" : "Show Comments"}</button>
            <Comments comments = {video.comments} commentsDisplayed={commentsDisplayed}/>
        </div>
    )
}

export default VideoInfo