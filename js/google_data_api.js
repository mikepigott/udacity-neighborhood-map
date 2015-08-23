// Photos with GPS: https://picasaweb.google.com/data/feed/base/user/102175560363979710895/albumid/5359807650340350225?alt=json&hl=en_US

$(document).ready(function(){
        var json_Album_URI = "https://picasaweb.google.com/data/feed/base/"
            + "user/"       +   "mpigott"
            + "?alt="       +   "json"
            + "&kind="      +   "album"
            + "&hl="        +   "en_US"
            + "&fields="    +   "entry(media:group,id)"
            + "&thumbsize=" +   104;

    $.getJSON(json_Album_URI,
    function(data){
        $.each(data.feed.entry, function(i,item){
            //Thumbnail URL
            //$.each(item.media$group.media$thumbnail, function(i,item){
            //    var album_thumb_URL = item.url;
            //    $('#images').append("Album Thumbnail: " + album_thumb_URL + '<br />');
            //});
            //Album Title
            //var album_Title = item.media$group.media$title.$t;
            //$('#images').append("Album Title: " + album_Title + '<br />');
            //Album Description
            //var album_Description = item.media$group.media$description.$t;
            //$('#images').append("Album Description: " + album_Description + '<br />');
            //Album ID
            var album_ID = item.id.$t;
                //Get Numerical ID from URL
            album_ID = album_ID.split('/')[9].split('?')[0];
            //$('#images').append("AlbumID: " + album_ID + '<br /><br />');
            console.log(item.id.$t);

    var json_Photo_URI = "https://picasaweb.google.com/data/feed/api/"
        + "user/"       +   "mpigott"
        + "/albumid/"   +   album_ID
        + "?alt="       +   "json"
        //+ "&kind="      +   "photo"
        //+ "&hl="        +   "en_US"
        + "&fields="    +  "entry/media:group/media:content,entry/media:group/media:description,entry/media:group/media:thumbnail,entry/gphoto:timestamp,entry/georss:where"  //"entry(media:group),entry(georss:where)"
        //+ "&thumbsize=" +   104;

    $.getJSON(json_Photo_URI,
    function(data){
        $.each(data.feed.entry, function(i,item){
        	$.each(item.media$group.media$content, function(i,item){
                var photo_URL = item;
                $('#images').append(JSON.stringify(photo_URL, null, 4) + '<br />');
            });
            //$('#images').append(item + "Album Photos: <br />");
            /*Photo URL
            $.each(item.media$group.media$content, function(i,item){
                var photo_URL = item.url;
                $('#images').append("Image Photo URL: " + photo_URL + '<br />');
            });
            //Thumbnail URL
            $.each(item.media$group.media$thumbnail, function(i,item){
                var photo_Thumb_URL = item.url;
                $('#images').append("Image Thumbnail URL: " + photo_Thumb_URL + '<br />');
            });
            //Photo Title
            var photo_Title = item.media$group.media$title.$t;
            $('#images').append("Image Photo_Title: " + photo_Title + '<br />');
            //Photo Description
            var photo_Description = item.media$group.media$description.$t;
            $('#images').append("Image Photo Description: " + photo_Description + '<br /><br />');
            */
        });
    });
        });
    });
});