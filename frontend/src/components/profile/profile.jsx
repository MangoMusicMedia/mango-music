import { connect } from 'react-redux';
import ProfileHeader from "./profile_header";
import { requestUser } from "../../actions/user_actions";
import { useEffect } from 'react';
import { fetchPostsByUser } from '../../actions/post_actions';
import ProfilePost from './profile_post';

const Profile = props => {

  useEffect(() => {
    props.requestUser(props.match.params.id);
    props.fetchPostsByUser(props.match.params.id);
    window.scrollTo(0, 0);
  }, []);

  return props.user && props.posts ? (
    <div className='profile-outer'>
      <div className='profile-inner'>
        <ProfileHeader currentUser={props.currentUser} posts={props.posts} user={props.user}/>
      {props.posts.length ? (
        <ul className='profile-inner__container'>
          {props.posts.map((post, idx) => (
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
    user: state.entities.users,
    currentUser: state.session.user,
    loggedIn: state.session.isAuthenticated,
    posts: Object.values(state.entities.posts)
  }
}

export default connect(mapStateToProps, { requestUser, fetchPostsByUser })(Profile);
