/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var neat = require('node-neat').includePaths;
var sass = require('node-sass');
var fs = require('fs');

module.exports = function(defaults) {
    var app = new EmberAddon(defaults, {
        sassOptions: {
            includePaths: [
                'bower_components/bourbon/app/assets/stylesheets',
                'bower_components/neat/app/assets/stylesheets'
            ],
            sourceMap: true,
            outputStyle: 'compressed',
            precision: 6,
            functions: {
                // custom functions for sass rendering
                "inline-svg($file, $color1, $color2)": function(file, color1, color2, done) {
                    try {
                        fs = require('fs');
                        fs.readFile('app/styles/images/'+file.getValue(), 'utf8', function (err,data) {
                          if (err) {
                            throw new Error("File " + file.getValue() + " not found.");
                          }
                          data = replaceAll(color1.getValue(), color2.getValue(), data); // replace colors
                          done(sass.types.String( svgEncode(data) )); // return encoded svg data
                        });

                    } catch (e) {
                        done(sass.types.Error(e.toString()));
                    }
                }
            }
        }
    });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};


/*
 *  Helper functions
 */


function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function svgEncode(data) {
  data = Buffer(data).toString('base64');
  preData = "url('data:image/svg+xml;charset=utf-8;base64,"
  postData = "')";
  data = preData + data + postData
  return data;
}
