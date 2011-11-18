#THIS IS OLD AND ABANDONED - DON'T USE IT

before you read through all of this, you should know that there is a more complete dojo application boilerplate which is being actively maintained https://github.com/rmurphey/dojo-boilerplate

#dojo requirejs template app
this code is a template to demonstrate how to use requirejs to load dojo.  i do not intend to keep
updating this repository - it is just a demo to show how to load dojo with requirejs.

leave comments in the commits if you have any questions and i'll try to answer them inline as well
as update this readme so that others can find answers here easily.

##getting started
    git clone --recursive git://github.com/neonstalwart/dojo-requirejs-template.git
    # at this point you can view dojo-requirejs-template/src/index.html
    cd dojo-requirejs-template/src
    requirejs/build/build.sh sample.build.js
    # when this completes you can view dojo-requirejs-template/build/index.html

##known issues
 - no known issues

##advice
 - don't actually layout your folders the same way as this template.  i only did it this way so
 that i could use git submodules.  instead of including the whole requirejs project, i would only
 include require.js and the require folder (if you need any plugins) as siblings of dojo and dijit.

##how to
to get dojo and dijit to work with requirejs, simply configure requirejs with the information it needs to find the dojo and dijit packages
    // point to the dojo and dijit packages
    packages: [
        {
            name: 'dojo',
            location: 'dojo',
            main:'lib/main-browser',
            lib: '.'
        },
        {
            name: 'dijit',
            location: 'dijit',
            main:'lib/main',
            lib: '.'
        }
    ],
you'll need to configure the build profile similarly.  ...and that's it.
