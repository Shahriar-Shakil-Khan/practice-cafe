import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {
   
    return (
        <div className='m-2'>
            
            {/* <img src={blog.cover} alt="" />
            <h2>{blog.title}</h2> */}
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={blog.cover}
                    alt="Shoes" />
                </figure>
                <div className="card-body">

                    <div className="author flex justify-around items-center">
                        <h3>{blog.author}</h3>
                        <img className='w-16' src={blog.author_img} alt="" />
                        <FaBookmark  size={25}/>
                    </div>

                    <h2 className="card-title">{blog.title}</h2>
                        <div className='flex'>
                            {
                            blog.hashtags.map((hashtag=><p>{hashtag}</p>))
                            }
                        </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;