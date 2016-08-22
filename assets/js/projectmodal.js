function openProject(button) {

    var id = $(button).data('target');
    var $project = $(button).closest('.card');

    var scrollTop = $(window).scrollTop();
    var distanceTop = $project.offset().top;

    var modalTop = distanceTop - scrollTop; 
    var modalLeft = $project.offset().left;
    var modalWidth = $project.innerWidth();
    var modalHeight = $project.innerHeight();
    var line = '';
    project = $('#project');

    $(project).css({
        'top' : modalTop,
        'left' : modalLeft, 
        'width' : modalWidth,
        'height' : modalHeight,
        'opacity':1,
        'z-index' : '1032'
    });

    $(project).addClass('has-background');

    setTimeout(function(){
       $(project).addClass('open');
    },30);

    setTimeout(function(){
        $('body').addClass('noscroll');
        $(project).addClass('scroll');
    },1000);
    
    //the modal classes in this dynamic html are bootstrap classes unrelated to the modal classes in modal javascript
    if (id=="gallery") {
        line = '';
        line += '<div class="modal-header">';
        line += '<button type="button" class="close"  data-dismiss="modal" aria-hidden="true">&times;</button>';
        //line += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        line += '<h4 class="modal-title"id="myModalLabel">Gallery</h4>';
        line += '</div>';
        line += '<div class="section gallery">';
        line += '<div class= "modal-body">';
        line += '<ul>';
        line += '<li class="bumblebee">Bumblebees</h2></li>';
        line += '<li class ="ladybird">Ladybirds</li>';
        line += '<li class="caterpillar">Caterpillars</li>';
        line += '<li class="butterfly">Butterflies</li>';
        line += '<li class="dragonfly">Dragonflies</li>';
        line += '</ul>';
        line += '</div>';
        line += '<div class="container" class="gallerycontainer">';
        //
        line += '<div class="row" id="bee">';
        line += '<div class="col-sm-4">';
        line += '<div class="card card-plain">';
        line += '<div class="image">';
        line += '<img src="assets/img/nurs1.jpg" alt="..."/>';
        line += '<div class="filter">';
        line += '<button type="button" class="btn btn-neutral btn-simple">';
        line += '<i class="fa fa-image"></i> View Image</button>';
        line += '</div></div></div></div>';
        //
        line += '<div class="col-sm-8">';
        line += '<div class="card card-plain">';
        line += '<div class="image">';
        line += '<img src="assets/img/nurs9.jpg" alt="..."/>';
        line += '<div class="filter">';
        line += '<button type="button" class="btn btn-neutral btn-simple">';
        line += '<i class="fa fa-image"></i> View Image</button>';
        line += '</div></div></div></div>';
        //
        line += '<div class="col-sm-8">';
        line += '<div class="card card-plain">';
        line += '<div class="image">';
        line += '<img src="assets/img/nurs3.jpg" alt="..."/>';
        line += '<div class="filter">';
        line += '<button type="button" class="btn btn-neutral btn-simple">';
        line += '<i class="fa fa-image"></i> View Image</button>';
        line += '</div></div></div></div>';
        //
        line += '<div class="col-sm-4">';
        line += '<div class="card card-plain">';
        line += '<div class="image">';
        line += '<img src="assets/img/nurs1.jpg" alt="..."/>';
        line += '<div class="filter">';
        line += '<button type="button" class="btn btn-neutral btn-simple">';
        line += '<i class="fa fa-image"></i> View Image</button>';
        line += '</div></div></div></div>';
        line += '</div>';
        //end of row
        line += '<div class="row" id="bird">';
        line += '<div class="col-sm-8">';
        line += '<div class="card card-plain">';
        line += '<div class="image">';
        line += '<img src="assets/img/nurs1.jpg" alt="..."/>';
        line += '<div class="filter">';
        line += '<button type="button" class="btn btn-neutral btn-simple">';
        line += '<i class="fa fa-image"></i> View Image</button>';
        line += '</div></div></div></div>';
        //
        line += '<div class="col-sm-4">';
        line += '<div class="card card-plain">';
        line += '<div class="image">';
        line += '<img src="assets/img/nurs9.jpg" alt="..."/>';
        line += '<div class="filter">';
        line += '<button type="button" class="btn btn-neutral btn-simple">';
        line += '<i class="fa fa-image"></i> View Image</button>';
        line += '</div></div></div></div>';
        //
        line += '<div class="col-sm-8">';
        line += '<div class="card card-plain">';
        line += '<div class="image">';
        line += '<img src="assets/img/nurs3.jpg" alt="..."/>';
        line += '<div class="filter">';
        line += '<button type="button" class="btn btn-neutral btn-simple">';
        line += '<i class="fa fa-image"></i> View Image</button>';
        line += '</div></div></div></div>';
        //
        line += '<div class="col-sm-4">';
        line += '<div class="card card-plain">';
        line += '<div class="image">';
        line += '<img src="assets/img/nurs1.jpg" alt="..."/>';
        line += '<div class="filter">';
        line += '<button type="button" class="btn btn-neutral btn-simple">';
        line += '<i class="fa fa-image"></i> View Image</button>';
        line += '</div></div></div></div>';
        line += '</div></div></div>';
        //end of row,container and section;
        line += '<div class="modal-footer">';
        line += '<button type="button" class="btn btn-default btn-simple boo" data-dismiss="modal">Close</button>';
        line +='</div>';
        
        $(project).html(line);

        // Gallery show and hide
        $(function() {
          // Set first room visible
          $('#bird').hide();
          $('#bee').show();
          $('.bumblebee').css("font-weight","Bold");
          $('.bumblebee').css("font-size","25px");
          // Prepare for other rooms to be clicked
          $('.bumblebee').on('click',function(){
            $('#bird').hide();
            $('.ladybird').css("font-weight","Normal");
            $('.ladybird').css("font-size","20px");
            $('#bee').fadeIn(3000);
            $('.bumblebee').css("font-weight","Bold");
            $('.bumblebee').css("font-size","25px");
          }); 
          $('.ladybird').on('click',function(){
            $('#bee').hide();
            $('.bumblebee').css("font-weight","Normal");
            $('.bumblebee').css("font-size","20px");
            $('#bird').fadeIn(3000);
            $('.ladybird').css("font-weight","Bold");
            $('.ladybird').css("font-size","25px");
          }); 
        });
    }
    //next if statement goes here

    $('.close').click(function(){
        project_content = $('#project');
        $(project_content).html("");
        $(project_content).removeClass('open scroll');
        $('body').removeClass("noscroll");
        setTimeout(function(){
            $(project_content).removeClass('has-background');
            $(project_content).css({
                'opacity':0,
                'z-index' : '-1'
            });
        },500);
    });
} 


