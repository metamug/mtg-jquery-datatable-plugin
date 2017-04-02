
(function ( $ ) {
	$.fn.mtgDataTable = function(tableId, url){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload = function () {
        	var dataset = [];
        	var list = JSON.parse(xhr.responseText);
        		
        	$.each(list, function(index, obj) {
        		var arr = [];
        		$.each(obj, function(key, val) {
	       			arr.push(val);
        		});
        		dataset.push(arr);
        	});

        	$(tableId).dataTable( {
		        "aaData": dataset						
		    });
		}

		xhr.send();	      
	}
}( jQuery ));