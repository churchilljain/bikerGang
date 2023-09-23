
import styles from './Signup/css/footer.module.css';
import Bar from "./bar"
export default function Footer(){
    return(
        <div className={styles.mainFoot}>
        <div className={styles.mainFootH}>
        <div className={styles.sDivs1}>
            <p>BIKE-O-RENT</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelF1}>
                <img className={styles.msg} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/email%201.png" alt="da"></img>
                <p>support@Bike-o-Rent.com</p>
                <img className={styles.call} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/white-phone-d7daea12563d63fb4bd1cbb2fa0a824d19501def56934aff125e23343912895e%20(1).png" alt=""></img>
                <p>+917795687594/+919019595595</p>
            </div>
        </div>
        <div className={styles.sDivs2}>
            <p>COMPANY</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelF}>
                <p>About us</p>
                <p>Blog</p>
            </div>
        </div>
        <div className={styles.sDivs3}>
            <p style={{color:"white",fontSize:"14px",marginBottom: "6px"}}>POLICIES</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelF}>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
        <div className={styles.sDivs4}>
            <p  style={{color:"white",fontSize:"14px",marginBottom: "6px"}}>QUICK LINK</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelF}>
                <p>BIKEORENT.COM</p>
            </div>
        </div>
        </div>
        <div className={styles.mainFootH}>
        <div className={styles.sDivs1}>
            <p>FOLLOW US</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelI}>
            <a target='_blank' href='https://kawasaki-india.com/'><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Insta-e068316ffc568b3c0162ef129542c4ec473fedb2317cc8132168a07a0616b475.png" alt=""></img></a>
            <a target='_blank' href='https://www.facebook.com/public/Aviral-Bhatnagar/school/srmscetbly/'><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Facebook-ad24f92a1479ca4c5b308092f11f91d3ad2189d505ba2a737f376943a89b721b.png" alt=""></img></a>   
            <a target='_blank' href='https://www.linkedin.com/company/royal-brothers'><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Linkedin-685bfa4464dc2263601740aad98014e02801299c7f2104be70458ac13d061fa1.png" alt=""></img></a>  
            <a target='_blank' href='https://www.youtube.com/channel/UCRGf98BhX09kyw5hKBYhsdw'><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Youtube-35dbc9202b8e7b71d09c782934215b9f6a78a1b3b11d190b5ad275c004484295.png" alt=""></img></a>   
                
            </div>
        </div>
        <div className={styles.sDivs2}>
            <p></p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelIj}>
               <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/app_store-4407bc8ced0d52a50ff042ce51e32d51de3e11717955798ec54c6a28e7926c7c.png" alt=""></img>
               <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/play_store-057f9061b4cd0fd4953a485569c15e63fdf8d89b0bcc025c04cfb34d9e8cd571.png" alt=""></img>
            </div>
        </div>
        </div>
        <div className={styles.lastF}>
            <Bar/>
            <div className={styles.localities}>
                
             
         
            </div>
        </div>
        <div className={styles.footercopy}>
           <p>Made with 
            <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/like-b8b570f724101252e5c39d8bd66246607fb226e93e3ba17b0516209b20832345.png'></img>
           
             by team Bike-o-Rent </p>

        </div>
        </div>
    )
}