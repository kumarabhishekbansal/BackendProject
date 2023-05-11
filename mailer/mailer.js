const nodemailer = require("nodemailer");



const registerMail=async(user,subject)=>{
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.auth_email,
            pass: process.env.auth_password
        }
    });

    let html=`<p>Hello, <b>${user.username}</b></p>
    <h2>Thanks for registering,</h2>
    <h3>Welcome to our website FoodBite! Hope you will enjoy with ordering your meal with our website!!</h3>
    <h5>Search Your Restuarants by entering your city</h5>
    <h3>http://localhost:3000/menu</h3>
    <br />
    <h4>Your DashBoard : </h4>
    <span>http://localhost:3000/profile</span>
    
    <br />
    <p><b>Thanks and Regards ,</b></p>
    <h2><b><strong>FoodBite</strong></b></h2>
            `
     
    let mailDetails = {
        from: process.env.auth_email,
        to: user.email,
        subject: subject,
        html:html
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
    
}

module.exports={registerMail};