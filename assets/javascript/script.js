// api.openweathermap.org/data/2.5/forecast?q=charlotte,us&mode=xml&appid=3b5715c4cc3d80c499e1192a073d5982


function buildQueryUrl(){
    let queryUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + userInput + ',us&mode=xml&appid=3b5715c4cc3d80c499e1192a073d5982'

}
// submit event for search area
$('#search').submit(function(e){
    e.preventDefault();
    console.log($("#userInput").val());
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(updatePage);
    $("#userInput").val('');
})