function openMenu(){
    var menu = document.getElementById('menu-icon');
    var close = document.getElementById('close-icon');
    var header = document.getElementById('id-sections')
    if (close.style.display == 'none'){
        menu.style.display = 'none';
        close.style.display = 'inline-block';
        header.classList.add('ativo');
    } else{
        menu.style.display = 'inline-block';
        close.style.display = 'none';
        header.classList.remove('ativo');
    }
}

function closeMenu(){
    var menu = document.getElementById('menu-icon');
    var close = document.getElementById('close-icon');
    var header = document.getElementById('id-sections')
    if (header.classList.contains('ativo')){
        menu.style.display = 'inline-block';
        close.style.display = 'none';
        header.classList.remove('ativo');
    } else{
        
    }
}