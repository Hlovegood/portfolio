import React, { Component } from 'react';
import './ProjectHolder.css'
import { Link } from 'react-router-dom';
const ProjectHolder = (props) => {
    return ( <>
        <article className="project">
                    <Link to={props.Project} class="blog-div">
                        <figure className="blog-pic">
                            <img src={props.ProjectIMG} alt="" />
                        </figure>
                        <h3 className="blog-head">
                             {props.ProjectTitle}
                        </h3>
                        <time className="About-txt">
                            {props.ProjectDate}
                        </time>
                        <div className="category-container">
                            <span className="category">
                                {props.ProjectCatg1}
                            </span>

                            <span className="category">
                                {props.ProjectCatg2}
                            </span>
                        </div>
                    </Link>
                </article>
    </> );
}
 
export default ProjectHolder;