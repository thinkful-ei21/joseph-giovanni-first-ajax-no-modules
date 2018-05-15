'use strict';
/*global render */


const STORE = (function(){

  const setVideos = function(videos) {
    this.videos = videos;
   // console.log(this.videos);
  };

  return {
    videos: [],
    setVideos: setVideos,
  };


}());