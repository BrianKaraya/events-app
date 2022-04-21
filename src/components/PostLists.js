import React, { Component } from 'react';
import axios from 'axios';
//import { response } from 'express';
import './PostLists.css';
import { Button } from './Button';

import { useAuth } from '../context/AuthProvider';
import { useHistory } from 'react-router-dom';

class PostLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    //https://j.typicode.com/postsonplaceholders
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      this.setState({ posts: response.data });
      console.log(response.data);
    });
  }
  render() {
    const { posts } = this.state;

    return (
      <div>
        <div className="posted">
          <h1>Events bulletin</h1>
          {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      </div>
    );
  }
}
export default PostLists;
