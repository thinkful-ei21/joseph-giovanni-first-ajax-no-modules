'use strict';

import {STORE} from './STORE.js';
import {Api} from './Api.js';

export const VideoList =(function(){

  const generateListItem = function(video) {
  //  href="https://www.youtube.com/watch?v=${video.id}"
    return `
            <a class="thumbnail" title="${video.title}"><img ID="${video.id}"  src="${video.thumbnail}" alt="${video.title}"><a>
           `;
  };

  const generateEmbeddedVideo = function(embedded){  
    return `​<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/${embedded.id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <a class="links" href="https://www.youtube.com/channel/${embedded.channel}">More from this Channel</a>
        `
       
  };
  
  const generateNavButtons = function(){
    return `<button class='prev'>previousResults</button> <button class='next'>nextResults</button>`
  };

  const render = function() {
    const output = STORE.videos.map(item =>VideoList.generateListItem(item));
    $('.results').html(output);
    const nav = generateNavButtons();
    $('.navigation').html(nav);
    const embedded = generateEmbeddedVideo(STORE.embedded);
    if(Object.keys(STORE.embedded).length !== 0){$('.embedded').html(embedded)}
  };

  const handleFormSubmit = function() {
    $('form').submit(function(event){

      event.preventDefault();
      const formInput = $('#search-term').val();
      Api.fetchVideos(formInput,VideoList.render);
      STORE.searchTerm = formInput;
      event.target.reset();
        
    });     
  };
    

  return {
    generateListItem: generateListItem,
    render:render,
    handleFormSubmit:handleFormSubmit,
    };

}());