function change() {
    var i=1;
    setInterval(() => {
        document.getElementById('change').src="./image/"+i+".jfif"
        i++;
        if(i==5){
            i=1;
        }
    }, 1500);
}