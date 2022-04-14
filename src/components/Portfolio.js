import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio" class="container-fluid text-center bg-grey">
            <h2>Portfolio</h2><br />
            <h4>What we have created</h4>
            <div class="row text-center slideanim">
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <img src="https://www.w3schools.com/bootstrap/paris.jpg" alt="Paris" width="400" height="300" />
                        <p><strong>Paris</strong></p>
                        <p>Yes, we built Paris</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <img src="https://www.w3schools.com/bootstrap/newyork.jpg" alt="New York" width="400" height="300" />
                        <p><strong>New York</strong></p>
                        <p>We built New York</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <img src="https://www.w3schools.com/bootstrap/sanfran.jpg" alt="San Francisco" width="400" height="300" />
                        <p><strong>San Francisco</strong></p>
                        <p>Yes, San Fran is ours</p>
                    </div>
                </div>
            </div><br />
        </div>

    )
}

export default Portfolio;