// document.querySelector('.container').addEventListener('click', function(){
//   this.className = (this.className === 'container night' ? 'container' : 'container night');
// })

$( window ).ready(function() {

	var wHeight = $(window).height();

	$('.container')
	.height(wHeight)
	.scrollie({
		scrollOffset : -50,
		scrollingInView : function(elem) {

			var bgColor = elem.data('background');

			$('body').css('background-color', bgColor);

		}
	});

});