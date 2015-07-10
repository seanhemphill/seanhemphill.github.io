$(document).on("ready", function(){
    var source   = $("#entry-template").html();
    var activitytemplate = Handlebars.compile(source);
    
    
var options = {
    step:15,
    disableTextInput: true
};

$('input[name=start').timepicker(options);
$('input[name=end').timepicker(options);

$("form").on("submit", function(event){
    event.preventDefault();
    
    var newActivity = {
        start:$('input[name=start]').val(),
        end:$('input[name=end').val() ,
        activity:$('input[name=activity]').val()
    }
    $('#activityTemplate(newActivity)
    console.log(newActivity);
    
    
    
});

});