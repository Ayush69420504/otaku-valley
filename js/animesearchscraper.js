document.getElementById("input").setAttribute("placeholder", "Enter the name of the anime to search it");
document.getElementById("results").innerHTML = "Your search results will appear here";
function perform1(name)
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function()
    {
        console.log("Success in connecting with https://streamani.net The requested functions are being performed [SEARCH]");
        const doc = xhttp.responseXML;
        document.getElementById("results").innerHTML = "";
        if (doc.getElementsByClassName("video-block").length == 0)
        {
            document.getElementById("results").innerHTML = "No search results <br> Try using more known names and correct spelling";
        }
        else
        {
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
                document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + "<a target = 'blank' onclick = 'datpass(this.innerText)' style = 'text-decoration: underline; cursor: hand;'>" + s + "</a>" + "<br>";
            }
        }
    }
    xhttp.open("GET", "https://streamani.net/search.html?keyword="+name);
    xhttp.responseType = "document";
    xhttp.send();
}
function perform2(name)
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function()
    {
        const doc = xhttp.responseXML;
        console.log("Success in connecting with https://streamani.net The requested functions are being performed [STARTING VIDEO PLAYER WITH REQUESTED VIDEO]");
        var s = doc.getElementsByClassName("video-block").item(0).getElementsByTagName("a").item(0).getAttribute("href");
        for (i = s.length - 1; i >= 0; i--)
        {
            if (s.charAt(i) == '-')
            {
                break;
            }
        }
        s = s.substring(i + 1, s.length);
        var s = '{"name":"'+name+'","curep":"1","maxep":"'+s+'"}';
        window.open("animeplayer.html#"+encodeURI(s), "_blank");
    }
    xhttp.open("GET", "https://streamani.net/search.html?keyword="+name)
    xhttp.responseType = "document";
    xhttp.send();
}