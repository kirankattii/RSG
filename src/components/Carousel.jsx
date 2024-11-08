import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/carousel.css";

const Carousel = () => {
    const [active, setActive] = useState(1);
    const [other1, setOther1] = useState(0);
    const [other2, setOther2] = useState(2);
    gsap.registerPlugin(ScrollTrigger);
    const items = [
        {
            title: "Caffe Latte, a new product",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
            imgSrc: "images/p-1.png",
            backgroundColor: "#fff"
        },
        {
            title: "Strawberry mocha, a new product",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
            imgSrc: "images/p-2.png",
            backgroundColor: "#fff"
        },
        {
            title: "Doppio espresso, a new product",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
            imgSrc: "images/p-3.png",
            backgroundColor: "#fff"
        },
        {
            title: "Matcha latte macchiato, a new product",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
            imgSrc: "images/p-4.png",
            backgroundColor: "#fff"
        },
        {
            title: "Matcha latte macchiato, a new product",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
            imgSrc: "images/p-5.png",
            backgroundColor: "#fff"
        },
        {
            title: "Matcha latte macchiato, a new product",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
            imgSrc: "images/p-6.png",
            backgroundColor: "#fff"
        }
    ];

    const countItem = items.length;

    const next = () => {
        setActive(active + 1 >= countItem ? 0 : active + 1);
        setOther1(active - 1 < 0 ? countItem - 1 : active - 1);
        setOther2(active + 1 >= countItem ? 0 : active + 1);
    };

    const prev = () => {
        setActive(active - 1 < 0 ? countItem - 1 : active - 1);
        setOther1(active + 1 >= countItem ? 0 : active + 1);
        setOther2(other1 + 1 >= countItem ? 0 : other1 + 1);
    };

    useEffect(() => {
        const autoPlay = setInterval(() => {
            next();
        }, 2000);

        return () => clearInterval(autoPlay); // Cleanup on component unmount
    }, [active]); // Re-run the effect when active state changes

    return (
        <>
            <main>
                <section className="carousel next">
                    <div className="list">
                        {items.map((item, index) => (
                            <article
                                key={index}
                                className={`item ${index === active
                                    ? "active"
                                    : index === other1
                                        ? "other_1"
                                        : index === other2
                                            ? "other_2"
                                            : ""
                                    }`}
                            >
                                <div
                                    className="main-content"
                                    style={{ backgroundColor: item.backgroundColor }}
                                >
                                    <div className="content">
                                        <h2>{item.title}</h2>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                                <figure className="image">
                                    <img src={item.imgSrc} alt={item.title} />
                                    <figcaption>{item.title}</figcaption>
                                </figure>
                            </article>
                        ))}
                    </div>

                    {/* <div className="arrows">
                        <button id="prev" onClick={prev}>
                            &lt;
                        </button>
                        <button id="next" onClick={next}>
                            &gt;
                        </button>
                    </div> */}
                </section>
            </main>
        </>
    );
};

export default Carousel;
