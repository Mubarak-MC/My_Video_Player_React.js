import React, { Component } from 'react'
import Videoitem from './VideoItem'

export class Video extends Component {
    render() {
        return (
            <div className="container my-3">
                <h1 class="text-center border-bottom border border-4 rounded-pill border-dark my-5">My Video Player</h1>
                <div className="row">

                <div className="col-md-4  my-2">
                <Videoitem title="Creativity" description="Now you are ready to embed the Bitmovin Player into your own website " poster="https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg"
                progressive="https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4"/>
                </div>
                <div className="col-md-4  my-2">
                <Videoitem title="Nature" description=" Nature is the world's leading multidisciplinary science journal" poster="https://source.unsplash.com/1600x900/?nature,water"
                progressive="https://ak.picdn.net/shutterstock/videos/1053430061/preview/stock-footage-turquoise-water-in-a-mountain-forest-lake-with-pine-trees-aerial-view-of-blue-lake-and-green.webm"/>
                </div>
                <div className="col-md-4 my-2">
                <Videoitem title="Animation" description="Animation is a method in which figures are manipulated to appear as moving images." poster="https://source.unsplash.com/1600x900/?animations"
                progressive="https://ak.picdn.net/shutterstock/videos/1071921676/preview/stock-footage-bluethroat-bird-close-up-luscinia-svecica.webm"/>
                </div>
                <div className="col-md-4 my-2">
                <Videoitem title="Connectivity" description="the quality, state, or capability of being connective or connected" poster="https://source.unsplash.com/1600x900/?Phone,laptops"
                progressive="https://ak.picdn.net/shutterstock/videos/1038870842/preview/stock-footage-rocket-flies-through-the-clouds.webm"/>
                </div>
                <div className="col-md-4  my-2">
                <Videoitem title="Artificial Intelligence" description="Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems." poster="https://source.unsplash.com/1600x900/?Artificial intelligence"
                progressive="https://ak.picdn.net/shutterstock/videos/1066292464/preview/stock-footage-futuristic-city-station-on-the-clouds-flying-futuristic-ships-concept-of-future-realistic-k.webm"/>
                </div>
                <div className="col-md-4  my-2">
                <Videoitem title="Business" description="Your free Business Profile on Google My Business helps you drive customer engagement" poster="https://source.unsplash.com/1600x900/?Business "
                progressive="https://ak.picdn.net/shutterstock/videos/1032465134/preview/stock-footage-business-people-shaking-hands-african-american-businessman-meeting-female-colleague-in-corporate.webm"/>
                </div>
                <div className="col-md-4 my-2">
                <Videoitem title="Robotics" description="Robotics is the intersection of science, engineering and technology that produces machines" poster="https://source.unsplash.com/1600x900/?Robotics "
                progressive="https://ak.picdn.net/shutterstock/videos/1026344120/preview/stock-footage-futuristic-robot-arm-touches-human-hand-in-humanity-and-artificial-intelligence-unifying-gesture.webm"/>
                </div>
                <div className="col-md-4 my-2">
                <Videoitem title="Technology" description="the application of scientific knowledge for practical purposes, especially in industry." poster="https://source.unsplash.com/1600x900/?Information technology "
                progressive="https://ak.picdn.net/shutterstock/videos/1038870842/preview/stock-footage-rocket-flies-through-the-clouds.webm"/>
                </div>
                <div className="col-md-4 my-2">
                <Videoitem title="Service" description="perform routine maintenance or repair work on (a vehicle or machine)" poster="https://source.unsplash.com/1600x900/?service "
                progressive="https://ak.picdn.net/shutterstock/videos/1025001470/preview/stock-footage-young-indian-business-woman-chatting-to-intern-discussing-job-interview-colleagues-having.webm"/>
                </div>
              
                
                
               
                
                </div>
               
              
            </div>
        )
    }
}

export default Video
