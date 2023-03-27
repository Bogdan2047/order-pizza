import "./css/blogCard.css";

export const BlogCard = ({ title, body }) => {
  return (
    <>
      <div class="card">
        <div class="card-header">
          <h3>{title}</h3>
        </div>
        <div class="card-body">
          <h5 class="card-title">{body}</h5>
        </div>
      </div>
    </>
  );
};
