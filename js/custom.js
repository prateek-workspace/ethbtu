
new WOW().init();
//$.noConflict();
function openSideNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

jQuery.noConflict()(function($){
$(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 50){
        //console.log(scrollTop);
        $('.main-menu-stick, .main-menu-stick-none').addClass('sticky-content');
    } else {
        $('.main-menu-stick,.main-menu-stick-none').removeClass('sticky-content');
    }
});


$(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 300){
        //console.log(scrollTop);
        $('.back-top').addClass('show animated slideInUp');
    }
	else {
        $('.back-top').removeClass('show animated slideInUp');
    }
});


$(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});



$(function(){
	$('#main-menu .navbar-toggler').click(function(){
		if($('#main-menu .navbar-toggler i').hasClass('fa-bars'))
		{
			$('#main-menu .navbar-toggler i').removeClass('fa-bars');
			$('#main-menu .navbar-toggler i').addClass('fa-times');
		}
		else{
			$('#main-menu .navbar-toggler i').removeClass('fa-times');
			$('#main-menu .navbar-toggler i').addClass('fa-bars');
		}
	});
});


$(function(){
	$('#top-menu .navbar-toggler').click(function(){
		if($('#top-menu .navbar-toggler span').text()=='Menu')
		{
		  $('#top-menu .navbar-toggler span').text('Close');      
		  $('#top-menu .navbar-toggler i').removeClass('fa-bars');
		  $('#top-menu .navbar-toggler i').addClass('fa-times');
      
		}
		else{
      $('#top-menu .navbar-toggler span').text('Menu');
      $('#top-menu .navbar-toggler i').removeClass('fa-times');
			$('#top-menu .navbar-toggler i').addClass('fa-bars');
		}
	});
});

$(function () {
    "use strict";
    //changes done on 23-06-2021 replace class article-body by article-img class
    $(".article-img img,.simpletab-card img, .wtk-popup").click(function () {
		var attr = $(this).attr('src');
		if(typeof attr !== typeof undefined && attr !== false){
		var $src = $(this).attr("src");
		$(".show-article-image").fadeIn();
        $(".article-img-show img").attr("src", $src);
		}
		else{
		var $popup = $(this).attr("name");
        $(".show-article-image").fadeIn();
        $(".article-img-show img").attr("src", $popup);
		}
    });    
    $(".overlay-close, .overlay").click(function () {
        $(".show-article-image").fadeOut();
    });
    
});

$(function () { 
 //$.fn.dataTable.ext.errMode = 'throw';
 //$.fn.dataTable.moment('DD/MM/YYYY');
var colname=$("#sortdate").attr("class");
var col=0;
var datatype='natural';
switch(colname)
{
case 'sortdate1': col=0;
datatype='date-eu';
break;
case 'sortdate2': col=1;
datatype='date-eu';
break;
case 'sortdate3': col=2;
datatype='date-eu';
break;
case 'sortdate4': col=3;
datatype='date-eu';
break;
case 'sortdate5': col=4;
datatype='date-eu';
break;
case 'sortdate6': col=5;
datatype='date-eu';
break;
default: col=0;
datatype='natural';
break;
}
		//$('.dataTables_length').addClass('bs-select');  
		// $('#datatable-page1, #datatable-page2, #datatable-page3, #datatable-page4').DataTable({
			// "order": [[ col, "desc" ]], //or asc 
    		// "columnDefs" : [{"targets":col, "type":datatype}],     		
		// "pagingType": "simple_numbers",// "simple" option for 'Previous' and 'Next' buttons only
		// dom: 'Blfrtip',
    // buttons: [
        // {
            // extend: 'csv',
            // text: 'Excel'
        // },
        // 'print',
		// 'pdf'
    // ]
		// });
		
		$('#datatable-filter tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" class="form-control" placeholder="Search '+title+'" />' );
    } );
    // $('.srch-row .srch-col').each( function () {
    //     var title = $(this).text();
    //     $(this).html( title + '<input type="text" class="form-control" placeholder="Search '+title+'" />' );
    // } );
    
    var table = $('#datatable-filter').DataTable({ 
	"order": [[ col, "desc" ]], //or asc 
    		"columnDefs" : [{"targets":col, "type":datatype}],	
       	
    pagingType: "simple_numbers",// "simple" option for 'Previous' and 'Next' buttons only
    dom: 'Blfrtip',
    buttons: [ 
        {extend: 'csv',text: 'Excel'},
        {extend:'print',text:'print'},
        'pdf'] ,select:true,
    initComplete: function () {
        // Apply the search
        this.api().columns().every( function () {
            var that = this; 
            $( 'input', this.footer() ).on( 'keyup change clear', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();                        
                }
            } );
        });
    },    
});

$('#datatable-filter tfoot th').appendTo('#datatable-filter thead');
// Setup - add a text input to each footer cell
$('#datatable-filter tbody').on( 'click', 'tr', function () {
    $(this).toggleClass('selected');
} );
//$('#datatable-page1_filter').hide();

// DataTable
var table1 = $('#datatable-simple').DataTable({    
    //"order": [[ col, "desc" ]], //or asc 
	"order": [[ col, "desc" ]], //or asc 
    "columnDefs" : [{"targets":col, "type":datatype}],   	
    pagingType: "simple_numbers"// "simple" option for 'Previous' and 'Next' buttons only
    
    
});
		
	});
	
	
	
$(function () {	
		$(".wtk-member").click(function () {
		var memid = $(this).attr("data-target");    
		$(memid).modal({
		show:true
		});	
	});
});


$(document).ready(function(e){
      $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.2209505308883!2d80.23113091435658!3d26.51301748356619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3701e9a5cfa9%3A0xc06c37b42dd155b0!2sDepartment%20of%20Economic%20Sciences%2C%206th%20Floor%2C%20Faculty%20Building%2C%20IIT%20Kanpur!5e0!3m2!1sen!2sin!4v1615458523957!5m2!1sen!2sin" width="100%" height="360" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
             return true;
        });


// $(function () {	
		// $(".wtk-btn-dark").click(function () {
		// if($('html').hasClass('theme-light'))
		// {
			// $('html').removeClass('theme-light');
			// $('html').addClass('theme-dark');
		// }		
	// });
// });

// $(function () {	
	// $(".wtk-btn-light").click(function () {
		// if($('html').hasClass('theme-dark'))
		// {
			// $('html').removeClass('theme-dark');
			// $('html').addClass('theme-light');
		// }
	// });	
// });

$(function(){
	
	if($("a[title=Hindi]"))
	{
		$("<span style='color:white'>| </span>").insertBefore(".wtk-lang-bar a[title=Hindi]");
	}
	
});
});