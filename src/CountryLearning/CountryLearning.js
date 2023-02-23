import React, { useState, useEffect } from 'react';
import './CountryLearning.css';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import "bootstrap/dist/css/bootstrap.min.css";

const CountryLearning = (props) => {
  const [learningResources, setLearningResources] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  const countryName = useParams().countryName;
  const url = `http://localhost:5000/api/v1/learning_resources?country=${countryName}`
  const requestOptions = {
    headers: {'Content-Type': 'application/json',
              'accept': 'application/json'}
  }
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLearningResources()
  }, [])

  function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function getLearningResources() {
    fetch(url, requestOptions)
      // .then(response => handleError(response))
      .then(response => {
        return response.json()
      })
      .then(data=> (setLearningResources(data)))
      .catch((error) => { setErrorMessage(error) });
  }
  const onReady = (e) => {
    console.log(e.target);
    };
  // console.log(learningResources.data.attributes.video.video_id)
  const videoId = learningResources.data && learningResources.data.attributes.video.video_id
  // const videoId = learningResources.data.attributes.video.video_id
  // console.log(videoId)
  return (
    <div>
      <h1>{Capitalize(countryName)}</h1>
      <YouTube videoId={videoId} onReady={onReady} />
      <div class="scrollimages">
          {
            learningResources.data && learningResources.data.attributes.images.map((image) =>
              <div class="card">
                <img src={image.url} alt={image.alt_tag}/>
              </div>
            )
          }
                {/* <div class="row text-center">
                    1</div>
                    <div class="col-xs-4">2</div>
                    <div class="col-xs-4">3</div>
                    <div class="col-xs-4">4</div>
                    <div class="col-xs-4">5</div>
                    <div class="col-xs-4">6</div>
                    <div class="col-xs-4">7</div>
                </div> */}
      </div>
    </div>
  )
}

export default CountryLearning;