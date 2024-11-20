import BookMark from "../BookMark/BookMark";
import PropTypes from "prop-types";

const Bookmarks = ({bookMarks, readingTime}) => {
    return (
        <div className="md:w-1/3 p-4 m-4 rounded-xl space-y-2 bg-gray-100">
            <div>
                <h2 className="font-bold bg-violet-100 text-purple-700 p-2 rounded-xl">Reading Time: 
                {readingTime}</h2>
                
            </div>
            <h1 className="text-xl font-bold text-center">BoookMarked Blogs: {bookMarks.length}</h1>
            {
                bookMarks.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

Bookmarks.propTypes= {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;