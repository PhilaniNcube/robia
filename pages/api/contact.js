import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.EMAIL_API_KEY);

const sendEmail = async (req, res) => {
  const { email, number, name } = req.body;
  const msg = {
    to: 'info@robia.co.za',
    from: 'info@robia.co.za',
    subject: 'Sign Up Form',

    text: `Hello you have received a new form submission
    
    Name: ${name} 
    Email: ${email} 
    Phone Number: ${number}
    
      `,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
};

export default sendEmail;
