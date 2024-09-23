import React, { useRef, useState } from 'react';
import moment from 'moment';
import { IoMdSearch } from "react-icons/io";


const BlogDetail2 = ({ blogs }) => {
    const boxRefs = Array(blogs?.blog_contents?.length).fill().map(() => useRef(null));
    const [searchQuery, setSearchQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0); // Track active index

    function stripHtmlTags(html) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const scrollToDescription = (index) => {
         if (boxRefs[index].current) {
            boxRefs[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveIndex(index);
        }
    };

    return (
        <div className="flex h-full mb-30">
            {/* Sidebar */}
            <div className="w-1/4 h-full p-5 sticky top-20 md:block hidden left-0 overflow-y-auto">
                <div className="flex items-center bg-white rounded-full border border-gray-400 p-2 mb-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="mr-1 w-full p-2 text-gray-600 outline-none"
                    />
                    <IoMdSearch className='text-3xl cursor-pointer' />
                </div>

                {blogs?.blog_contents?.map((heading, index) => (
                    <p
                        key={index}
                        className={`cursor-pointer mb-2 mt-1 ${activeIndex === index ? 'text-blue-800' : 'text-gray-600'} hover:text-blue-800`}
                        onClick={() => {
                            scrollToDescription(index);
                            setActiveIndex(index);
                        }}
                    >
                        {stripHtmlTags(heading?.title)}
                    </p>
                ))}
            </div>

            {/* Main Content */}
            <div
                className="w-3/4 h-full text-left md:mx-0 mx-3 overflow-y-scroll"
                onScroll={(e) => {
                    const contentBox = e.target;
                    const scrollPosition = contentBox.scrollTop;

                    boxRefs.forEach((ref, i) => {
                        if (ref.current) {
                            const boxTop = ref.current.offsetTop;
                            const boxBottom = boxTop + ref.current.clientHeight;
                            if (scrollPosition >= boxTop && scrollPosition < boxBottom) {
                                setActiveIndex(i);
                            }
                        }
                    });
                }}
            >
                <div className="w-11/12 mt-5">
                    <h1 className="mt-4 text-black text-2xl font-semibold px-0 md:px-40">
                        {blogs?.title}
                    </h1>
                    <p className="mb-2 mt-1 text-black text-sm italic px-0 md:px-40">
                        {stripHtmlTags(blogs?.description)}
                    </p>

                    <div className="flex flex-col md:flex-row items-end gap-5 p-5">
                        <div>
                            {blogs?.authors?.map((val, ind) => (
                                <div key={ind} className="flex items-center mb-2">
                                    <img
                                         src={`https://test.saeedantechpvt.com/${val?.img}`}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <div className="ml-2">
                                        <h5 className="font-bold text-black text-lg">{val?.name}</h5>
                                        <p className="text-black text-sm">{val?.position}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            {blogs?.blog_contents?.map((val, ind) => (
                                <p key={ind} className="text-black text-xs">
                                    {ind === 0 && `Updated at: ${moment(val?.updated_at).format("MMMM D, YYYY")}`}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <br />

                {blogs?.blog_contents?.map((heading, index) => (
                    <div key={index} ref={boxRefs[index]} className="mb-5">
                        <h2 className="text-xl font-bold" dangerouslySetInnerHTML={{ __html: heading?.title || "" }} />
                        <p className="py-2 text-sm md:text-lg" dangerouslySetInnerHTML={{ __html: heading?.description || "" }} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {heading?.blog_content_images?.map((image, imgIndex) => (
                                <div key={imgIndex} className="p-2 m-auto">
                                    <img
                                         src={`https://test.saeedantechpvt.com/${image?.img}`}
                                        alt={heading.link}
                                        className="h-[70vh] w-full object-cover "
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogDetail2;
