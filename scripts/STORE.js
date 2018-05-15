'use strict';
/*global render */


const STORE = (function(){

  return {
    videos: [],
    setVideos: function(videos) {
      this.videos = videos;
      render();
    },
  };


}());