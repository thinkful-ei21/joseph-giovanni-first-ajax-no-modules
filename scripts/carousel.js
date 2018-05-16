'use strict';

import {STORE} from './STORE.js';
import { VideoList } from './VideoList.js';
import {Api} from './Api.js';


export const Carousel = (function(){

    const handleThumbClicked = function(){
        $('.results').on('click','.thumbnail',function(event){
            STORE.embedded = STORE.videos.find(item => item.id === event.target.id)
            VideoList.render()
        })
    };
    const handleNextClicked = function(){
        $('.navigation').on('click','.next',function(event){
            console.log('store', STORE)
            Api.fetchVideos(STORE.searchTerm,VideoList.render,STORE.nextPage)
        })

    };

    const handlePrevClicked = function(){
        $('.navigation').on('click','.prev',function(event){
            console.log('store', STORE)
            Api.fetchVideos(STORE.searchTerm,VideoList.render,STORE.prevPage)
        })


    };

    return{
        handleThumbClicked: handleThumbClicked,
        handlePrevClicked: handlePrevClicked,
        handleNextClicked: handleNextClicked,

    }





}())