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
document.getElementById("search").onclick = function()
{
    window.open("searchanime.html", "_blank");
}