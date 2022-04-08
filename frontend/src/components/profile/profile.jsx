import { connect } from 'react-redux';
import ProfileHeader from "./profile_header";
import { requestUser } from "../../actions/user_actions";
import { useEffect, useState } from 'react';
import { fetchPostsByUser } from '../../actions/post_actions';
import PostIndex from './profile_posts_index';

const Profile = props => {

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    props.requestUser();
    props.fetchPostsByUser(props.userId).then((res) => {
      setUserPosts(res.posts)
    });
    window.scrollTo(0, 0);
  }, []);

  console.log(props);
  return (
    <div>
      <div className="profile-wrapper">
        <ProfileHeader props={props} userPosts={userPosts}/>
      </div>
      <PostIndex props={props} userPosts={userPosts}/>
    </div>
  )

  // scroll to top button in profile
}

// export default Profile


const mapStateToProps = (state, ownProps) => {
  // console.log("State: ", state)
  // console.log("ownProps: ", ownProps)

  return {
    userId: ownProps.match.params.id,
    user: state.entities.users[ownProps.match.params.id],
    currentUser: state.session.user,
    loggedIn: state.session.isAuthenticated,
    posts: Object.values(state.entities.posts)

  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    requestUser: () => dispatch(requestUser(ownProps.match.params.id)),
    fetchPostsByUser: () => dispatch(fetchPostsByUser(ownProps.match.params.id)),
    // fetch liked posts
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
