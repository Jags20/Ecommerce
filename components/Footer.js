import styles from "../styles/footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Pinterest } from "@mui/icons-material";

const Footer = () => {
    return(
        <div>

            <div className={styles.myFooter_mob}>
                <h4 className={styles.myFooter_mob_heading_top}>Follow us</h4>
                <hr/>
                <div className={styles.logos_inside}>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <YouTubeIcon/>
                    <InstagramIcon/>
                    <Pinterest/>
                </div>
                <h6 className={styles.myFooter_mob_heading_bottom}>Copyright © 2023 All Rights Reserved</h6>
            </div>

            {/* <div className={styles.myFooter}>
            <div>
                <h6><strong>Online Shopping</strong></h6>
                <div className={styles.section1}>
                    <p>boy</p>
                    <p>Girl</p>
                    <p>adult</p>
                    <p>old</p>
                    <p>fashion</p>
                    <p>boy</p>
                    <p>Girl</p>
                    <p>adult</p>
                    <p>old</p>
                    <p>fashion</p>
                    <p>boy</p>
                    <p>Girl</p>
                    <p>adult</p>
                    <p>old</p>
                    <p>fashion</p>
                </div>
            </div>

            <div>
                <h6> <strong>Customer policies </strong></h6>
                <div className={styles.section1}>
                    <p>T & C</p>
                    <p>Contact us</p>
                    <p>FAQ</p>
                    <p>Terms of use</p>
                    <p>Track orders</p>
                    <p>Shipping</p>
                    <p>Cancellation</p>
                    <p>Returns</p>
                    <p>Privacy Policy</p>
                    <p>Grievance</p>
                    <p>Tracking</p>
                    <p>Adv. orders</p>
                </div>
            </div>

            <div className={styles.imgSec}>
                <p><strong>Keep in Touch</strong></p>
                <div className={styles.logos}>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <YouTubeIcon/>
                    <InstagramIcon/>
                </div>

            </div>

            </div> */}

            {/* <div>
                <div className={styles.last}>
                <img className={styles.imge} src="https://e7.pngegg.com/pngimages/729/276/png-clipart-stat-line-sports-analytics-llc-logo-emblem-genner-el-a-s-recreation-emblem-label.png"
                alt="logo"/>
                <p><strong>100% original</strong> guarantee to all product.</p>
                </div>

                <div className={styles.last}>
                    <img className={styles.imge} src="data:image/png;base64,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"
                    alt="logo"/>
                    <p><strong>Return Within 30Days</strong> of receiving the order</p>
                </div>
            </div> */}
        </div>
    );
}

export default Footer;