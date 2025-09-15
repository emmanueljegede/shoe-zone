         
const dropdown= document.querySelector('.dropdown');

    


function show(){
    dropdown.style.display='inline-block';

    setTimeout(() =>{document.addEventListener('click', hiddenOnClickOutside);})
     }

    function hiddenOnClickOutside(e){
   
    {if(! dropdown.contains(e.target))
        {dropdown.style.display='none'
            document.removeEventListener('click',hiddenOnClickOutside)
        }}
}


let cartq = 0
let amount = 0
    function additem(){cartq = cartq + 1
                      document.querySelector('#no').innerHTML=`${cartq}`}


     
     function price(total){ amount = amount + total
                              document.querySelector('#am').innerHTML=`${amount}`
     }




   function res(){ cartq = 0
                       document.querySelector('#no').innerHTML=`${cartq}`

                       amount = 0
                        document.querySelector('#am').innerHTML=`${amount}`

   }















    function nik(){document.getElementById('nike').style.display='flex'

    document.getElementById('nset2').style.display='flex'

    document.getElementById('vans').style.display='none'
    document.getElementById('loafers').style.display='none'
    document.getElementById('balanciaga').style.display='none'}
   


       function van(){document.getElementById('vans').style.display='flex';

    document.getElementById('nike').style.display='none';
    document.getElementById('loafers').style.display='none';
    document.getElementById('balanciaga').style.display='none';
 document.getElementById('nset2').style.display='none'
     }

    

       function bal(){document.getElementById('balanciaga').style.display='flex'

    document.getElementById('vans').style.display='none'
    document.getElementById('loafers').style.display='none'
    document.getElementById('nike').style.display='none'
     document.getElementById('nset2').style.display='none'
    }



       function loa(){document.querySelector('#loafers').style.display='flex'

    document.querySelector('#vans').style.display='none'
    document.querySelector('#nike').style.display='none'
    document.querySelector('#balanciaga').style.display='none'
     document.getElementById('nset2').style.display='none'
    }


    function jump(){
      
      event.preventDefault();

      const id =document.getElementById('search').value.trim();
      const target =document.getElementById(id)

      if (target){if(getComputedStyle(target).display==='none'){target.style.display='flex'}
         
         target.scrollIntoView({behavior:"smooth"})}
      else{alert('section not found')}
    }

function purchase(){alert(`purchasing ${cartq} item, at ${amount}`)}