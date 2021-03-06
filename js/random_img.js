<div id="custom_image_output"></div>
<script>
(function(){
var imageField = "ImageURL";
var url = "http://contoso.com/sites/MyCoolSite/_vti_bin/ListData.svc/MyImages?$select=" + imageField
var xhr = new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.setRequestHeader("Accept","application/json; odata=verbose");
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            var results = JSON.parse(xhr.responseText.replace(/\\'/g,"'")).d;
            drawImages(results);
        }else{
            alert(xhr.status + ":\n " + xhr.responseText);
        }
    }
}
xhr.send();
function drawImages(data){
    var output = document.getElementById("custom_image_output");
    for(var i = 0, len = data.length; i < len; i++){
        var img = document.createElement("img");
        img.src = data[i][imageField];
        output.appendChild(img);
    }
}
})();
</script>
