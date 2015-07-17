const VisualReview = require('visualreview-protractor');
var vr = new VisualReview({
  hostname: 'localhost',
  port: 7000
});

exports.config = {

  specs: [
    'spec.js'
  ],

  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'jasmine2',

  capabilities: {
    browserName: 'chrome'
  },

  beforeLaunch: function() {
    // Creates a new run under project name 'myProject', suite 'mySuite'.
    return vr.initRun('myProject', 'mySuite');
  },

  afterLaunch: function(exitCode) {
    // finalizes the run, cleans up temporary files
    return vr.cleanup(exitCode);
  },

  // expose VisualReview protractor api in tests
  params: {
    visualreview: vr 
  }

};

