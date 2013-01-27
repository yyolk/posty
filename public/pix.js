
/**
 * Module dependencies.
 */

var Dropload = require('dropload');

/**
 * Drop uploads.
 */

var drop = Dropload(document.querySelector('#drop'));

drop.on('upload', function(upload){
  console.log(upload.file);
});
