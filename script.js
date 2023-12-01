 
function toogleMenu(id){
    let menu = document.getElementById(id);
    let menuStyle = window.getComputedStyle(menu);
    if(menuStyle.display === 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display ='none';
    }

    
    
}

function closeMenu(id) {
    let close = document.getElementById(id);
    let closeStyle = window.getComputedStyle(close);
    
    console.log(closeStyle.display);

    if(closeStyle.display === 'block'){
        close.style.display = 'none';
    }else{
        close.style.display='block';
    }
    
    
}
    
