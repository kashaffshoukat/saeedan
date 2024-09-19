import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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
      setSingleBlogs(res.data.payload);
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
          {/* <BlogDetail blog={singleBlogs} /> */}
          {/* <div className="p-12 mt-20">
      {singleBlogs &&
        singleBlogs.c_t_a &&
        singleBlogs.c_t_a.cta_bottom_title &&
        singleBlogs.c_t_a.cta_bottom_description &&
        singleBlogs.c_t_a.cta_top_image &&
        singleBlogs.c_t_a.cta_top_link &&
        singleBlogs.c_t_a.button_one_title &&
        singleBlogs.c_t_a.button_two_title && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                {singleBlogs.c_t_a.cta_top_title}
              </h2>
              <p className="mb-6">{singleBlogs.c_t_a.cta_top_description}</p>
              <div className="flex gap-4">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded text-base transition duration-200 hover:bg-blue-700 focus:outline-none"
                  // onClick={ScrollToContact}
                >
                  {singleBlogs.c_t_a.button_one_title}
                </button>
                <Link to={singleBlogs.c_t_a.cta_top_link} target="_blank">
                  <button
                    className="border border-blue-600 text-blue-600 py-2 px-4 rounded text-base transition duration-200 hover:bg-blue-600 hover:text-white focus:outline-none"
                    onClick={() => window.open(singleBlogs.c_t_a.cta_top_link, "_blank")}
                  >
                    {singleBlogs.c_t_a.button_two_title}
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={`https://test.saeedantechpvt.com/${singleBlogs.c_t_a.cta_top_image}`}
                alt="CTA Image"
                className="w-72 sm:w-96 md:w-[430px] lg:w-[430px] xl:w-[430px] h-auto"
              />
            </div>
          </div>
        )}
    </div> */}
          <BlogDetail blogs={singleBlogs} />
          <BlogDetail2 blogs={singleBlogs} />
          <BlogDetail3 blogs={singleBlogs} />
          <BlogsSlider blogs={singleBlogs} />
          <GetInTouch />
        </>
      )}
    </div>
  );
}

export default BlogsDetailsComponent;
