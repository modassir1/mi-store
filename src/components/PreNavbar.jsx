import React from 'react'
import '../styles/PreNavbar.css'

const icon = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M263.788-96Q234-96 213-117.212q-21-21.213-21-51Q192-198 213.212-219q21.213-21 51-21Q294-240 315-218.788q21 21.213 21 51Q336-138 314.788-117q-21.213 21-51 21Zm432 0Q666-96 645-117.212q-21-21.213-21-51Q624-198 645.212-219q21.213-21 51-21Q726-240 747-218.788q21 21.213 21 51Q768-138 746.788-117q-21.213 21-51 21ZM253-696l83 192h301l82-192H253Zm-31-72h570q14 0 20.5 11t1.5 23L702.627-476.145Q694-456 676.5-444 659-432 637-432H317l-42 72h493v72H276q-43 0-63.5-36.153Q192-360.305 213-396l52-90-131-306H48v-72h133l41 96Zm114 264h301-301Z"/></svg>

const PreNavbar = () => {
    return (
        <div className="preNav">
            <div>
                <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
            </div>
            
            <div>
                <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                <a href="https://store.mi.com/in/site/login"> {icon}CART (0) </a>

            </div>

        </div>
    )
}

export default PreNavbar