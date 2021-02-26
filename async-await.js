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

]


const getEmpleadoById = async (id) =>{
    
    try {
        const empleado = empleados.find((e)=> e.id===id);
        
        if(empleado){
            return(empleado);        
        }
        throw new Error(`El empleado con Id ${id} no existe`);
    } catch (error) {
        
        throw error;
    }
    
}

const getSueldoById = async (id) =>{

    try {
        const sueldo = sueldos.find((e)=> e.id===id);
        
        if(sueldo){
            return(sueldo);
            
        }
        throw new Error (`El empleado con Id ${id} no tiene un sueldo`);
    } catch (error) {
        throw error;
    }   
}

const id = 1;

const getDatosCompletosEmpleado = async (id) =>{
    try {
        const e = await getEmpleadoById(id);
        const s = await getSueldoById(id);
       // return  `El empleado con Id ${id} es ${e.nombre} y tiene un sueldo de ${s.sueldo}`;
        return {
            id,
            nombre: e.nombre,
            sueldo: s.sueldo
        }
    } catch (err) {
        throw err;
    }
}

getDatosCompletosEmpleado(id)
.then((data)=>{console.log(`El empleado con Id ${data.id} es ${data.nombre} y tiene un sueldo de ${data.sueldo}`);})
.catch((err)=>{console.log(err.message);});