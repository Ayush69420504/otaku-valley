var isproper = false;
for (i = window.location.href.length - 1; i >= 0; i--)
{
    if (window.location.href.charAt(i) == '#')
    {
        isproper = true;
    }
}
if (isproper == false)
{
    alert("Accessed video player with no play data, redirecting to Search");
    window.location.replace("searchanime.html");
}
else
{
    var s = window.location.href;
    for (i = s.length - 1; i >= 0; i--)
    {
        if (s.charAt(i) == '#')
        {
            break;
        }
    }
    s = decodeURI(s.substring(i + 1, s.length));
    const data = JSON.parse(s);
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function()
    {
        const doc = xhttp.responseXML;
        var s = doc.getElementsByClassName("video-info").item(0).getElementsByTagName("iframe").item(0).getAttribute("src");
        document.getElementById("vid").setAttribute("src", "https:"+s);
        document.getElementById("tit").innerHTML = data.name.charAt(0).toUpperCase() + data.name.substring(1, data.name.length) + "-episode-" + data.curep;
    }
    xhttp.open("GET", "https://streamani.net/videos/"+data.name+"-episode-"+data.curep);
    xhttp.responseType = "document";
    xhttp.send();
}
var s = window.location.href;
for (i = s.length - 1; i >= 0; i--)
{
    if (s.charAt(i) == '#')
    {
        break;
    }
}
s = decodeURI(s.substring(i + 1, s.length));
const data = JSON.parse(s);
document.getElementById("episodes").innerHTML = '<h1>Episodes</h1>';
for (i = 1; i <= parseInt(data.maxep); i++)
{
    if (i % 10 != 0)
    {
        x = "<button onclick = 'change(this.innerText)'>" + i.toString() + "</button>";
    }
    else
    {
        x = "<button onclick = 'change(this.innerText)'>" + i.toString() + "</button><br>";
    }
    document.getElementById("episodes").innerHTML = document.getElementById("episodes").innerHTML + x;
}
document.getElementById("save").innerHTML = "S <br> A <br> V <br> E";
document.getElementById("notes").setAttribute("placeholder", "Hello, this is notes\nSave important stuff here\nLike, The next anime to watch\nWhere you had left off\netc..");
document.getElementById("notes").value = localStorage.getItem("notes");
function perform1(episode)
{
    var s = window.location.href;
    for (i = s.length - 1; i >= 0; i--)
    {
        if (s.charAt(i) == '#')
        {
            break;
        }
    }
    s = decodeURI(s.substring(i + 1, s.length));
    const data = JSON.parse(s);
    var s = '{"name":"'+data.name+'","curep":"'+episode+'","maxep":"'+data.maxep+'"}';
    window.location.replace("animeplayer.html#"+encodeURI(s));
    window.location.reload();
}
function perform2()
{
    localStorage.setItem("notes", document.getElementById("notes").value);
}