import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { zubairp } from '../assets';

const BlogDetail2 = () => {
   
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const items = [
        { title: 'XAMPP', ref: sectionRefs[0], color:'blue' },
        { title: 'Laravel Herd', ref: sectionRefs[1] },
        { title: 'XAMPP and Laravel Herd Comparison', ref: sectionRefs[2] },
        { title: 'Server Solutions', ref: sectionRefs[3] },
        { title: 'Programming Languages Support', ref: sectionRefs[4] },
        { title: 'PreInstalled Packages', ref: sectionRefs[5] },
        { title: 'Platform Compatibility', ref: sectionRefs[6] },
        { title: 'Databases Availability', ref: sectionRefs[7] },
        { title: 'User Experience and Ease', ref: sectionRefs[8] },
        { title: 'Isolation', ref: sectionRefs[9] },
        { title: 'Performance', ref: sectionRefs[10] },
        { title: 'Pricing', ref: sectionRefs[11] },
    ];

    const handleScrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
               
            });
        }
    };

    return (
        <div className='grid grid-cols-12 p-4'>
        
            <div className='col-span-3'>
                <div className='flex items-center rounded-full w-72 border-[#808080] border'>
                    <input
                        placeholder="Search..." type="text" className="p-3 text-gray-600 flex items-center bg-white rounded-full focus:outline-none" />
                    <FaSearch className="text-[#808080] text-2xl" />
                </div>
                <div className='flex flex-col gap-4 ml-4 mt-2'>
                    {items.map((item, index) => (
                        <h1
                            key={index}
                            className='text-[#808080] text-sm cursor-pointer'
                            onClick={() => handleScrollToSection(item.ref)}
                        >
                            {item.title}
                        </h1>
                    ))}
                </div>
            </div>

          
            <div className='col-span-9 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 2rem)' ,overflowY:'scroll' , scrollbarWidth:'none' }}>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl font-semibold'>XAMPP vs Laravel Herd: Choosing the Right Local Development Environment</h1>
                    <p className='text-[rgb(128,128,128)]'>Compare XAMPP and Laravel Herd for local PHP development. Learn the key features, pros, and cons to determine which tool best suits your web development needs.</p>
                    <div className='flex items-center gap-2'>
                        <img src={zubairp} alt="" className='h-12 w-12 object-cover rounded-full' />
                        <div className='flex flex-col'>
                            <h1 className='text-start cursor-pointer font-semibold'>Abdul Basit Khan</h1>
                            <p>Chief Marketing Officer - CMO</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={zubairp} alt="" className='h-12 w-12 object-cover rounded-full' />
                        <div className='flex flex-col'>
                            <h1 className='text-start cursor-pointer font-semibold'>Abdul Basit Khan</h1>
                            <p>Chief Marketing Officer - CMO</p>
                        </div>
                    </div>
                    <p className='flex items-center justify-center'>Updated at: September 11, 2024</p>

                
                    <div ref={sectionRefs[0]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>XAMPP</h1>    
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[1]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>Laravel Herd</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[2]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>XAMPP and Laravel Herd Comparison</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[3]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>Server Solutions</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[4]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>Programming Languages Support</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[5]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>PreInstalled Packages </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[6]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>Platform Compatibility</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[7]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>Databases Availability</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[8]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>User Experience and Ease</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[9]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>Isolation</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[10]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>Performance</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                    <div ref={sectionRefs[11]} className='flex flex-col gap-3 mt-2'>
                        <h1 className='text-4xl font-semibold'>Pricing</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis, voluptates tenetur ut dicta ipsam porro! Placeat vero nostrum, error corrupti enim voluptatem praesentium animi porro temporibus possimus modi nam alias, dolore fuga inventore. Harum et ipsum ex ducimus vitae voluptatibus, reprehenderit omnis dolor blanditiis earum temporibus sunt consequuntur repellendus natus inventore accusantium adipisci nisi vero odit nemo sed ipsa! Ut qui, nihil pariatur esse recusandae a ipsa? Quis repellendus asperiores nesciunt possimus adipisci obcaecati atque iusto quam consequatur ullam ex quas quidem nulla eligendi reiciendis facilis fugit, delectus at earum? Ut aperiam fuga eaque aliquid necessitatibus nesciunt recusandae adipisci voluptates nihil amet maiores, quas ullam illo nemo odit fugiat quaerat, ipsam molestiae voluptatem temporibus. Molestias, magnam repellendus sequi dolores architecto blanditiis exercitationem. Nostrum, aut. Hic blanditiis quam ipsam voluptatibus! Illum, assumenda fuga dolores impedit minus sunt provident reiciendis tenetur perspiciatis modi ipsa, quibusdam alias consequatur fugit ab mollitia quaerat quia nemo neque dolor blanditiis! Reiciendis rem omnis distinctio excepturi voluptate optio est consequatur, modi nobis minima sit beatae aliquam magnam corporis asperiores, error cupiditate ex minus ratione nemo illo aliquid. Iste fugiat qui consequatur est aliquam veniam dolores aut, accusamus illum officiis culpa voluptatum quod vitae ullam, quidem et.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail2;
