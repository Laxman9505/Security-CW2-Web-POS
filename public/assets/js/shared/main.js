(function ($) {
  "use strict";
  // script nav for other pages
  let rclass = false;
  // $("html").on('click', function() {
  //     if (rclass) {

  //         $('.side_navbar_toggler').attr('aria-expanded', 'false');
  //         $('#mobilecategory,#navbarSidetoggle').removeClass('show');
  //     }
  //     rclass = true;
  // });

  // $("#mobilecategory,#navbarSidetoggle .navbar-nav,.side_navbar_toggler").on('click', function() {
  //     rclass = false;
  // });

  $(".more_slide_open").slideUp();
  $(".more_categories").on("click", function () {
    $(this).toggleClass("show");
    $(".more_slide_open").slideToggle();
  });
  // tooltip
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
  // calander
  $(document).ready(function () {
    $("#calendar").fullCalendar();
  });
  // add more food items
  $(document).ready(function () {
    $(".add-more").click(function () {
      var html = $(".copy").html();
      $(".after-add-more").after(html);
    });

    $("body").on("click", ".remove", function () {
      $(this).parents(".control-group").remove();
    });
  });

  $(document).ready(function () {
    $("#languages").multiselect({
      nonSelectedText: "Select Language",
    });
  });
  // datepicker
  $(function () {
    $('input[name="daterange"]').daterangepicker({
      startDate: "01/01/2022",
      endDate: "17/01/2022",
      opens: "center",
      locale: {
        format: "DD/MM/YYYY",
      },
    });
  });
  // show hide checkbox
  $(".catcheck").change(function () {
    $("#catlist").slideToggle();
  });
  // show hide
  $(".checkcard").click(function () {
    $("#cardlist").show();
  });
  // show hide
  $(".checkcard1").click(function () {
    $("#cardlist1").show();
  });

  // show hide
  $(".expiredcard").click(function () {
    $("#expiredcardlist").show();
  });

  //   adons

  var multipleCancelButton = new Choices("#choices-multiple-remove-button", {
    removeItemButton: true,
    maxItemCount: 5,
    searchResultLimit: 5,
    renderChoiceLimit: 5,
  });
})(jQuery);
