import React from 'react'
import axios from 'axios'

class Posts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get('/api/posts')
      .then(response => {
        this.setState({ posts: response.data.posts });
      })
  }

  allPosts = () => (
    this.state.posts.map(post => (
      <li key={post}>{post}</li>
    ))
  )

  render() {
    return (
      <div>
        <ul>
          {this.allPosts()}
        </ul>
      </div>
    )
  }
}

export default Posts
