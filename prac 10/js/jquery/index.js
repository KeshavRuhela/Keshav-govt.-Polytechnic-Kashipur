// ...............Through jQuery............................
        function tryy() {
            if($('#check').is(':checked')){
                $('#btn').prop('disabled', false);
            }
            else{
                $('#btn').prop('disabled', true);
            }
        }

// ...............Through Java Script.......................        
// var check=document.getElementById('check');
// var btn=document.getElementById('btn');
//     function tryy() {
//         if(check.checked){
//             btn.removeAttribute('disabled');
//         }
//         else{
//             btn.setAttribute('disabled','true')
//         } 
//     }