import React, { useState } from 'react'
//import Posts from './../components/Posts';
import { DUMMY_POSTS } from '../data';
import PostItem from '../components/PostItem';

const AuthorPosts = () => {
  const[posts,setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts__container">
      {posts.length > 0 ? <div className="ggg">
        {
          posts.map(({id, thumbnail, category, title, desc,authorlD}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorlD} />) 
        }
      </div> : <h2 className='center'>No posts found</h2>}
   </section>
  )
}

export default AuthorPosts