import PropTypes from 'prop-types';
import Blogs from '../Blogs/Blogs';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookMark}) => {

    const {title, cover, author, author_img, post_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 ' src={cover}></img>
            <div className='flex justify-between'>
                <div className='flex gap-4 mb-6'>
                    <img className='w-10 rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='text-xl'>{author}</h2>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <span>{reading_time} min read</span>

                    <button 
                    onClick={() => handleAddToBookMark(blog)}
                    className='ml-2 text-2xl text-red-600'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-2'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""></a> #{hash}</span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes= {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired
    
}
export default Blog;