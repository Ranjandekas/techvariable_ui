import React from "react";
import "./filter.css";

function Filter(props) {
    return (
        <div class="side-nav-categories">
            <ul id="category-tabs">
                <li><a href="javascript:void" class="main-category"> Format</a>
                    <ul class="sub-category-tabs">
                        {props.formats.map((d, ind) => {
                            return <li key={ind+1}>
                                <input type="checkbox" onClick={props.selectFormat.bind(this, d.name)}/>
                                <a href="javascript:void">{d.name}</a></li>
                        })}
                        
                    </ul>
                </li>
            </ul>
            <ul id="category-tabs">
                <li><a href="javascript:void" class="main-category"> Occasion</a>
                    
                    <ul class="sub-category-tabs">
                    
                        {props.occasion.map((d, ind) => {return <li key={ind+1}>
                            <input type="checkbox" onClick={props.selectOccasion.bind(this, d.name)}/>
                            <a href="javascript:void">{d.name}</a>
                            </li>})}

                    </ul>
                </li>
            </ul>
            
        </div>
    )
}

export default Filter;
