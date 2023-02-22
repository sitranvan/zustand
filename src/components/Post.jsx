import React, { useEffect } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import postStore from '../store/postStore'

function Post() {
    const { fetch, posts, loading } = postStore((state) => state)

    useEffect(() => {
        fetch()
    }, [fetch])
    return (
        <div className='post'>
            <h2>Post</h2>

            {loading ? (
                <div style={{ textAlign: 'center', marginBottom: 10 }}>
                    <BeatLoader color='blue' loading={loading} />
                </div>
            ) : (
                <div className='post-content'>
                    {posts.length > 0 && posts.map((item) => <p key={item.id}>{item.title}</p>)}
                </div>
            )}
        </div>
    )
}

export default Post
