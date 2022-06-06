import React from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const body = () => {
    return (

<div id="A"> 
    <div class="project">
        <h2>Main projects</h2>
    </div>

    <div class="image">
    
    <div class="A1">
        <div class="b"> 
            <img src="https://static.independent.co.uk/2021/12/07/10/PRI213893584.jpg?quality=75&width=982&height=726&auto=webp" />
            <div class="b1">
                <div class="i">
                    <p class="letter">Sun</p>
                </div>
                <div class="ii">
                    <p class="price">$10</p>
                </div>
            </div>
        </div>

        <div class="c">
            <img src="https://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg" />
            <div class="c1"> 
                <div class="ci">
                    <p class="letter">Moon</p>
                </div>
                <div class="cii">
                    <p class="price">$10</p>
                </div>
            </div>
        </div>

        <div class="d">
            <img src="https://osr.org/wp-content/uploads/2021/03/Instagram-Post-Saturn.jpg" />
            <div class="d1"> 
                <div class="di">
                    <p class="letter">Saturn</p>
                </div>
                <div class="dii">
                    <p class="price">$10</p>
                </div>
            </div>
        </div>
    </div>

    <div class="B1">
        <div class="e">
            <img src="https://static.swatch.com/images/product/SO33R100/sa200/SO33R100_sa200_er005.png" />
            <div class="e1">
                <div class="ei">
                    <p class="letter">Mars</p>
                </div>
                <div class="eii">
                    <p class="price">$10</p>
                </div>
            </div>
        </div>

        <div class="f">
            <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/AW_Venus_nli6oy.jpg" />
            <div class="f1"> 
                <div class="fi">
                    <p class="letter">Venus</p>
                </div>
                <div class="fii">
                    <p class="price">$10</p>
                </div>
            </div>
        </div>

        <div class="g">
            <img src="https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg" />
            <div class="g1"> 
                <div class="gi">
                    <p class="letter">Earth</p>
                </div>
                <div class="gii">
                    <p class="price">$10</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    );
};

export default body;

