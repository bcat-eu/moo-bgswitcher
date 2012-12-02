MooTools Unobtrusive Background Image Switcher
===========

This MooTools class switches background images of a website - can be used as an image slider or a full screen background image switcher.

Infos and Demo http://www.bcat.eu/blog/mootools-unobtrusive-background-image-switcher/

How to use
----------

To use this class just create an instance and pass it an array of image URLs, the second optional parameter contains further options.
    
    var srcBgArray = [
      "/path/to/image1.jpg",
      "/path/to/image2.jpg",
      "/path/to/image3.jpg"
    ];
 
    window.addEvent('domready', function(){
      new BgSwitcher(
        srcBgArray,
        {alt: 'Alt text', wrapperId: 'some-id'}
      );
    });

Full screen functionality uses both JavaScript and CSS so if you want the full screen option to work, download the whole package and see our bare bones style.css. The CSS part is based on Perfect Full Page Background Image / CSS-Only Technique #2 from css-tricks - http://css-tricks.com/perfect-full-page-background-image/.