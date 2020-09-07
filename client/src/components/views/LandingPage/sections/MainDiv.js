import React from 'react'
import './channelCss.css'

function MainDiv() {
    return (
        <div class="row" style={{ width: "100%" }}>
            <div class="column" style={{ "background-color": "#bbb" }}>
                <h2>Side Bar</h2>
                <p></p>
            </div>
            <div class="column" style={{ "background-color": "#bbb" }}>
                <div class="childFlex" style={{ "background-color": "#ccc" }}>1</div>
                <div class="childFlex" style={{ "background-color": "#ddd" }}>2</div>
                <div class="childFlex" style={{ "background-color": "#eee" }}>3</div>
            </div>
            <div class="column" style={{ "background-color": "#bbb" }}>
                <div class="childFlex" style={{ "background-color": "#ccc" }}>1</div>
                <div class="childFlex" style={{ "background-color": "#ddd" }}>2</div>
                <div class="childFlex" style={{ "background-color": "#eee" }}>3</div>
            </div>



        </div>
    )
}

export default MainDiv
