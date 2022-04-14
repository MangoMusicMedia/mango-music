import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Comment = (props) => {

    let [comm, setComm] = useState(props.comment.message);
    let [initialComm, setInitialComm] = useState(props.comment.message);

    const update = field => {
        return e => {
            if (field === 'comm') {
                setComm(e.target.value);
            }
        }
    }

    const handleEdit = e => {
        e.preventDefault();
        const data = {
            author: props.currentUser.id,
            message: comm
        }
        props.editComment(props.post._id, props.comment._id, data)
            .then(() => props.deleteComment(props.post._id, props.comment._id))
    }

    const { comment } = props;

    return(
        <li>
            <div className="inner-comment-wrapper">
                <div className="upper-wrapper">
                    <Link to={`/users/${comment.author}`}>{props.users[comment.author] && props.users[comment.author].username}</Link>
                    {props.currentUser.id === comment.author ? (
                    <div className="btn-wrapper">
                        {comm === initialComm ? (
                            null
                            ) : (
                            <button onClick={handleEdit} >Edit</button>
                        )}
                        <button onClick={() => props.deleteComment(props.post._id, comment._id)}>Remove</button>
                    </div>
                    ) : (
                        null
                    )}
                </div>
                {props.currentUser.id === comment.author ? (
                    <form className="new-comment-wrapper">
                        <div className="text-wrapper">
                            <textarea onChange={update('comm')} value={comm} />
                        </div>
                    </form>
                ) : (
                <h1 className="new-comment-wrapper">{comment.message}</h1>
                )}
            </div>
        </li>
    )
}

export default Comment;