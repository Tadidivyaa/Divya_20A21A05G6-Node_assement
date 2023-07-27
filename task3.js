var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'tadidivya12@gmail.com',
        pass: 'yksxqwcoztdbidct'
    }

});
var mailOptions={
    from:'tadidivya12@getMaxListeners.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from Divya',
    text: 'Divya -20A21A05G6-node assessment'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log('Email sent:'+ info.response);
    }
});