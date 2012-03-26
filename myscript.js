function callback(count) {
    if (count >= 200) {
        $(document).unbind('keydown');
        $(document).unbind('keyup');
        $(document).unbind('keypress');

        $('body').fadeOut(1500, function(){
            var old_body = $('body').html();
            var message = $('<h1>Shut the fuck up and write some code.</h1>').css({'font-size':'10em','font-weight':'bold'}).get(0);
            var link = $('<a>').attr('href', '#').html(message).click(function(){
                $('body').html(old_body).fadeIn('fast');
            });
            $('body').html(link).fadeIn('fast');
        });
        $(document).keypress(function(e){
            if (e.which === 115) { // 's'
                $('body').stop();
                $('body').css({'opacity':1.0});
            }
        });
    }
}

function stop(){
    
}

var skip = [
    "http://b.hatena.ne.jp/",
    "http://yahoo.co.jp/"
];

var urls = [
    location.href,
    'http://' + location.href.replace(/http:\/\/b\.hatena\.ne\.jp\/entry\//, '')
];
for(var i=0; i<urls.length; i++) {
    var url = urls[i];
    var api = 'http://api.b.st-hatena.com/entry.count';
    var req = api + '?url=' + encodeURIComponent(url);

    $.get(req, callback);
}
