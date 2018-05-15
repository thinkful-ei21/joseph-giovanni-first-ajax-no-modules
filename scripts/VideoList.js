'use strict';


const VideoList =(function(){

  const generateListItem = function(video) {
  
    return `<li> <div><a> ${video.title} </a>
           <img src="${video.thumbnail}" alt="${video.title}"><div>>
          </li>`;
  };

  const render = function() {
    const output = STORE.videos.map(item =>VideoList.generateListItem(item));
    $('.results').html(output);
  };

  const handleFormSubmit = function() {
    $('form').submit(function(event){

      event.preventDefault();
      const formInput = $('#search-term').val();
      Api.fetchVideos(formInput,VideoList.render);
      event.target.reset();
          
    });
        
  };

  return {
    generateListItem: generateListItem,
    render:render,
    handleFormSubmit:handleFormSubmit
  };

}());