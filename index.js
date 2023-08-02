const express=require("express");
const app=express();
require("./db");
const cors = require("cors");
const users=require("./models/UserSchema");
const blogs=require("./models/BlogPostSchema");
const personalInfo=require("./models/PersonalSchema");
app.use(express.json());
app.use(cors());
app.post("/register",async(req,res)=>{
    let newuser=new users(req.body);
    let  user=await newuser.save();
    res.send(user)
});

app.post("/login",async(req,res)=>{

       let User=await users.findOne(req.body);
        if (User) {
          res.send(User);
        } else {
          res.send({ result: "No user found!" });
        }
})

app.post("/postblog",async(req,res)=>{
      let newblog=new blogs(req.body);
      let   blog=await newblog.save();
      res.send(blog);
})

app.get("/getblog/:Category",async(req,res)=>{

   const { Category } = req.params;
   try {
     const result = await blogs.find({ Category });
     if (result.length > 0) {
       res.send(result);
     } else {
       res
         .status(404)
         .json({
           message: "No category  found for the provided CategoryName.",
         });
     }
   } catch (error) {
     res
       .status(500)
       .json({ message: "Error fetching Category from the database." });
   }
})

app.post("/personalData",async(req,res)=>{
  let Userinfo= new personalInfo(req.body);
  let UserData= await Userinfo.save();
  res.send(UserData);
})
app.get("/personalinfo/:user_email",async(req,res)=>{

  const { user_email } = req.params;
  try {
    const personal_info = await personalInfo.find({ user_email });
    if (personal_info.length > 0) {
      res.send(personal_info);
    } else {
      res
        .status(404)
        .json({ message: "Info not found for the provided useremail." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data from the database." });
  }

})
app.get("/getblogs/:user_mail", async (req, res) => {
   const {user_mail} = req.params;
   try {
     const allblogs = await blogs.find({user_mail});
     if (allblogs.length > 0) {
       res.send(allblogs);
     } else {
       res
         .status(404)
         .json({ message: "Post not found for the provided userID." });
     }
   } catch (error) {
     res
       .status(500)
       .json({ message: "Error fetching posts from the database." });
   }
});

app.put("/updateinfo/:user_email", async (req, res) => {
  let result = await personalInfo.updateOne(
    { user_email: req.params.user_email },
    { $set: req.body }
  );
  res.send(result);
});
const getdata=async()=>{
    let data=  await blogs.find();
    console.log(data);
}
getdata();
const PORT=5050;
app.listen(PORT, () => {
  console.log(`server is start port number ${PORT}`);
});