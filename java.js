var order = prompt("what movies you want to join (crank1) or (crank2) ??");


while(order !== "crank1" && order !== "crank2")
{
    order = prompt("what movies you want to join (crank1) or (crank2) please choose?");
}

var moviesorder = '';

if(order == "crank1")
{
    moviesorder = '<img src="100dollars.jpg"/>';
}
else if(order == "crank2")
{
    moviesorder = '<img src="500dollars.jpg"/>';
}

var numofepisode = prompt("what is the number of episode?");



document.write(result);
