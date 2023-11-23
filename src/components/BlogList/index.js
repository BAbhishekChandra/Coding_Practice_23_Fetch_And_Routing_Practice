// Write your JS code here

import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsData} = props

  return (
    <div className="blog-list-container">
      {blogsData.map(item => (
        <BlogItem blogData={item} key={item.id} />
      ))}
    </div>
  )
}

export default BlogList
