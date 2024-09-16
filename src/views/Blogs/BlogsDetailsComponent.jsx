import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogDetail from '../../components/BlogDetail';
import BlogDetail2 from '../../components/BlogDetail2';
import BlogDetail3 from '../../components/BlogDetail3';
import BlogsSlider from '../../components/BlogsSlider';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import { getBlogs } from '../../utils/_BLOG';

const BlogsDetailsComponent = () => {
  const { slug } = useParams();
  console.log(slug, 'slug')
  const dispatch = useDispatch();
  const [singleBlogs, setSingleBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSingleBlogs = async () => {
    setLoading(true);
    try {
      const res = await dispatch(getBlogs(slug));
      setSingleBlogs(res);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch blog details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      getSingleBlogs();
    }
  }, [slug]);
  console.log(singleBlogs, 'hiiiiii')
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {singleBlogs && (
        <>
          <BlogDetail blog={singleBlogs} />
          <BlogDetail2 blog={singleBlogs} />
          <BlogDetail3 blog={singleBlogs} />
          <BlogsSlider blog={singleBlogs} />
          {/* <GetInTouch /> */}
        </>
      )}
    </div>
  );
}

export default BlogsDetailsComponent;
