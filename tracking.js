function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
        }
    }
    //  return '';
}
alert(window.location.href);
alert(window.location.hostname);
alert(document.title);
alert(getMeta('description'));



//        var xhttp = new XMLHttpRequest();
//        xhttp.onreadystatechange = function() {
//            if (this.readyState == 4 && this.status == 200) {
//                document.getElementById("demo").innerHTML = this.responseText;
//            }
//        };
//        xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
//        xhttp.send();