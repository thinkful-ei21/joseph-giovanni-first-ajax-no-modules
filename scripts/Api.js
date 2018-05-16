/* global STORE , render*/
'use strict';

import {STORE} from './STORE.js';

export const Api = (function(){

  const API_KEY = 'AIzaSyAVE0ZXkNk8gcvO4Px2a5_En7CWuRyLvIc';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  
  const fetchVideos = function(searchTerm, callback, page='') {
    const requestObject = {
      key: API_KEY,
      part: 'snippet',
      q: searchTerm,
      pageToken: page,
    };

    const decorateResponse = function(response) {
      const responses = response.items.map(function(item){
        
        return {
          id:item.id.videoId,
          title:item.snippet.title,
          thumbnail:item.snippet.thumbnails.medium.url,
          channel:item.snippet.channelId, 
        };
  
      });
      STORE.setVideos(responses);
      STORE.nextPage = response.nextPageToken
      STORE.prevPage = response.prevPageToken
      callback();
    
    };

    $.getJSON(BASE_URL, requestObject, decorateResponse);

  };

  return {
    fetchVideos,
  };
}());