$(document).ready(function(){ 
    $('.targetDiv').hide();
    $('.default').show();

      $('.showSingle').click(function() {
        $('.targetDiv').hide();
        $('#div' + $(this).attr('target')).show();
        $(".showSingle.active").removeClass("active")
        $(this).addClass("active")
      }); 

      // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    $('.item-gallery').click(function(){
      $('.item-gallery.get-hover-color').removeClass("get-hover-color");
      $(this).addClass("get-hover-color")
    })
    $('.dropdown-toggle').dropdown();
    $('#divNewNotifications li').on('click', function() {
    $('#dropdown_title').html($(this).find('a').html());
    });
    $('#divNewNotifications2 li').on('click', function() {
      $('#dropdown_title2').html($(this).find('a').html());
      });
});