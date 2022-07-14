$(document).ready(function () {
  getTemplates();
});
function getTemplates(){
  $.ajax({
    url:"/get_templates",
    type:"get",
    success:function(result){
      fillblanks(result.word)
    },
    error:function (result){
        alert(result.responseJSON.message)
    }
  })
}
function fillblanks(randomword) {
  // var randomword = words[Math.floor(Math.random() * words.length)];
  // console.log(randomword);
  $("#blanks").empty();
  for (var i = 0; i < randomword.inputs; i += 1) {
    let blank = `<span class="fill_in_the_blanks" id="input_${i}">_</span>`;
    $("#blanks").append(blank);
  }
  $("#hint").html(randomword.category);
  var gameover = false;
  $(".clickable").click(function () {
    var correctGuess = false;

    let id = $(this).attr("id");

    let life = parseInt($("#life").text());

    for (var i = 0; i < randomword.word.length; i += 1) {
      if (randomword.word.charAt(i).toLowerCase() === id) {
        if (
          life > 0 &&
          ($(".fill_in_the_blanks").eq(i).html() === "_" ||
            $(".fill_in_the_blanks").eq(i).html() === id)
        ) {
          $(".fill_in_the_blanks").eq(i).html(id);
          correctGuess = true;

          if ($("#blanks").text() === randomword.word.toLowerCase()) {
            $("#result").text("You WIN");
            correctGuess = true;
            gameover = true;
          }
        }
      }
    }
  });
}
