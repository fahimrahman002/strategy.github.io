/**
 * Librairie PRELOAD
 * -------------------------
 * Matthieu SAUVET - msauvet.web@mail.com
 * Last update: 12/2015
 * jQuery required
 */
 
var MS_Preload = {
	
	listenPreloadElement: function (el) {
		var src = '',
			img,
			// L'élément et ses enfants
			list = el.add(el.find('*')),
			toload_amount = 0,
			loaded_amount = 0;
		
		// Images dans les enfants
		list.each(function () {
			var src = '',
				img,
				child = jQuery(this);
				
			src = child.css('background-image').replace('url("','').replace('")','');
			// child.css('background-image', 'none');
			if(src != 'none') {
				toload_amount += 1;
				img = new Image();
				// console.log('Loading image '+src);
				img.onload = img.onerror = function () {
					if(img.complete) {
						loaded_amount += 1;
						if(loaded_amount >= toload_amount) {
							el.removeClass('preload');
							el.addClass('loaded');
						}
					} else {
						console.warn('MS_Preload', 'in listenPreloadElement', 'Problème lors du chargement de l\'image.');
					}
				};
				img.src = src;
			}
		});
	},
	
	// Active pour tout les éléments portant la classe donnée
	listenClassPreload: function (classname) {
		jQuery('.'+classname).each( function() {
			MS_Preload.listenPreloadElement(jQuery(this));
		});
	}
};