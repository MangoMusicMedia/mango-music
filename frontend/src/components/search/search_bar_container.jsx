import { openModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { search } from "../../util/spotify_api_util";
import { createPost } from "../../actions/post_actions"

const mapStateToProps = state => {
  console.log("State: ", state)
  return {
    currentUser: state.session.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    search: (searchData) => search(searchData),
    createPost: (postData) => dispatch(createPost(postData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);