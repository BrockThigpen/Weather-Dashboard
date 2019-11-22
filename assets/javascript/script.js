// getting current date
let today = new Date();
let date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
// submit event for search area
$('#search').submit(function(e){
    e.preventDefault();    
    let userInput = $('#userInput').val().trim();
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput},us&units=imperial&APPID=3b5715c4cc3d80c499e1192a073d5982`;    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        let iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        let icon = $('<img>').attr('src', iconUrl);
        let card = $('<div>').addClass('card mt-3');
        let body = $("<div>").addClass('card-body');
        let head = $("<h5>").addClass('card-title').text(response.name + ' (' + date + ')').append(icon);
        let temp = $("<p>").addClass('card-text').text('Temperature: ' + Math.round(response.main.temp) + '°F');
        let humid = $("<p>").addClass('card-text').text('Humidity: ' + response.main.humidity + '%');
        let wind = $("<p>").addClass('card-text').text('Wind Speed: ' + response.wind.speed + 'mph');
        body.append(head, temp, humid, wind);
        card.append(body);
        $('#displayContainer').prepend(card);
    });
    $("#userInput").val('');
})