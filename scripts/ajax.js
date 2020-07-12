$(document).ready(function () {
  //   ** .load() >> load a page from another file
  //   $(".result").load("test.html", (responseTxt, statusTxt, xhr) => {
  //       if (statusTxt === "success") {
  //           alert("it worked!");
  //      } else if (statusTxt === "error") {
  //        alert(`Error: ${xhr.statusText}`);
  //      }
  //   });
  // ** $.get()
  //   $.get("test.html", (data) => {
  //     $(".result").html(data);
  //   });
  //   $.getJSON("users.json", (data) => {
  //     $.each(data, (i, user) => {
  //       $("ul.users").append(`<li>${user.firstName}</li>`);
  //     });
  //   });
  // ** $.ajax()

  $("#press-me").on("click", () => {
    $.ajax({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      dataType: "json",
    }).done((data) => {
      $.map(data, (post, i) => {
        $("ul.results").append(`
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `);
      });
    });
  });

  $(".post-form").on("submit", function (e) {
    e.preventDefault();
    let title = $("#title").val();
    let body = $("#text-body").val();
    let url = $(this).attr("action");

    $.post(url, { title: title, body: body }).done((data) => {
      console.log("Post Saved");
      console.log(data);
    });
  });
});
