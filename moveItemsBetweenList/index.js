//appendChild wokrs with either node or element(id)


document.getElementById('btnRight').addEventListener('click', function(){
  lstBox2.appendChild((document.getElementById('lstBox1').selectedOptions)[0]);
  // no need of this line if not using cloneNode
  // lstBox1.removeChild((document.getElementById('lstBox1').selectedOptions)[0]);
});

document.getElementById('btnLeft').addEventListener('click', function(){
  lstBox1.appendChild((document.getElementById('lstBox2').selectedOptions)[0].cloneNode(true));
  lstBox2.removeChild((document.getElementById('lstBox2').selectedOptions)[0]);
});

document.getElementById('btnAllRight').addEventListener('click', function(){
  let selectAll = [...document.getElementById('lstBox1').selectedOptions];
  selectAll.forEach((element) => {
    lstBox2.appendChild(element.cloneNode(true));
    lstBox1.removeChild(element);
  })
});

document.getElementById('btnAllLeft').addEventListener('click', function(){
  let selectAll = [...document.getElementById('lstBox2').selectedOptions];
  selectAll.forEach((element) => {
    lstBox1.appendChild(element.cloneNode(true));
    lstBox.removeChild(element);
  })
});
