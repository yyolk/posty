
/**
 * Module dependencies.
 */

var Dropload = require('dropload')
  , thumb = require('thumb')
  , File = require('file');

/**
 * Ratio.
 */

var ratio = window.devicePixelRatio || 1;

/**
 * Image datauri size.
 */

var size = 2 == ratio ? 600 : 300;

/**
 * Drop uploads.
 */

var drop = Dropload(document.querySelector('#drop'));

/**
 * Images list.
 */

var images = document.querySelector('#images');

drop.on('upload', function(upload){
  var file = File(upload.file);
  file.toDataURL(function(err, uri){
    thumb(uri, size, size, function(err, img, uri){
      var li = document.createElement('li');
      li.appendChild(img);
      images.appendChild(li);
    });
  });
});
