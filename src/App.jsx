import React from 'react'
import AddBlogForm from './components/AddBlogForm'
import BlogList from './components/BlogList'

const App = () => {
  return (
    <div className='p-20'>
    <AddBlogForm />
    <BlogList />
    </div>
  )
}

export default App