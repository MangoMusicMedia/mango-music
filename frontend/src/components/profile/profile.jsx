import { connect } from 'react-redux';
import ProfileHeader from "./profile_header";
import { requestUser } from "../../actions/user_actions";
import { useEffect } from 'react';
import { fetchPostsByUser } from '../../actions/post_actions';

const Profile = props => {

  useEffect(() => {
    props.requestUser();
    props.fetchPostsByUser(props.userId);
    window.scrollTo(0, 0);
  }, []);

  console.log(props);
  return (
    <div className="profile-wrapper">
      <ProfileHeader props={props}/>
    </div>
    // personal posts feed
  )

  // scroll to top button in profile
}

// export default Profile


const mapStateToProps = (state, ownProps) => {
  // console.log("State: ", state)
  // console.log("ownProps: ", ownProps)

  return {
    userId: ownProps.match.params.id,
    user: state.entities.user,
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
