sort = 'undefined';
function gonext(size){
    if(sort=="undefined"){
        alert("Something went wrong! Sort is not defined.");
    } else {
        var url="/diy?size="+size+"?sort="+sort;
        window.location.href=url;
    }
}