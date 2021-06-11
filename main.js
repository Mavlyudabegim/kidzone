function hide_function(idname){
	var v=document.getElementById(idname);
	
	if(v.style.display === 'none'){
		v.style.display='block';
		v.style.marginTop = '20px';
		v.style.animation = 'hidden-text-effect 1s';
	


	} else {
		v.style.display = 'none';
	}
	}



