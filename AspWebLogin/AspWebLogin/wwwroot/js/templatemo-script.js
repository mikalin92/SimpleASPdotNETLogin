

const initBg = (autoplay = true) => {
    const bgImgsNames = ['diagoona-bg-1.jpg', 'diagoona-bg-2.jpg', 'diagoona-bg-3.jpg'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    jQuery.backstretch(bgImgs, {duration: 4000, fade: 500});

    if(!autoplay) {
      jQuery.backstretch('pause');  
    }    
}

const setBg = id => {
    jQuery.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = jQuery('body').height();
    const tmBgLeft = jQuery('.tm-bg-left');

    jQuery('.tm-bg').height(bgHeight);

    if(windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `jQuery{bgHeight}px solid transparent`);                
    } else {
        tmBgLeft.css('border-left', `jQuery{windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}

jQuery(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);    
    setBgOverlay();

    const bgControl = jQuery('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');
        jQuery(this).addClass('active');
        const id = jQuery(this).data('id');                
        setBg(id);
    });

    jQuery(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = jQuery('.tm-bg-control');
        bgControl.removeClass('active');
        const current = jQuery(".tm-bg-controls-wrapper").find(`[data-id=jQuery{index}]`);        
        current.addClass('active');
    });

    jQuery(window).resize(function() {
        setBgOverlay();
    });
});