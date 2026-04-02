// [VN] container-resize — forcibly sizes view containers to fill #main
;(function(){
    var ids = ['landingContainer','loginContainer','loginOptionsContainer',
                'settingsContainer','welcomeContainer','waitingContainer'];
    function resizeContainers(){
        var main = document.getElementById('main');
        if(!main) return;
        var h = main.offsetHeight;
        var w = main.offsetWidth;
        if(h === 0 || w === 0) return;
        for(var i=0;i<ids.length;i++){
            var el = document.getElementById(ids[i]);
            if(el){
                el.style.height = h + 'px';
                el.style.width  = w + 'px';
            }
        }
    }
    // Run on every animation frame to catch jQuery show/hide changes
    function loop(){ resizeContainers(); requestAnimationFrame(loop); }
    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', loop);
    } else {
        loop();
    }
    window.addEventListener('resize', resizeContainers);
})();
