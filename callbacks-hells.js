const empleados = [

    {
        id : 1,
        nombre: 'Fernando'
    },
    {
        id : 2,
        nombre: 'Marta'
    },
    {
        id : 3,
        nombre: 'Manuel'
    }
]

const sueldos = [

    {
        id: 1,
        sueldo: 1500
    },

    {
        id: 2,
        sueldo: 2000
    },

    {
        id: 3,
        
    },
]

const getEmpleadoById = (id,callback) =>{

    const empleado = empleados.find((e)=> e.id===id);

    if(empleado){
        callback(null,empleado);
        return;
    }
    callback(new Error('El empleado no existe'));
}

const getSueldoById = (id,callback) =>{

    const sueldo = sueldos.find((s)=> s.id===id);
    
    if(sueldo.sueldo){
        callback(null,sueldo);
        return;
    }
    callback(new Error());
}

const id = 1;

getEmpleadoById(id,(error,e)=>{

    if(error){
        console.log('ERROR!!!...');
        console.log(error);
        return;
    }

    getSueldoById(id,(error,s)=>{
        console.log(`Empleado/a: ${e.nombre} `);
        if(error){
            console.log('No dispone de un sueldo');
            return;
        }
        console.log(`Sueldo: ${s.sueldo}`);
    })
});