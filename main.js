contacto = [
    {
        nombre: "Ronald",
        apellido: "Nav",
        numero: "313265498",
        gustos: ['pizza', 'programación', 'enseñar']
      
    },
    {
        nombre: 'Harry',
        apellido: 'Potter',
        numero: '0994372684',
        gustos: ['Hogwarts', 'magia']
    },

    {
        nombre: 'Sherlock',
        apellido: 'Holmes',
        numero: '0487345643',
        gustos: ['clases interesantes', 'violin']
    },
    {
        nombre: 'Goku',
        apellido: '',
        numero: '123412523',
        gustos: ['Artes Marciales', 'Milk', 'Luchar']
    },
    {
        nombre: 'Barry',
        apellido: 'Allen',
        numero: '2356346346',
        gustos: ['Correr superrapido', '	Iris West', 'Misterios']
    },
    {
        nombre: 'Tony',
        apellido: 'Star',
        numero: '24634745',
        gustos: ['Mujeres', 'Tecnología', 'Dinero']
    },
    {
        nombre: 'Peter',
        apellido: 'Parker',
        numero: '24634745',
        gustos: ['Ayudar a tia May', 'Ser un buen vecino']
    },


]





document.getElementById('search').addEventListener('click', ()=>{

    const name = document.getElementById('name').value;
    const property  = document.getElementById('property');

    const info = document.querySelector('.container_bottom');

    let options = property.options[property.selectedIndex]

    for(i=0;i<contacto.length;i++){



        if(name == '' || options.value == ''){

          return  info.textContent = 'No Encontrado'
    
        }else if(name == contacto[i].nombre && options.value == 'todos' ){

            return info.innerHTML = "Nombre: "+contacto[i].nombre+"<br> Apellido: "+contacto[i].apellido+"<br> Numero: "+contacto[i].numero+"<br> Gustos: "+contacto[i].gustos  


        }else if (name == contacto[i].nombre && options.value == 'ape'){

            return info.innerHTML = "Nombre: "+contacto[i].nombre+"<br> Apellido: "+contacto[i].apellido 

        }   else if (name == contacto[i].nombre && options.value == 'num'){

            return info.innerHTML = "Nombre: "+contacto[i].nombre+"<br> Numero: "+contacto[i].numero

        }else if (name == contacto[i].nombre && options.value == 'gustos'){

            return info.innerHTML = "Nombre: "+contacto[i].nombre+"<br> Gustos: "+contacto[i].gustos

        }


    }
    
   
})

