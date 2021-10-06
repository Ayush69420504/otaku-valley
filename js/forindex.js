document.getElementById("save").innerHTML = "S <br> A <br> V <br> E";
document.getElementById("notes").setAttribute("placeholder", "Hello, this is notes\nSave important stuff here\nLike, The next anime to watch\nWhere you had left off\netc..");
document.getElementById("notes").value = localStorage.getItem("notes");
function save()
{
    localStorage.setItem("notes", document.getElementById("notes").value);
}
//Code for Modal to display Contact details. Courtesy of https://www.w3schools.com/
var modal = document.getElementById("myModal");
var btn = document.getElementById("conus");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function()
{
    modal.style.display = "block";
}
span.onclick = function()
{
    modal.style.display = "none";
}
window.onclick = function(event)
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}
//Code ends
const xhttp1 = new XMLHttpRequest();
xhttp1.onload = function()
{
    const doc = xhttp1.responseXML;
    document.getElementById("news2").innerHTML = "<h2>Recently added anime</h2>";
    for (i = 0; i < doc.getElementsByClassName("video-block").length; i++)
    {
        var s = doc.getElementsByClassName("video-block").item(i).getElementsByTagName("a").item(0).getAttribute("href");
        x = 0;
        for (j = s.length - 1; j >= 0; j--)
        {
            if (x == 2)
            {
                break;
            }
            else if (s.charAt(j) == '-')
            {
                x++
            }
        }
        s = s.substring(0, j + 1);
        s = s.substring(8, s.length);
        document.getElementById("news2").innerHTML = document.getElementById("news2").innerHTML + "<a style = 'text-decoration: underline;'>" + s + "</a>" + "<br>";
    }
}
xhttp1.open("GET", "https://streamani.net/recently-added-raw");
xhttp1.responseType = "document";
xhttp1.send();
for (i = 1; i <= 3; i++)
{
    const xhttp2 = new XMLHttpRequest;
    xhttp2.onload = function()
    {
        const doc = xhttp2.responseXML;
        document.getElementById("news1").innerHTML = "<h2>Recently added manga</h2>";
        for (i = 0; i < doc.getElementsByClassName("manga-list-4-list line").item(0).getElementsByTagName("li").length; i++)
        {
            document.getElementById("news1").innerHTML = document.getElementById("news1").innerHTML + "<a style = 'text-decoration: underline;'>" + doc.getElementsByClassName("manga-list-4-list line").item(0).getElementsByTagName("li").item(i).getElementsByTagName("a").item(0).getAttribute("title") + "</a>";
        }
    }
    xhttp2.open("GET", "https://fanfox.net/releases/"+i+".html");
    xhttp2.responseType = "document";
    xhttp2.send();
}
document.getElementById("searchanime").onclick = function()
{
    window.open("searchanime.html", "_blank");
}
document.getElementById("searchmanga").onclick = function()
{
    window.open("searchmanga.html", "_blank");
}