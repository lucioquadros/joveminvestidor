$(function( scope, $ ) {

	var page;

	$(function () {
		initScript();
	});

	function initScript() {

		var script = $('[data-init="Index"]').data('init'),
			method = $('[data-init="Index"]').data('method');

		if ( typeof scope[script] === 'function' ) {

			if ( !(page instanceof scope[script]) ) {

				page = new scope[script]();
			}

			if ( typeof page[method] === 'function' ) page[method](); 
		}
	}

	scope.Index = function() {

		that = {};

		that.init = function() {

			$(document).on('click', '#menu a', that.slowScroll);

			$('#form-cadastro').submit( that.post );
		}

		that.slowScroll = function() {

		    var idElemento   = $(this).attr("href"),
		    	deslocamento = $(idElemento).offset().top;

		    $('html, body').animate({ scrollTop: deslocamento }, 1000);
		}


		that.post = function() {
			
			var $form = $(this),
				data  = $form.serialize();

				console.log(data)

			$.ajax({
				'url'   : 'php/cadastro.php',
				'type'  : 'POST',
				'data'  : data,
				'async' : false,
				'dataType' : 'JSON',
				'success'  : function(data) {
					
					if (data.retorno == 1) {
						alert('Cadastro efetuado com sucesso!')
					}
				},
				'error' : function(data) {
					alert(data)
				}
			})

		}


		return that;
	}

}(window, window.jQuery));