/* global STORE , render*/
'use strict';

const Api = (function(){

  const API_KEY = 'AIzaSyAVE0ZXkNk8gcvO4Px2a5_En7CWuRyLvIc';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  
  const fetchVideos = function(searchTerm, callback) {
    const requestObject = {
      key: API_KEY,
      part: 'snippet',
      q: searchTerm,
    };

    const decorateResponse = function(response) {
      const responses = response.items.map(function(item){
        
        return {
          id:item.id.videoId,
          title:item.snippet.title,
          thumbnail:item.snippet.thumbnails.medium.url,
        };
  
      });
      STORE.setVideos(responses);
      callback();
    };

    $.getJSON(BASE_URL, requestObject, decorateResponse);

  };

  return {
    fetchVideos,
  };
}());