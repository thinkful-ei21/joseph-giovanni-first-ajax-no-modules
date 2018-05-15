'use strict';
/*global render */


const STORE = (function(){

  const setVideos = function(videos) {
    this.videos = videos;
    render();
  };

  return {
    videos: [],
    setVideos: setVideos,
  };


}());