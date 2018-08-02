function search() {
    var apiCall = document.createElement('script');
    var apiUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';
    var searchTerm = document.getElementById('searchTerm').value

    apiCall.src = apiUrl + searchTerm

    console.log(apiCall.src);

    document.querySelector('head').appendChild(apiCall);
}

function jsonFlickrFeed(data) {
    var results = '';

    data.items.forEach(function(image) {
        results += '<img src="' + image.media.m + '"</img>';
    });

    document.getElementById('results').innerHTML = results;
}