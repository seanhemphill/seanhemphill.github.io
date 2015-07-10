$(document).on("ready", function(){
  var blogSource   = $("#blog-template").html();
  var blogTemplate = Handlebars.compile(blogSource);
  
  $.get("posts.json", function(data){
      var i = 0;
      while(i <= data.length){
          $('#posts').prepend(blogTemplate(data[i]));
      
          i= i+1;
          data[i];
      }
      
  });
  $("form").on("submit", function(event){
      event.preventDefault();
      
      var newPost = {
          title: $('input[name=title]').val(),
          body: $('textarea').val()
      }
      $('#posts').prepend(blogTemplate(newPost));
      $.post("posts", newPost);
      
  });
  
});