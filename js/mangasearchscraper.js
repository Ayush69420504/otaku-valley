document.getElementById("input").setAttribute("placeholder", "Enter the name of the manga to search it");
document.getElementById("results").innerHTML = "Your search results will appear here";
function perform1()
{
    const xhttp = new XMLHttpRequest;
    xhttp.onload = function()
    {
        const doc = xhttp.responseXML;
        document.getElementById("results").innerHTML = "";
        if (doc.getElementsByClassName("item-title").length == 0)
        {
            document.getElementById("results").innerHTML = "No search results <br> Try using more known names and correct spelling";
        }
        else
        {
            for (i = 0; i < doc.getElementsByClassName("item-title").length; i++)
            {
                var name = doc.getElementsByClassName("item-title").item(i).getAttribute("href");
                name = name.substring(8, name.length);
                document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + '<a onclick = "viewmanga(this.innerText)" style = "text-decoration: underline; cursor: hand; color: white">'+name+'</a><br>';
            }
        }
    }
    xhttp.open("GET", "https://bato.to/search?word="+document.getElementById("input").value);
    xhttp.responseType = "document";
    xhttp.send();
}
function perform2(link)
{
    const xhttp = new XMLHttpRequest;
    xhttp.onload = function()
    {
        const doc = xhttp.responseXML;
        document.getElementById("results").innerHTML = "";
        for (i = doc.getElementsByClassName("visited chapt").length - 1; i >= 0; i--)
        {
            document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + '<a href = "https://bato.to'+doc.getElementsByClassName("visited chapt").item(i).getAttribute("href")+'" target = "_blank" style = "text-decoration: underline; cursor: hand; color: white">'+doc.getElementsByClassName("visited chapt").item(i).innerHTML+'</a><br>';
        }
    }
    xhttp.open("GET", "https://bato.to/series/"+link);
    xhttp.responseType = "document";
    xhttp.send();
}