$(document).ready(function () {
  /*************** SELECTORS ***************/
  // selecting element by type, by id, by class names
  //    $("...").hide() - hides elements
  //    $("h1").hide();
  //    $('#header1').hide()
  //    $('.header2').hide()
  // selecting inner elements
  //    $('parent-element target-child/ren-element/s')
  //    $('p span').css('color', 'red')
  //    $('ul#li li:first').css('color', 'pink')
  // selecting even/odd elements
  //    $('ul#li li:even').css('background-color', 'green')
  // selecting inputs
  // **selecting input types
  //    $(':button').hide()
  //    $(':text').hide()
  // selecting elements by attributes
  //    $('[attribute name]')
  //    $("[href]").css("border", "1px solid black");
  // selecting elements by attributes value
  //    $('element[attribute-name='attribute value']')
  //    $("a[href='wwww.stackoverflow']").css("color", "orange");
  /*************** EVENTS ***************/
  // **mouse events
  // click
  //   $(".btn-1").click(function () {
  //     alert("button clicked");
  //   });
  //   $(".btn-1").on("click", function () {
  //     alert("button clicked");
  //   });
  //   $(".btn-1").click(() => {
  //     $("#para1").appendTo("#section1").toggle();
  //   });
  // hover
  //   $(".btn-1").hover(function () {
  //     $("#section1 h2").css("color", "red").toggle();
  //   });
  // mouse-leave/mouse enter
  //   $(".btn-2").on("mouseenter", () => {
  //     $("#para1").toggle();
  //   });
  //   $(".btn-2").on("mouseleave", () => {
  //     $("#para1").toggle();
  //   });
  // mouse move
  //   $(".btn-2").on("mousemove", () => {
  //     $("#section1").css("background-color", "pink");
  //   });
  // mouse up
  //   $(".btn-2").on("mousedown", () => {
  //     $("#para1").css("color", "red");
  //   });
  // mouse down
  //   $(".btn-2").on("mouseup", () => {
  //     $("#para1").css("color", "black");
  //   });
  // ---
  //   $(".btn-1").click((e) => {
  // console.log(e)
  // alert(e.currentTarget.className);
  // alert(e.currentTarget.innerHTML);
  //   });
  //   $(document).on("mousemove", function (e) {
  //     $("#coords").html(`Coords: Y:${e.clientY} x: ${e.clientX}`);
  //   });

  $("input").focus(function () {
    $(this).css("background-color", "pink");
  });

  $("input").blur(function () {
    $(this).css("background-color", "white");
  });

  $("#message").keyup(function (e) {
    $(".message-preview").text(`${e.target.value}`);
  });

  $("select#gender").change(function (e) {
    $(".message-preview").text(`${e.target.value}`);
  });

  $(".form").submit((e) => {
    e.preventDefault();
    let name = $("input.name").val();
    let email = $("input.email").val();
    let gender = $("select#gender").val();
    let message = $("input#message").val();

    $(".info").append(`${name}<br>${email}<br>${gender}<br>${message}`);
  });
  //
  //
  //
  //

  /*************** DOM MANIPULATION ***************/

  //append .p1 to #inner-div + toggle classname bg1 to apply style

  // ** add class
  /*
      $("#btn1").on("click", () => {
        $("p.para2").addClass("bg1");
      });
  */

  // ** remove class
  /*
        $("#btn1").on("click", () => {
          $("p.para2").removeClass("bg1");
        });
  */

  // ** .appendTo() + .toggleClass()
  /*
        $("#btn1").on("click", () => {
          $("p.para2").appendTo("#inner-div").toggleClass("bg1");
        });
  */

  // ** .append() - adds an element as a last child element
  /*
        $("#btn1").on("click", () => {
          $("#inner-div").append('<a href="index.html">HOME</a>');
        });
  */

  // ** .prepend() >> adds an element as the first child element.
  /*
        $("#btn1").on("click", () => {
          $("#inner-div h2").prepend('<a href="index.html">HOME</a>');
        });
  */

  // ** .text() >> adds/replaces text to elements or return an element's text
  /*
        $("#btn1").on("click", () => {
          $("#inner-div").text("hola mundo!");
          alert($("#inner-div").text());
        });
  */

  // ** .before() >> adds elements before the selected element

  // $("#btn1").on("click", () => {
  //   $("#inner-div").before("hola");
  // });
  // ** .after() >> adds elements after the selected element
  // $("#btn1").on("click", () => {
  //   $("#inner-div").after("mundo");
  // });

  // ** .empty() >> removes child elements of selected elements
  /*      
        $("#btn1").on("click", () => {
          $("#inner-div, ul").empty();
        });
  */

  // ** .detach() >> removes selected element from the dom

  // $("#btn1").on("click", () => {
  //   $("#inner-div").detach();
  // });

  // ** .attr() >> adds attribute to target element or returns specified attribute from selected element
  // $("#btn1").on("click", () => {
  //   $("a").attr("target", "_blank");
  //  alert($('a').attr('href'))
  // });

  // ** .removeAttr() >> removes attribute
  // $("#btn1").on("click", () => {
  //   $("a").attr("target", "_blank");
  // });

  //  .wrap() >> wraps each elements separately
  // $("#btn1").on("click", () => {
  //   $("p").wrap("<h3>");
  // });

  // ** .wrapAll() >> wraps target elements in one element
  // $("#btn1").on("click", () => {
  //   $("p").wrapAll("<h3>");
  // });
  // ** .toArray()

  // let listItems = $("ul#random-list li").toArray();

  // $.each(listItems, (i, list) => {
  //   $(list).append("<button>X</button>");
  // });

  // $("#btn1").on("click", () => {
  //   let usersNames = ["david", "amy", "james", "brad"];
  //   $.each(usersNames, (i, name) => {
  //     $("#users").append(`<li>${name}</li>`);
  //   });
  // });

  function addItem(e) {
    let code = e.which;
    e.preventDefault;
    if (code === 13) {
      $("#current-task").append(
        `<li class="item current-item"><input type="checkbox" />
          ${e.target.value}
        </li>`
      );
      $(this).val("");
    }
  }

  $("#new-item").on("keyup", addItem);

  //remove completed task
  $("ul#current-task").on("change", "li.current-item", function (e) {
    $(e.currentTarget)
      .removeClass("current-item")
      .addClass("completed-item")
      .appendTo("#completed-task");
  });

  //redo task
  $("ul#completed-task").on("change", "li.completed-item", function (e) {
    $(e.currentTarget)
      .removeClass("completed-item")
      .addClass("current-item")
      .appendTo("#current-task");
  });

  //
  //
  //
  //

  /*************** DOM MANIPULATION ***************/

  $("#btn-fadeout").on("click", () => {
    $("#box").fadeOut(
      200,
      //callback function **optional
      () => {
        $("#btn-fadeout").text("It's gone!");
      }
    );
  });

  $("#btn-fadein").on("click", () => {
    $("#box").fadeIn(300);
  });

  $("#btn-fadetoggle").on("click", () => {
    $("#box").fadeToggle(300);
  });

  $("#btn-slide-up").on("click", () => {
    $("#box").slideUp(3000);
  });
  $("#btn-slide-down").on("click", () => {
    $("#box").slideDown(300);
  });
  $("#btn-slide-toggle").on("click", () => {
    $("#box").slideToggle(300);
  });

  $("#btn-stop").on("click", () => {
    $("#box").stop();
  });

  $("#btn-move-right").on("click", () => {
    $("#box2").animate({
      left: 500,
      height: "600px",
      width: "500px",
      opacity: ".8",
    });
  });

  $("#btn-move-left").on("click", () => {
    $("#box2").animate({
      left: 0,
      width: "500px",
      height: "90px",
      opacity: "1",
    });
  });

  $("#btn-move-around").on("click", () => {
    let box = $("#box2");

    box.animate({
      left: 300,
    });
    box.animate({
      top: 300,
    });
    box.animate({
      left: 0,
      top: 300,
    });
    box.animate({
      left: 0,
      top: 0,
    });
  });
});
