/**
 * Librairie ROLLSTRING
 * -------------------------
 * Matthieu SAUVET - msauvet.web@gmail.com
 * Last update: 12/2015
 * jQuery required
 */

var MS_Rollstring = {
	anims: [],
	
	// Démarre l'animation
	roll: function (el, callback) {
		var finalvalue,
			speed,
			time = 150;
			
		// Split de la chaine de caractères
		finalvalue = parseFloat(el.text());
		// Vitesse d'incrémentation
		speed = finalvalue / time;
		
		el.addClass('rolling');
	
		MS_Rollstring.anims.push({
			el: el,
			curvalue: 0,
			finalvalue: finalvalue,
			state: 'playing',
			speed: speed,
			callback: callback
		});
	},
	
	update: function () {
		// Ajout ou pas de la class onscroll
		for(i = 0; i < MS_Rollstring.anims.length; i += 1) {
			if(MS_Rollstring.anims[i].state !== 'stop') {
				if(parseFloat(MS_Rollstring.anims[i].curvalue) >= parseFloat(MS_Rollstring.anims[i].finalvalue)) {
					MS_Rollstring.anims[i].curvalue = MS_Rollstring.anims[i].finalvalue;
					MS_Rollstring.anims[i].state = 'stop';
					MS_Rollstring.anims[i].el.addClass('rolled').removeClass('rolling');
					if(MS_Rollstring.anims[i].callback) {
						MS_Rollstring.anims[i].callback(MS_Rollstring.anims[i].el);
					};
				} else {
					MS_Rollstring.anims[i].curvalue += MS_Rollstring.anims[i].speed;
				}
				MS_Rollstring.anims[i].el.text(Math.floor(MS_Rollstring.anims[i].curvalue));
			}
		}
	}
};
window.setInterval(MS_Rollstring.update, 10);