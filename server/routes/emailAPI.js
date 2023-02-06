import nodemailer from 'nodemailer';

var sendEmail = (email, password)=>{

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tiwarirajesh2912@gmail.com',
    pass: 'daatdddknmplbyhy'
  }
});

var mailOptions = {
  from: 'tiwarirajesh2912@gmail.com',
  to: email ,
  subject: 'Verification of Your Account, Tenders',
  html: "<h1>Welcome to Tenders</h1><div>You have Successfully Registered on Tenders App.</div><div>Your Login Credentials are as Follows: </div><b>Email: "+email+"</b><br/><b>Password: "+password+"</b><h2>Click on the Link Below to Verify Your Account</h2>http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

export default sendEmail;