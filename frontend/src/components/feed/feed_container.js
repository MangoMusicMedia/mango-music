import { connect } from 'react-redux';
import Feed from './feed';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = state => ({
  posts: Object.values(state.entities.posts)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);