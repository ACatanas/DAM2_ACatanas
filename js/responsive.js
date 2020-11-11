
window.addEventListener("load",inici,false);


function inici(){
    
    menu_desplegat = 0;
    
    document.getElementById("boto").addEventListener("click", menu,false);
    
    
    menu_m = document.getElementById("mobil_menu");
    
}
                                                     
function menu(){
    
    if(menu_desplegat == 0){
        
        //Desplegar menu
        
        $('#mobil_menu').animate({
            
            left: '0'
            
        });
        
        
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
//        document.getElementsByTagName("html")[0].style.position= "fixed";
        
        
        menu_desplegat = 1;
        
    }else{
        
        //Plegar menu
        
        $('#mobil_menu').animate({
            
            left: '-100%'
            
        });
        
        
        document.getElementsByTagName("html")[0].style.overflow = "auto";
//        document.getElementsByTagName("html")[0].style.position= "relative";
        
         menu_desplegat = 0;
    }
    
}






