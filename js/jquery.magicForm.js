/*
	通用js
*/

(function($){
	$.fn.magicForm = function(options){
	//start	
		$.fn.magicForm.defaults = {
			//默认配置
		};
		
		return this.each(function(i){
			var opts = $.extend({},$.fn.magicForm.defaults,options);
			var oThis = $(this);//当前select元素
			var oSelects = oThis.find('option');//当前select的options
			var magicDiv = $('.magic-select');//模拟层
			//$(this).hide();
			var curVal = oSelects.filter(':selected').text();
			var html = '<div class=\"magic-select\" id=\"magicSelect'+i+'\"><div class=\"selected\"><input type=\"text\" value=\"'+curVal+'\"><i></i></div><ul>';
			var chosenClass = '';
			oSelects.each(function(){
				if($(this).attr('selected')!=''&&$(this).attr('selected')!=undefined){
					chosenClass = 'chosen';
				}else{
					chosenClass = '';
				}
				html += "<li class='"+ chosenClass +"'>"+ $(this).text() +"</li>";
			});
			html += '</ul></div>';
			$(html).insertAfter(oThis);
			//$(this).parent().append(html);
			//
			$('.selected').click(function(){
				$(this).next('ul').toggle();
			});
			//点击赋值
			$('.magic-select li').click(function(){
				oSelects.eq($(this).index()).attr('selected','selected');
				$('#magicSelect'+i+' input').val($(this).text());
				$(this).addClass('chosen').siblings('.chosen').removeClass('chosen');
				$('.magic-select ul').hide();
			});
			//select值改变，重新渲染
			oThis.change(function(){
				$('#magicSelect'+i).remove();
				oThis.magicForm();
			});
		});
	//end	
	}
	
	
})(jQuery);