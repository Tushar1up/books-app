import React from 'react'
import Header from '../Components/Header'

function About() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Our Book App</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our Book App, your ultimate destination for discovering, reading, and organizing your favorite books. Whether you're a casual reader or a book enthusiast, our platform offers a seamless experience that connects you with a vast collection of titles across all genres.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our app is designed to cater to your personal reading preferences. Easily browse through our extensive library, create customized reading lists, and explore book recommendations based on your favorite genres and authors.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          With a user-friendly interface and powerful search tools, finding your next great read has never been easier. Dive into your literary adventures with us, and stay up-to-date with the latest releases and hidden gems in the literary world!
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Happy Reading!
        </p>
      </div>
    </>
  )
}

export default About
