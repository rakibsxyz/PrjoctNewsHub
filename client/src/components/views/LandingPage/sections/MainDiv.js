import React, { useState, useEffect } from 'react'
import './channelCss.css'
import Axios from 'axios'
import YtPlayer from './YtPlayer'

function MainDiv() {

    const [videoId, setvideoId] = useState();
    const [channelObjectArray, setchannelObjectArray] = useState([])
    const [channelInfo, setchannelInfo] = useState([])

    useEffect(() => {
        // setvideoId("2g811Eo7K8U");

        Axios.get(`http://localhost:5000/getBDNewsChannelLinks`)
            .then((res) => {
                // setchannelObjectArray(channelObjectArray.push(res.data))
                // console.log(channelObjectArray);
                // for( var i =0; i< res.data.length;i++)
                //     setchannelInfo(channelInfo.push(res.data[i]))
                // console.log(channelInfo)
                setchannelInfo(res.data)
                console.log(channelInfo)
            })
            .catch((err) => {
                console.log("Problem man")
            })

    }, [])




    return (
        
        <div class="row" style={{ width: "100%" }}>
            <div class="column" style={{ "background-color": "#bbb" }}>
                <h2>Side Bar</h2>
                <p></p>
            </div>
            <div class="column" style={{ "background-color": "#bcd" }}>
                <div class="childFlex" style={{ "background-color": "#ddd" }}>
                    <YtPlayer videoId={"faAVAai7szM"} style={{ "background-color": "#ccc" }} />
                    <div> This is me</div>
                </div>
                <div class="childFlex" style={{ "background-color": "#ddd" }}>
                    <YtPlayer videoId={"faAVAai7szM"} style={{ "background-color": "#ccc" }} />
                    <div> This is me</div>
                </div>
                <div class="childFlex" style={{ "background-color": "#ddd" }}>
                    <YtPlayer videoId={"faAVAai7szM"} style={{ "background-color": "#ccc" }} />
                    <div> This is me</div>
                </div>
            </div>
            <div class="column" style={{ "background-color": "#bbb" }}>
            <div class="childFlex" style={{ "background-color": "#ddd" }}>
                    <YtPlayer videoId={"faAVAai7szM"} style={{ "background-color": "#ccc" }} />
                    <div> This is me</div>
                </div>
                <div class="childFlex" style={{ "background-color": "#ddd" }}>
                    <YtPlayer videoId={"faAVAai7szM"} style={{ "background-color": "#ccc" }} />
                    <div> This is me</div>
                </div>
                <div class="childFlex" style={{ "background-color": "#ddd" }}>
                    <YtPlayer videoId={"faAVAai7szM"} style={{ "background-color": "#ccc" }} />
                    <div> This is me</div>
                </div>
            </div>
        </div >
    )
}

export default MainDiv
