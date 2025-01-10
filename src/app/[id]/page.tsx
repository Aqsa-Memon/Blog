"use client";
import React from 'react';
import { Blogs, blogs } from "@/blogs/blogs";
import CommentBox from '@/components/comment';

export default function Blog(props: { params: { id: string } }) {
    const blogId = parseInt(props.params.id);
    const getBlogs = blogs.find((item: Blogs) => item.id === blogId);

    return getBlogs ? <BlogContent blog={getBlogs} /> : <BlogNotFound />;
}

function BlogContent({ blog }: { blog: Blogs }) {
    return (
        <div className="min-h-screen bg-white p-6">
            <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg p-6">
                <h1 className="text-4xl font-semibold text-gray-800 mb-4">{blog.title}</h1>
                <p className="text-gray-600 mb-4">
                    By <span className="font-medium">{blog.author}</span> on {blog.date}
                </p>
                <div className="text-gray-700 leading-relaxed">
                    <p>{blog.content}</p>
                </div>
                <CommentBox />
            </div>
        </div>
    );
}

function BlogNotFound() {
    return <h1 className="text-center text-2xl font-bold text-red-500 mt-8">Blogs Not Found</h1>;
}
