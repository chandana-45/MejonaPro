let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)


function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>Your OTP is </h1>${otp_val}
    `;

    Email.send({
        SecureToken : "add your code here",
        To : email.value,
        From : "your-email-created-in-smtpjs",
        Subject : "This is the from Mejona Technology",
        Body : emailbody
    }).then(
       
      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);

            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
                if(otp_inp.value == otp_val){
                    alert("Email address verified...");
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );

}