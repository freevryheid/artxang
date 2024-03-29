/*jslint unparam: true */
/*global window, document, $ */

$(function () {
    //'use strict';

    $('.modal').modalResponsiveFix({ debug: true })
    $('.modal').touchScroll();

    // Load images via flickr for demonstration purposes:
    $.ajax({
        url: 'http://api.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.interestingness.getList',
            api_key: '7617adae70159d09ba78cfec73c13be3'
        },
	    dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (data) {
        var gallery = $('#gallery'),
            url;
        $.each(data.photos.photo, function (index, photo) {
            url = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            $('<a data-gallery="gallery"/>')
                .append($('<img>').prop('src', url + '_s.jpg'))
                .prop('href', url + '_b.jpg')
                .prop('title', photo.title)
                .appendTo(gallery);
        });
    });
});
