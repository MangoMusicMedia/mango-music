import { connect } from 'react-redux';
import ProfileHeader from "./profile_header";
import { requestUser } from "../../actions/user_actions";
import { useEffect, useState } from 'react';
import { fetchPostsByUser } from '../../actions/post_actions';
import { updateUserProfile } from '../../actions/user_actions';
import ProfilePost from './profile_post';

const Profile = props => {
  // const [userPosts, setUserPosts] = useState([]);
  
  useEffect(() => {
    props.requestUser(props.match.params.id);
    // props.fetchPostsByUser(props.userId).then((res) => {
    //   setUserPosts(res.posts)
    // });
    window.scrollTo(0, 0);
  }, [props.location.pathname])


  return props.user ? (
    <div className='profile-outer'>
      <div className='profile-inner'>
        <ProfileHeader updateUserProfile={props.updateUserProfile} currentUser={props.currentUser} posts={props.user.posts} user={props.user}/>
      {(props.user.posts) ? (
        <ul className='profile-inner__container'>
          {props.user.posts.map((post, idx) => (
              <ProfilePost key={idx} id={post._id} img={post.albumCoverURL} name={post.trackName} text={post.description}/>
          ))}
        </ul>
      ) : (
        <h1>Use the search bar to start sharing your favorite tunes.</h1>
      )}
      </div>
    </div>
  ) : null;
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.id,
    user: state.entities.users[ownProps.match.params.id],
    currentUser: state.session.user,
    loggedIn: state.session.isAuthenticated,
  }
}

export default connect(mapStateToProps, { requestUser, fetchPostsByUser, updateUserProfile })(Profile);
