<script>
  var i=0 ;
  var images=[];
  var time=3000 ;
  images[0]='slide1.jpg';
  images[1]='slide2.jpg';
  images[2]='slide3.jpg';

  function changeImg(){
    document.slide.src=images[i];
    if(i< images.length-1){
      i++;
    }else{
      i=0;
    }
    setTimeout("changeImg()",time); 
  }
  window.onload=changeImg;
  </script>
<img name="slide" width="400" height="200">