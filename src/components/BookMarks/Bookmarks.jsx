import BookMark from "../BookMark/BookMark";
import PropTypes from "prop-types";

const Bookmarks = ({bookMarks}) => {
    return (
        <div className="md:w-1/3 p-4 m-4 rounded-xl bg-gray-50">
            <h1 className="text-xl font-bold text-center">BoookMarked Blogs: {bookMarks.length}</h1>
            {
                bookMarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

Bookmarks.propTypes= {
    bookMarks: PropTypes.array
}
export default Bookmarks;