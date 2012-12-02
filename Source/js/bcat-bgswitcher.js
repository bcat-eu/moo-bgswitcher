/**
 * bcat BG Switcher - unobtrusive background image switcher
 * @version 1.0.0
 * @MooTools version 1.4
 * @author Yuriy Davats http://www.bcat.eu
 * @copyright Yuriy Davats
 */

var BgSwitcher = new Class({
        Implements: [Options],
        options: {
		wrapperId: 'bg-body',
		startIndex: 0,
		timeout: 12000,
		alt: 'Picture',
		fullscreen: false
        },
        initialize: function(urls, options){
		this.urls = urls;
		this.setOptions(options);
		this.currentIndex = this.options.startIndex;
		this.wrapper = $(this.options.wrapperId);		
		this.currentImage = Asset.image(this.urls[this.currentIndex], {    
		    alt: this.options.alt,
		    id: 'bg-image-'+this.currentIndex,	
		    style: 'visibility: visible; opacity: 1;',
		    onLoad: function () {
			if (this.options.fullscreen) {
			  this.currentImage.removeProperty('width');
			  this.currentImage.removeProperty('height');
			}
			this.currentImage.inject(this.wrapper);
		    }.bind(this)
		});		
		this.currentIndex++;
		this.runSlideShow();
        },
        urls: [],
	currentIndex: '',
	currentImage: '',
	wrapper: '',	
	periodicalTimer: '',
	updateImage: function(){	  
	  // set index to 0 at the end of array
	  if (!this.urls[this.currentIndex]) {this.currentIndex = 0;}	  
	  var nextImage = $('bg-image-'+this.currentIndex);
	  if (nextImage) {  	    
	    this.wrapper.getElements('img').fade('out'); // can't cache cause of on the fly load
	    nextImage.fade('in');
	  } else {
	    nextImage = Asset.image(this.urls[this.currentIndex], {    
		    alt: this.options.alt,
		    id: 'bg-image-'+this.currentIndex,
		    opacity: 0,
		    style: 'visibility: hidden; opacity: 0;',
		    onLoad: function () {
			if (this.options.fullscreen) {
			  nextImage.removeProperty('width');
			  nextImage.removeProperty('height');
			}
			nextImage.inject(this.wrapper);	
			nextImage.fade('in');			
		    }.bind(this)
		});	    
	  } 	  
	  	  
	  this.currentImage = nextImage;	  
	  this.currentIndex++;
	},
	runSlideShow: function(){
	  this.periodicalTimer = this.updateImage.periodical(this.options.timeout, this);	  
	}
});
