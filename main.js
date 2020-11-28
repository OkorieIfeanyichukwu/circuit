function screen_resize(){
	var h=parseInt(window.innerHeight);
	var w=parseInt(window.innerWidth);
	var unorder=document.getElementsByTagName('ul')[0];
			var list1=document.getElementsByTagName('li')[0];
			var list2=document.getElementsByTagName('li')[1];
			var list3=document.getElementsByTagName('li')[2];
	
	if(w<500){
		$button=document.getElementById('toggle');
		$button.addEventListener('click',checker,false);

		
		function checker(){
			
			if(unorder.style.display=== 'none'){
				unorder.style.display='inline';
				list1.style.display='block';
				list2.style.display='block';
				list3.style.display='block';
			}
			
			else{
				unorder.style.display='none';
				list1.style.display='block';
				list2.style.display='block';
				list3.style.display='block';
			}
		}
	}

	else if(w>=500 ){
		window.location.href=window.location.href;

	}


}

window.addEventListener("resize",screen_resize);


