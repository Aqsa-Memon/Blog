'use client'
import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Function to add a new comment
  const addComments = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments)); 
    }
  };

  // Function to delete a comment
  const deleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments)); // Update localStorage
  };

  return (
    <div className="p-4 sm:px-6 md:px-8">
      <h1 className="text-3xl font-bold mt-4 text-yellow-500 text-center sm:text-left">Comments</h1>
      <div className="mt-4 sm:mt-6">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment"
          className="border border-gray-300 rounded-lg w-full sm:w-80 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <br />
        <button
          className="mt-3 w-full sm:w-36 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition duration-300"
          onClick={addComments}
        >
          Add Comment
        </button>
      </div>
      <div className="mt-6 sm:mt-8">
        <h2 className="text-lg font-semibold text-gray-700">All Comments:</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500 mt-2">No comments yet. Add your comment!</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {comments.map((data, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
              >
                <span className="text-gray-800">{data}</span>
                <button
                  onClick={() => deleteComment(index)}
                  className="text-red-500 hover:text-red-600 transition duration-300"
                >
                  <FaTrash size={18} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
