$(document).ready(function(){
	var url = 'https://api.metamug.com/dtable/v1.0/employee';
	var columns = ['name', 'position', 'office', 'salary', 'age'];
	$('#datatable').mtgDataTable(url, columns);
	
});
