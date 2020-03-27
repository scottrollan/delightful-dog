import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from './TopInfoBaner.module.css'

const TopInfoBanner = () => {
    return(
        <div className={styles.topInfo}>
          <div id={styles.infoDiv}>
            <a className={styles.contactBtn} href="tel:678-273-3700">
              (678) 273-3700
            </a>
            <a className={styles.contactBtn} href="email:info@delightful-dog.com">
              info@delightful-dog.com
            </a>
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} size="2x">
              <a href="https://www.facebook.com/DelightfulDogMarietta?fref=ts" target="_blank"></a>
            </FontAwesomeIcon>
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} size="2x">
              <a href="https://www.instagram.com/delightfuldog/" target="_blank"></a>
            </FontAwesomeIcon>
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} size="2x">
              <a href="https://twitter.com/adoptagolden?lang=en" target="_blank"></a>
            </FontAwesomeIcon>
          </div>
          <div id={styles.tabDiv}>
            <a href="https://sanity-delightful-dog-main.netlify.com/" a id={styles.homeTab}>Home</a>

            <a href="https://delightful-dog.netlify.com/" id={styles.blogTab}>Blog</a>
          </div>
        </div>

    )
}

export default TopInfoBanner