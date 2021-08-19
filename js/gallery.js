alert("gallery");

var render = function render(res) {
  var ulTmpl = "";
  for (var j = 0, len2 = res.list.length; j < len2; j++) {
	var data = res.list[j].arr;
	var liTmpl = "";
	for (var i = 0, len = data.link.length; i < len; i++) {
	  var minSrc = 'https://raw.githubusercontent.com/lawlite19/blog-back-up/master/min_photos/' + data.link[i];
	  var src = 'https://raw.githubusercontent.com/lawlite19/blog-back-up/master/photos/' + data.link[i];
	  var type = data.type[i];
	  var target = src + (type === 'video' ? '.mp4' : '.jpg');
	  src += '';

	  liTmpl += '<figure class="thumb" itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">\
			<a href="' + src + '" itemprop="contentUrl" data-size="1080x1080" data-type="' + type + '" data-target="' + src + '">\
			  <img class="reward-img" data-type="' + type + '" data-src="' + minSrc + '" src="/assets/img/empty.png" itemprop="thumbnail" onload="lzld(this)">\
			</a>\
			<figcaption style="display:none" itemprop="caption description">' + data.text[i] + '</figcaption>\
		</figure>';
	}
	ulTmpl = ulTmpl + '<section class="archives album"><h1 class="year">' + data.year + '年<em>' + data.month + '月</em></h1>\
	<ul class="img-box-ul">' + liTmpl + '</ul>\
	</section>';
  }