'use strict';
/*global render */


export const STORE = (function(){

  const setVideos = function(videos) {
    this.videos = videos;
  };

  return {
    videos: [],
    setVideos: setVideos,
    embedded: {},
    nextPage: '',
    prevPage: '',
    searchTerm: '',
  };


}());