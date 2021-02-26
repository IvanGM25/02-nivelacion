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


const getEmpleadoById = (id) =>{

    return new Promise((resolve,reject) => {

        const empleado = empleados.find((e)=> e.id===id);
    
        if(empleado){
            resolve(empleado);
            return;
        }
        reject(`El empleado con Id: ${id} no existe`);
    });
}
const getSueldoById = (id) =>{

    return new Promise((resolve,reject) => {

        const sueldo = sueldos.find((e)=> e.id===id);
        
        if(sueldo){
            resolve(sueldo);
            return;
        }
        reject(`El empleado con Id: ${id} no dispone de un sueldo`);
    });
}

const id = 3;
let nombre;
getEmpleadoById(id).then((e)=>{
    nombre = e.nombre;
    return getSueldoById(id);
}).then((s)=>{ 
    console.log(`El empleado con Id ${id} es ${nombre} y tiene un sueldo de ${s.sueldo}`);
}).catch((err)=>{console.log(err);});

