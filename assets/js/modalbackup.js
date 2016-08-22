function openModal(button) {

    var id = $(button).data('target');
    var $modal = $(button).closest('.card');

    var scrollTop = $(window).scrollTop();
    var distanceTop = $modal.offset().top;

    var modalTop = distanceTop - scrollTop; 
    var modalLeft = $modal.offset().left;
    var modalWidth = $modal.innerWidth();
    var modalHeight = $modal.innerHeight();
    var line = '';
    modal = $('#modal');

    if (id=="gallery") {
        line = '';
        line += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        line += '<div>';
        line += '<div class="modal-details">';
        line += '<div class="container">';
        line += '<div class="modal-title">';
        line += '<h5>Morocco<span>.</span></h5>';
        line += '<h2>2014</h2>';
        line += '<div class="separator-container">';
        line += '<div class="separator line-separator">∎</div>';
        line += '</div>';
        line += '</div>';
        line += '<div class="row">';
        line += '<div class="col-md-4">';
        line += '<div class="modal-text">';
        line += '<p>The Kingdom of Morocco is the most westerly of the North African countries known as the Maghreb - the "Arab West". It has Atlantic and Mediterranean coastlines, a rugged mountain interior and a history of independence not shared by its neighbours.</p>';
        line += '</div>';
        line += '</div>';
        line += '<div class="col-md-8">';
        line += '<div class="row">';
        line += '</div>';
        line += '</div>';
        line += '</div>';
        line += '</div>';
        line += '</div>';
        line += '</div>';
    }

    

    $(modal).html(line);

    $(modal).css({
        'top' : modalTop,
        'left' : modalLeft, 
        'width' : modalWidth,
        'height' : modalHeight,
        'z-index' : '1032'
    });

    $(modal).addClass('has-background');

    setTimeout(function(){
       $(modal).addClass('open');
    },30);

    setTimeout(function(){
        $('body').addClass('noscroll');
        $(modal).addClass('scroll');
    },1000);

    $('.icon-close').click(function(){
        //modal repeated from up above .#modal equals modalcontent and equals modal?
        //why is other modals effected?
        modal_content = $('#modal');
        $(modal_content).removeClass('open scroll');
        $('body').removeClass("noscroll");
        setTimeout(function(){
            $(modal_content).removeClass('has-background');
            $(modal_content).css({
                'z-index' : '-1'
            });
            //???
            $(modal_content).remove();
        },500);
    });
} 


