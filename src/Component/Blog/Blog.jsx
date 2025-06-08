import React from 'react';

const Blog = ({blog}) => {
   
    return (
        <div>
            <h1>{blog.id}</h1>
            {/* <img src={blog.cover} alt="" />
            <h2>{blog.title}</h2> */}
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={blog.cover}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;