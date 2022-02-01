function convert(){
    var lower=data.value;
    var upper=lower.toUpperCase();
    console.log(upper);
    data.value=upper;
    document.getElementById('upper').innerText=upper;
    setTimeout(() => {
        alert(upper);
        document.write(upper);
    }, 1000);
}