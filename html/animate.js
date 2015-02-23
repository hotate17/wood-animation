(function($){
	$(document).ready(function(){
		//$(".background-clip").patternizer();
		var smokeContainer = [];
		 for(var i = 0; i < 5; i++){
		 	smokeContainer.push('<div class="smoke"></div>');
		 }
		 $('.slide').each(function(){
		 	$(this).append(smokeContainer);
		 });

		$('#slider') .cycle({ 
		    /*fx:     'fade', 
		    speed:  3000, 
		    before: resetSmoke,
		    after: anim,
		    timeout: 7000*/
		    fx: 'custom',
		    cssBefore: {
		    	opacity: 0
		    },
		    animIn: {
		    	opacity: .8
		    },
		    animOut: {  
		        opacity: 0  
		    },
		    cssAfter: {
				opacity: 0
		    },
		    speed : 3000,
		    timeout: 7000,
		    before: resetSmoke,
		    after: anim
		});

		/*setTimeout(function(){
			smoke();
			$('.slide header h1').transition({opacity: .8, color: 'rgba(0,0,0, .7)'}, 1500, 'linear', function(){
				setTimeout(stopSmoke, 1000);
				$(this).transition({textShadow : '-1px -1px 2px rgba(132,74,42, .8)'}, 800, 'linear');
			});
		}, 600);*/

		function anim(){
			//setTimeout(function(){
				smoke();
				$('.slide').each(function(){
					if($(this).css('left') == '0px' || $(this).css('left') == '0'){
						$(this).find('span').transition({opacity: .8, color: 'rgba(0,0,0, .7)'}, 2000, 'linear', function(){
							setTimeout(stopSmoke, 1000);
							$(this).transition({textShadow : '-1px -1px 2px rgba(132,74,42, .8), 0 0 4px rgba(0,0,0, .8)'}, 800, 'linear');
						});
					}
				});
				
			//}, 600);
		}

		//Flippy
		$('.location').each(function(){
			$(this).on('click', function(){
				var that = $(this);
				$(this).flippy({
					content: $(this),
					direction:"LEFT",
				    duration:"750",
				    onStart:function(){
				        //$(this).hide();
				        if(that.hasClass('shadow')){
				        	that.removeClass('shadow');
				        }
				    },
				    onFinish:function(){
				    	//console.log(that);
				        that.addClass('shadow');
				    }
				});
			});
		});
	});

	function smoke(){
		$('.slide').each(function(){
			if($(this).css('left') == '0px' || $(this).css('left') == '0'){
				$(this).children('.smoke:first').transition({opacity: '1'}, 500);
					$(this).find('.smoke').each(function(i){
						if($(this).css('opacity') == '1'){
					 		$(this).stop().delay(i*100).animate({
						 		opacity: '0',
						 		top: '-200px'
						 	}, 5000, 'linear');
				 		}else {
						 	$(this).delay(i*100).animate({
						 		opacity: '1',
						 		top: '-200px'
						 	}, 5000, 'linear', function(){
						 		$(this).animate({
						 			opacity: '0'
						 		}, 300);
						 	});
				 		}
					});
			}
		});
		 /*$('.smoke:first').transition({opacity: '1'}, 500);
		 $('.smoke').each(function(i){
		 	if($(this).css('opacity') == '1'){
		 		$(this).stop().delay(i*100).animate({
			 		opacity: '0',
			 		top: '-200px'
			 	}, 5000, 'linear');
			 }else {
			 	$(this).delay(i*100).animate({
			 		opacity: '1',
			 		top: '-200px'
			 	}, 5000, 'linear', function(){
			 		$(this).animate({
			 			opacity: '0'
			 		}, 300);
			 	});
			 }
		 });*/
	}//smoke function
	function stopSmoke(){
		$('.smoke').each(function(){
			$(this).stop().animate({
				opacity: '0'
			}, 3000);
		});
	}//stop func
	function resetSmoke(){
		if($('#slider').is(':hidden')){$('#slider').fadeIn(300);}
		$('.smoke').each(function(){
			$(this).css({top: '50%'});
		});
		//$('.slide').hide();
		$('.slide header h1 span').transition({opacity: '0'}, 3000);
	}
}(jQuery));