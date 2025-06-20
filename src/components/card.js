// src/components/card.js
import React, { useState } from "react";
import { projects } from "../adjustment/content.js";
import Popup from "./popup.js";
import "./card.css";

export default function Projects() {
    const categories = [...new Set(projects.map((p) => p.category))];

    return (
        <div className="Project-Wrapper">
            <div className="Project-Container" id="projectSection">
                {categories.map((category) => (
                    <section className="Project-Section" key={category}>
                        <h3>{category}</h3>
                        <div className="Card-Wrapper">
                            {projects
                                .filter((p) => p.category === category)
                                .map((el, idx) => (
                                    <CardItem
                                        key={el.title}
                                        index={idx}
                                        image={el.image}
                                        title={el.title}
                                        text={el.text}
                                        tags={el.tags}
                                        url={el.url}
                                        task={el.task}
                                        solution={el.solution}
                                        image_in={el.images}
                                        title_in={el.title_in}
                                        process={el.process}
                                    />
                                ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

function CardItem({
    title,
    text,
    tags,
    image,
    url,
    task,
    solution,
    image_in,
    title_in,
    process,
}) {
    const tagList = String(tags).split(":");
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    console.log(url);
    const goToSlide = (i) => setActiveIndex(i);
    const nextSlide = () =>
        setActiveIndex(
            activeIndex < Object.values(image_in).length - 1
                ? activeIndex + 1
                : activeIndex
        );
    const prevSlide = () =>
        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0);

    return (
        <div className="card-wrapper">
            <div
                className="card-container"
                onClick={() => setIsPopupOpen(true)}
            >
                <div className="imageCard-container">
                    <img src={image} alt={title} />
                </div>
                <div className="text-container">
                    <div className="card-title-container">
                        <span className="card-title">{title}</span>
                        {url && (
                            <div className="url-container">
                                <a
                                    href={
                                        url.startsWith("http")
                                            ? url
                                            : `https://${url}`
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="url-button"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <svg
                                        width="25"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <g id="Interface / External_Link">
                                                {" "}
                                                <path
                                                    id="Vector"
                                                    d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                                    stroke="#FFFFFF"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>{" "}
                                            </g>{" "}
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                    <span className="card-text">{text}</span>
                </div>
                <div className="tag-container">
                    {tagList.map((tag, idx) => (
                        <div key={idx} className="tag">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            <Popup trigger={isPopupOpen} setCard={setIsPopupOpen}>
                <div className="pop-title-container">
                    <svg
                        onClick={() => setIsPopupOpen(false)}
                        className="close-btn"
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#6c757d"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                            <path
                                className="close-btn-1"
                                d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                                fill="#6c757d"
                            />
                            <path
                                className="close-btn-1"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                                fill="#6c757d"
                            />
                        </g>
                    </svg>
                </div>
                <div
                    style={{
                        display: "flex",
                        transition: "transform 0.5s ease",
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    {Object.values(image_in).map((src, idx) => (
                        <img
                            key={idx}
                            className="pop-image"
                            src={src}
                            alt={`${idx}`}
                            style={{ width: "100%", height: "auto" }}
                        />
                    ))}
                </div>
                <div className="image-button-container">
                    <button className="arrow left" onClick={prevSlide}>
                        <svg
                            className="arrow-icon"
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    className="arrow-icon-core"
                                    d="M15 5L9 12L15 19"
                                    stroke="#adb5bd"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                    </button>
                    {Object.values(image_in).map((_, idx) => (
                        <button
                            key={idx}
                            className={`image-button ${
                                activeIndex === idx ? "active" : ""
                            }`}
                            onClick={() => goToSlide(idx)}
                        />
                    ))}
                    <button className="arrow right" onClick={nextSlide}>
                        <svg
                            className="arrow-icon"
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    className="arrow-icon-core"
                                    d="M9 5L15 12L9 19"
                                    stroke="#adb5bd"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
                <div className="pop-content-container">
                    <h4 className="pop-title">{title_in}</h4>
                    <h5 className="popup-subtitle">
                        <svg
                            className="card-icon"
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.94513 1.25H15.0549C16.4225 1.24998 17.5248 1.24996 18.3918 1.36652C19.2919 1.48754 20.0497 1.74643 20.6517 2.34835C21.2536 2.95027 21.5125 3.70814 21.6335 4.60825C21.75 5.47522 21.75 6.57754 21.75 7.94513V16.0549C21.75 17.4225 21.75 18.5248 21.6335 19.3918C21.5125 20.2919 21.2536 21.0497 20.6517 21.6517C20.0497 22.2536 19.2919 22.5125 18.3918 22.6335C17.5248 22.75 16.4225 22.75 15.0549 22.75H8.94513C8.63162 22.75 8.33204 22.75 8.04605 22.7486C8.03082 22.7495 8.01546 22.75 8 22.75C7.98169 22.75 7.96353 22.7493 7.94555 22.7481C7.02806 22.7424 6.25306 22.7202 5.60825 22.6335C4.70814 22.5125 3.95027 22.2536 3.34835 21.6517C2.74643 21.0497 2.48754 20.2919 2.36652 19.3918C2.2704 18.6768 2.25356 17.8018 2.25062 16.75H2C1.58579 16.75 1.25 16.4142 1.25 16C1.25 15.5858 1.58579 15.25 2 15.25H2.25V12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H2.25V8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H2.25062C2.25356 6.19818 2.2704 5.32319 2.36652 4.60825C2.48754 3.70814 2.74643 2.95027 3.34835 2.34835C3.95027 1.74643 4.70814 1.48754 5.60825 1.36652C6.47522 1.24996 7.57754 1.24998 8.94513 1.25ZM3.75 8.75H4C4.41421 8.75 4.75 8.41421 4.75 8C4.75 7.58579 4.41421 7.25 4 7.25H3.75078C3.75398 6.2042 3.77029 5.42437 3.85315 4.80812C3.9518 4.07435 4.13225 3.68577 4.40901 3.40901C4.68577 3.13225 5.07434 2.9518 5.80812 2.85315C6.2098 2.79914 6.68097 2.77341 7.25 2.76115V21.2389C6.68097 21.2266 6.2098 21.2009 5.80812 21.1469C5.07434 21.0482 4.68577 20.8678 4.40901 20.591C4.13225 20.3142 3.9518 19.9257 3.85315 19.1919C3.77029 18.5756 3.75398 17.7958 3.75078 16.75H4C4.41421 16.75 4.75 16.4142 4.75 16C4.75 15.5858 4.41421 15.25 4 15.25H3.75V12.75H4C4.41421 12.75 4.75 12.4142 4.75 12C4.75 11.5858 4.41421 11.25 4 11.25H3.75V8.75ZM8.75 21.25C8.83184 21.25 8.91516 21.25 9 21.25H15C16.4354 21.25 17.4365 21.2484 18.1919 21.1469C18.9257 21.0482 19.3142 20.8678 19.591 20.591C19.8678 20.3142 20.0482 19.9257 20.1469 19.1919C20.2484 18.4365 20.25 17.4354 20.25 16V8C20.25 6.56458 20.2484 5.56347 20.1469 4.80812C20.0482 4.07435 19.8678 3.68577 19.591 3.40901C19.3142 3.13225 18.9257 2.9518 18.1919 2.85315C17.4365 2.75159 16.4354 2.75 15 2.75H9C8.91516 2.75 8.83184 2.75001 8.75 2.75004V21.25ZM10.75 6.5C10.75 6.08579 11.0858 5.75 11.5 5.75H16.5C16.9142 5.75 17.25 6.08579 17.25 6.5C17.25 6.91421 16.9142 7.25 16.5 7.25H11.5C11.0858 7.25 10.75 6.91421 10.75 6.5ZM10.75 10C10.75 9.58579 11.0858 9.25 11.5 9.25H16.5C16.9142 9.25 17.25 9.58579 17.25 10C17.25 10.4142 16.9142 10.75 16.5 10.75H11.5C11.0858 10.75 10.75 10.4142 10.75 10Z"
                                    fill="#343a40"
                                />{" "}
                            </g>
                        </svg>
                        Task
                    </h5>
                    <h6 className="pop-content">{task}</h6>
                    <h5 className="popup-subtitle">
                        <svg
                            className="card-icon"
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.98899 5.30778C10.169 2.90545 12.6404 1.25 15.5 1.25C19.5041 1.25 22.75 4.49594 22.75 8.5C22.75 9.57209 22.5168 10.5918 22.0977 11.5093C21.9883 11.7488 21.967 11.975 22.0156 12.1568L22.143 12.6328C22.5507 14.1566 21.1566 15.5507 19.6328 15.143L19.1568 15.0156C19.0215 14.9794 18.8616 14.982 18.6899 15.0307C18.1798 19.3775 14.4838 22.75 10 22.75C8.65003 22.75 7.36949 22.4438 6.2259 21.8963C5.99951 21.7879 5.7766 21.7659 5.59324 21.815L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.18504 18.4068C2.2341 18.2234 2.21211 18.0005 2.10373 17.7741C1.55623 16.6305 1.25 15.35 1.25 14C1.25 9.50945 4.63273 5.80897 8.98899 5.30778ZM10.735 5.28043C15.0598 5.64011 18.4914 9.14511 18.736 13.5016C18.9986 13.4766 19.2714 13.4935 19.5445 13.5666L20.0205 13.694C20.4293 13.8034 20.8034 13.4293 20.694 13.0205L20.5666 12.5445C20.4095 11.9571 20.5119 11.3708 20.7333 10.8861C21.0649 10.1602 21.25 9.35275 21.25 8.5C21.25 5.32436 18.6756 2.75 15.5 2.75C13.5181 2.75 11.7692 3.75284 10.735 5.28043ZM10 6.75C5.99594 6.75 2.75 9.99594 2.75 14C2.75 15.121 3.00392 16.1807 3.45667 17.1264C3.69207 17.6181 3.79079 18.2087 3.63407 18.7945L3.30602 20.0205C3.19664 20.4293 3.57066 20.8034 3.97949 20.694L5.20553 20.3659C5.79126 20.2092 6.38191 20.3079 6.87362 20.5433C7.81932 20.9961 8.87896 21.25 10 21.25C14.0041 21.25 17.25 18.0041 17.25 14C17.25 9.99594 14.0041 6.75 10 6.75Z"
                                    fill="#343a40"
                                />{" "}
                                <path
                                    d="M7.5 14C7.5 14.5523 7.05228 15 6.5 15C5.94772 15 5.5 14.5523 5.5 14C5.5 13.4477 5.94772 13 6.5 13C7.05228 13 7.5 13.4477 7.5 14Z"
                                    fill="#343a40"
                                />{" "}
                                <path
                                    d="M11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14Z"
                                    fill="#343a40"
                                />{" "}
                                <path
                                    d="M14.5 14C14.5 14.5523 14.0523 15 13.5 15C12.9477 15 12.5 14.5523 12.5 14C12.5 13.4477 12.9477 13 13.5 13C14.0523 13 14.5 13.4477 14.5 14Z"
                                    fill="#343a40"
                                />{" "}
                            </g>
                        </svg>
                        Process
                    </h5>
                    <h6 className="pop-content">{process}</h6>
                    <h5 className="popup-subtitle">
                        <svg
                            className="card-icon"
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M3.95526 2.25C3.97013 2.25001 3.98505 2.25001 4.00001 2.25001L20.0448 2.25C20.4776 2.24995 20.8744 2.24991 21.1972 2.29331C21.5527 2.3411 21.9284 2.45355 22.2374 2.76257C22.5465 3.07159 22.6589 3.44732 22.7067 3.8028C22.7501 4.12561 22.7501 4.52245 22.75 4.95526V5.04475C22.7501 5.47757 22.7501 5.8744 22.7067 6.19721C22.6589 6.55269 22.5465 6.92842 22.2374 7.23744C21.9437 7.53121 21.5896 7.64733 21.25 7.69914V13.0564C21.25 14.8942 21.25 16.3498 21.0969 17.489C20.9392 18.6615 20.6071 19.6104 19.8588 20.3588C19.1104 21.1071 18.1615 21.4392 16.989 21.5969C15.8498 21.75 14.3942 21.75 12.5564 21.75H11.4436C9.60583 21.75 8.1502 21.75 7.01098 21.5969C5.83856 21.4392 4.88961 21.1071 4.14125 20.3588C3.39289 19.6104 3.06077 18.6615 2.90314 17.489C2.74998 16.3498 2.74999 14.8942 2.75001 13.0564L2.75001 7.69914C2.41038 7.64733 2.05634 7.53121 1.76257 7.23744C1.45355 6.92842 1.3411 6.55269 1.29331 6.19721C1.24991 5.8744 1.24995 5.47757 1.25 5.04476C1.25001 5.02988 1.25001 5.01496 1.25001 5.00001C1.25001 4.98505 1.25001 4.97013 1.25 4.95526C1.24995 4.52244 1.24991 4.12561 1.29331 3.8028C1.3411 3.44732 1.45355 3.07159 1.76257 2.76257C2.07159 2.45355 2.44732 2.3411 2.8028 2.29331C3.12561 2.24991 3.52244 2.24995 3.95526 2.25ZM4.25001 7.75001V13C4.25001 14.9068 4.2516 16.2615 4.38977 17.2892C4.52503 18.2952 4.7787 18.8749 5.20191 19.2981C5.62512 19.7213 6.20477 19.975 7.21086 20.1102C8.23852 20.2484 9.59319 20.25 11.5 20.25H12.5C14.4068 20.25 15.7615 20.2484 16.7892 20.1102C17.7952 19.975 18.3749 19.7213 18.7981 19.2981C19.2213 18.8749 19.475 18.2952 19.6102 17.2892C19.7484 16.2615 19.75 14.9068 19.75 13V7.75001H4.25001ZM2.82324 3.82324L2.82568 3.82187C2.82761 3.82086 2.83093 3.81924 2.83597 3.81717C2.85775 3.80821 2.90611 3.79291 3.00267 3.77993C3.21339 3.7516 3.5074 3.75001 4.00001 3.75001H20C20.4926 3.75001 20.7866 3.7516 20.9973 3.77993C21.0939 3.79291 21.1423 3.80821 21.164 3.81717C21.1691 3.81924 21.1724 3.82086 21.1743 3.82187L21.1768 3.82323L21.1781 3.82568C21.1792 3.82761 21.1808 3.83093 21.1828 3.83597C21.1918 3.85775 21.2071 3.90611 21.2201 4.00267C21.2484 4.21339 21.25 4.5074 21.25 5.00001C21.25 5.49261 21.2484 5.78662 21.2201 5.99734C21.2071 6.0939 21.1918 6.14226 21.1828 6.16404C21.1808 6.16909 21.1792 6.1724 21.1781 6.17434L21.1768 6.17678L21.1743 6.17815C21.1724 6.17916 21.1691 6.18077 21.164 6.18285C21.1423 6.19181 21.0939 6.2071 20.9973 6.22008C20.7866 6.24841 20.4926 6.25001 20 6.25001H4.00001C3.5074 6.25001 3.21339 6.24841 3.00267 6.22008C2.90611 6.2071 2.85775 6.19181 2.83597 6.18285C2.83093 6.18077 2.82761 6.17916 2.82568 6.17815L2.82324 6.17677L2.82187 6.17434C2.82086 6.1724 2.81924 6.16909 2.81717 6.16404C2.80821 6.14226 2.79291 6.0939 2.77993 5.99734C2.7516 5.78662 2.75001 5.49261 2.75001 5.00001C2.75001 4.5074 2.7516 4.21339 2.77993 4.00267C2.79291 3.90611 2.80821 3.85775 2.81717 3.83597C2.81924 3.83093 2.82086 3.82761 2.82187 3.82568L2.82324 3.82324ZM2.82324 6.17677C2.82284 6.17636 2.82297 6.17644 2.82324 6.17677V6.17677ZM14.9995 10.4406C15.3085 10.7164 15.3353 11.1905 15.0595 11.4995L11.488 15.4995C11.3457 15.6589 11.1422 15.75 10.9286 15.75C10.7149 15.75 10.5114 15.6589 10.3691 15.4995L8.94055 13.8995C8.66468 13.5905 8.69152 13.1164 9.0005 12.8406C9.30947 12.5647 9.78359 12.5915 10.0595 12.9005L10.9286 13.8739L13.9406 10.5005C14.2164 10.1915 14.6905 10.1647 14.9995 10.4406Z"
                                    fill="#343a40"
                                />{" "}
                            </g>
                        </svg>
                        Solution
                    </h5>
                    <h6 className="pop-content">{solution}</h6>
                </div>
            </Popup>
        </div>
    );
}
