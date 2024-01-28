import React, { useState } from 'react'
import PostItem from './PostItem'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'

const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: Thumbnail1,
    category: 'education' ,
    title: 'This is the title of the very first post on this blog. ' ,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repel',
    authorlD: 3
  },
  {
    Id:'2',
    thumbnail:Thumbnail2,
    category : 'science',
    title: 'This is the title of the very second post on this blog. ',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authorID: 1
  },
  {
    Id:'3',
    thumbnail:Thumbnail3,
    category : 'weather',
    title: 'This is the title of the very second post on this blog. ',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authorID: 13
  },
  {
    Id:'4',
    thumbnail:Thumbnail4,
    category : 'farming',
    title: 'This is the title of the very second post on this blog. ',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authorID: 11
  },
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    
   <section className="posts">
      <div className="container posts_container">
        {
          posts.map(({id, thumbnail, category, title, desc,authorlD}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorlD} />) 
        }
      </div>
   </section>

  )
}

export default Posts