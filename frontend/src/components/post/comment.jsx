import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Comment = (props) => {

    // console.log(props.comment, "comment obj")
    
    // console.log(props.comment.message, "comm message")
    let [comm, setComm] = useState(props.comment.message);
    // console.log(props.comm, "comm")

    const update = field => {
        return e => {
            if (field === 'comm') {
                setComm(e.target.value);
            }
        }
    }

    const handleEdit = e => {
        // console.log(comm, "from handle edit")
        e.preventDefault();
        const data = {
            author: props.currentUser.id,
            message: comm
        }
        props.editComment(props.post._id, props.comment._id, data)
            .then(() => props.deleteComment(props.post._id, props.comment._id))
    }

    const { comment } = props;
    // console.log(comment)
    // console.log(props.post._id)
    // console.log(comment._id)
    // console.log(comm)

    return(
        <li>
            <div className="inner-comment-wrapper">
                <Link to={`/users/${comment.author}`}>{props.users[comment.author] && props.users[comment.author].username}</Link>
                {props.currentUser.id === comment.author ? (
                    <form action="" className="new-comment-wrapper">
                        <div className="text-wrapper">
                            <textarea onChange={update('comm')} value={comm} />
                        </div>
                        <div className="btn-wrapper">
                            <button onClick={handleEdit} >Edit</button>
                            <button onClick={() => props.deleteComment(props.post._id, comment._id)}>Remove</button>
                        </div>
                    </form>
                ) : (
                    <h1>{comment.message}</h1>
                )}
            </div>
        </li>
    )
}

export default Comment;