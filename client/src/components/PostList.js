import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './postList.css'

function PostList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("api/v1/posts")
            .then(posts => posts.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    return (
        <div className='primary'>
            Posts:
            <div className='list'>
            {posts.map(post => <PostListItem {...post} key={post.id} />)}
            </div>
            <Link to="/posts/new">Add a New Post</Link>
        </div>
    )
}

function PostListItem({ id, title, content, user: { email } }) {
    return (
        // <div>
        //     <Link to={"/posts/edit/" + id}>
        //         <div>
        //             {title} - {content}
        //         </div>
        //         <div>
        //             {email}
        //         </div>
        //     </Link>
        // </div>
        <div className='item'>
            <div className='head'>
                <Link to={"/posts/edit/" + id}>{title}</Link>
            </div>
            <div className='body'>
                {content}
            </div>
            <div className='foot'>
                {email}
            </div>
        </div>
    )
}

export default PostList
