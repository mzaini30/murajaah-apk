// save page position

posisi_scroll = localStorage.getItem('murajaah posisi')
$('html, body').animate({
	scrollTop: posisi_scroll
}, 700)
$(window).scroll(function(){
	localStorage.setItem('murajaah posisi', $(window).scrollTop())
})

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

if (localStorage.getItem('juz') === null){
	localStorage.setItem('juz', '[""]')
}
data = JSON.parse(localStorage.getItem('juz'))
$('.cek').each(function(){
	if ($.inArray($(this).val(), data) >= 0){
		$(this).attr('checked', true)
		$(this).siblings('.ikon-b').show()
		$(this).siblings('.ikon-a').hide()
	} else {
		$(this).siblings('.ikon-a').show()
		$(this).siblings('.ikon-b').hide()
	}
})
$('.cek').click(function(){
	if ($(this).is(':checked')){
		$(this).siblings('.ikon-b').show()
		$(this).siblings('.ikon-a').hide()
		data.push($(this).val())
		localStorage.setItem('juz', JSON.stringify(data))
	} else {
		$(this).siblings('.ikon-a').show()
		$(this).siblings('.ikon-b').hide()	
		data.remove($(this).val())
		localStorage.setItem('juz', JSON.stringify(data))
	}
})