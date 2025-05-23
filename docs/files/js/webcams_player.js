
function stop_webcam_video(elem_id) {
    var video = document.getElementById(elem_id);
    video.pause();
    video.currentTime = 0;
    video.setAttribute('onclick', "play_webcam_video("+elem_id+")")
}
function play_webcam_video(elem_id) {
    if(Hls.isSupported())
    {
        var video = document.getElementById(elem_id);
        document.querySelectorAll('video').forEach(vid => vid.pause());

        var hls = new Hls();            
        hls.loadSource(video.src);
        hls.attachMedia(video);
        video.setAttribute('onclick', "stop_webcam_video("+elem_id+")")
        hls.on(Hls.Events.MANIFEST_PARSED,function()
        {
            video.play();
        });
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl'))
    {
        video.src = 'playlist.m3u8';
        video.addEventListener('canplay',function()
        {
            video.play();
        });
    }
}

