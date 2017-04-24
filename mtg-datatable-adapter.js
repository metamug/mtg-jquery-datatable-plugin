$.fn.mtgDataTable = function(url, columns){
	var that = this;
	$.ajax({
        "url": url,
        "success": function (json) {
            var dataset = [];	
			json.forEach(function(obj) {
				var arr = [];
				columns.forEach(function(colName) {
					arr.push(obj[colName]);
				});
				dataset.push(arr);
			});

			that.dataTable( {
			    "aaData": dataset						
			});
        },
        "dataType": "json"
    });    
}
