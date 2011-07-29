$(document).ready(function() {
	$('#header').remove();
	
	var imgList = [];
	
	$posts = $('div.post > a > img').each(function() {
		imgList.push(this);
	});
	
	$('#content').empty();

	for(var i = 0; i < imgList.length; i++) {
		var $newImgDiv = $('<div></div>');
		$newImgDiv.attr({
			'id': 'imgDiv',
			'class' : 'post'
		});
		
		var $img = $('<img src="' + $(imgList[i]).attr('src') + '" title="' + $(imgList[i]).attr('original-title') + '" original-title="' + $(imgList[i]).attr('original-title') + '"></img>');
		var filename = $img.attr('src');

		var $newlink = $('<a href="' + filename.replace('b.jpg', '.jpg') + '"></a>');		
		$img.appendTo($newlink);
		$newlink.appendTo($newImgDiv);
		$newImgDiv.appendTo($('#content'));
		
		$('#content a').lightBox();
	}
});