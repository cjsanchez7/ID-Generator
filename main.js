function Show() {
    var a=document.getElementById('nme').value;
    var b=document.getElementById('dob').value;
    var c=document.getElementById('scn').value;
    var d=document.getElementById('dep').value;
    var e=document.getElementById('url').value;
    var g=document.getElementById('con').value;
    var h=document.getElementById('ea').value;

    document.getElementById('aa').innerHTML=a;
    document.getElementById('bb').innerHTML=b;
    document.getElementById('cc').innerHTML=c;
    document.getElementById('dd').innerHTML=d;
    document.getElementById('image').src=e;
    document.getElementById('ff').innerHTML=g;
    document.getElementById('gg').innerHTML=h;
   
    document.getElementById('frm').style.display="none";
    document.getElementById('opt').style.display="block";
    document.getElementById('but').style.display="block";

    const min = 11111111;
    const max = 99999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 777)) + min;
    document.getElementById("ee").innerHTML = randomNumber;
}



function Fill() {
    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener("click", function() {
      location.reload();
    });
}


function Download() {
  $(document).ready(function() {
    $("#download").unbind().click(function() {
      domtoimage.toBlob(document.getElementById('card')).then(function(blob) {
        window.saveAs(blob, "card.png");
      });
    });
  });
}