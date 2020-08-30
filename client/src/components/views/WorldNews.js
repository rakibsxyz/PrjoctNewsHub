import React, { useState, useEffect } from 'react'
import YtPlayer from './LandingPage/sections/YtPlayer'
import { FaCode } from "react-icons/fa";
import Axios from 'axios'


function WorldNews() {

    const [videoId, setvideoId] = useState();
    const [channelObjectArray, setchannelObjectArray] = useState([])
    const [internationalChannelInfo, setinternationalChannelInfo] = useState([])
    const [featuredChannelInfo, setfeaturedChannelInfo] = useState([])

    useEffect(() => {
        // setvideoId("2g811Eo7K8U");

        Axios.get(`http://localhost:5000/getWorldNewsChannelLinks`)
            .then((res) => {
                setinternationalChannelInfo(res.data)
                // console.log(channelInfo)
            })
            .catch((err) => {
                console.log("Problem man")
            })
        
            Axios.get(`http://localhost:5000/getFeaturedNewsChannelLinks`)
            .then((res) => {
                setfeaturedChannelInfo(res.data)
                // console.log(channelInfo)
            })
            .catch((err) => {
                console.log("Problem man")
            })

    }, [])


return (
    <div>
        <h3 style={{marginTop:'10px', marginLeft:'10px','font-weight': "bold"}}>International News channels</h3>
    
    <div className="flex-container"  >
    
        {internationalChannelInfo && internationalChannelInfo.map((channel, id) =>(
           
                <YtPlayer videoId={channel.videoId} />
           
        )   ) 

        }
    </div>
    <h3 style={{marginTop:'20px', marginLeft:'10px','font-weight': "bold"}}>Featured News channels</h3>
    
    <div className="flex-container"  >
    
        {featuredChannelInfo && featuredChannelInfo.map((channel, id) =>(
           
                <YtPlayer videoId={channel.videoId} />
           
        )   ) 

        }
    </div>
    </div>


)
}

export default WorldNews
