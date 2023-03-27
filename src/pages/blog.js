import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogCard } from "../components/blogCard";
import { getPostsAsync } from "../redux/thunk";

export const Blog = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.order.allPosts);

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);

  return (
    <>
      {posts.length === 0 && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
      {posts.map((item) => {
        return (
          <BlogCard
            key={item.id}
            title={item.title} 
            body={item.body}
          />);
      })}
    </>
  );
};
