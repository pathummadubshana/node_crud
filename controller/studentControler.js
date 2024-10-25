// get all student

const db = require("../config/db");

const  getStudent = async(req,res) =>{
    try{
        const data = await db.query('SELECT * FROM students')
        if(!data){
            return res.status(404).send({
                success:false,
                message:'No records'
            });
        }
        res.status(200).send({
            success:true,
            message:"All Students Records",
            data:data[0]
        });

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Get all Student API",
            error
        });
    }
};

const createStudents = async(req, res) => {
    try{
        const {name,address,email,mobile,marks}=req.body
        if(!name || !address || !email || !mobile || !marks){
            return res.status(500).send({
                success:false,
                message:'Please enter all value'
            })
        }
        const data = await db.query('INSERT INTO students (name,address,email,mobile,marks) VALUES (?,?,?,?,?)',
            [name,address,email,mobile,marks]);
        if(!data){
            return res.status(404).send({
                success:false,
                message:'Error In insert data'
            })
        }
        res.status(201).send({
            success:true,
            message:"New Student Records created",
        })



    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in create students",
            error
        })
    }
};


//update
const updateStudent =async (res, req) =>{
    try{
        const studentID = req.params.id
        if(!studentID){
            return res.status(404).send({
                success:false,
                message:"Invalide id"
            })
        }
        const {name,address,email,mobile,marks} = req.body
        const data = await db.query('UPDATE students SET name =?, address=?, email=?, mobile=? , marks=? WHERE id =?',
            [name,address,email,mobile,marks,studentID]);
        if(!data){
            return res.status(500).send({
                success:false,
                message:"Error In update data"
            });
        }
        res.status(200).send({
            success:true,
            message:"Student Details Updated"
        });

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error In uapdate",
            error
        })

    }
};

//delete

const deleteStudent =async(res,req)=>{
    try{
          const studentID = req.params.id
        if(!studentID){
            return res.status(404).send({
                success:false,
                message:"Invalide id"
            })
        }
        await db.query('DELETE FROM students WHERE id = ?',[studentID]);
        res.status(200).send({
            success:true,
            message:"Student delet successfully",

        });

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in delete students",
            error
        })


    }
};

module.exports ={getStudent,createStudents,updateStudent,deleteStudent};