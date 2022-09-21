import React from 'react';
import IconPhone from '@mui/icons-material/Phone'
import IconEmail from '@mui/icons-material/Email'

const Contact = () => {

    const iconStyle = {
        fontSize: '5rem'
    }

    return (
        <section id="contact" className="contact">
            <h2 className="contact__h2">Contact</h2>
            <article className="contact_cell-data">
                {/* <img className="contact__icon" src="./assets/img/phone 3.svg" alt="" /> */}
                <IconPhone sx={iconStyle} />
                <h4>Cell phone number</h4>
                <p>+51 942 411 785</p>
            </article>
            <article className="contact_cell-data">
                {/* <img className="contact__icon" src="./assets/img/mail 3.svg" alt="" /> */}
                <IconEmail sx={iconStyle} />
                <h4>Email</h4>
                <p>jm.ticona.p@gmail.com</p>
            </article>
        </section>
    )
}

export default Contact;