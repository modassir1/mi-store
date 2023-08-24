import React from 'react'
import HotItemCard from './HotItemCard.js'
import '../styles/Hotaccessories.css'

const Hotaccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, MobileAccessories, MobileAccessoriesCover }) => {
    return (
        <div className="hotaccessories">
            <div>
                <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || MobileAccessoriesCover} alt="" />
            </div>


            {/* second */}

            <div>
                {
                    music && music.map((e, i) => {
                        return (
                            <HotItemCard key={e.image} name={e.name} price={e.price} image={e.image} index={i} />
                        )
                    })
                }


                {
                    smartDevice && smartDevice.map((e, i) => {
                        return (
                            <HotItemCard key={e.image} name={e.name} price={e.price} image={e.image} index={i} />
                        )
                    })
                }


                {
                    home && home.map((e, i) => {
                        return (
                            <HotItemCard key={e.image} name={e.name} price={e.price} image={e.image} index={i} />
                        )
                    })
                }


                {
                    lifeStyle && lifeStyle.map((e, i) => {
                        return (
                            <HotItemCard key={e.image} name={e.name} price={e.price} image={e.image} index={i} />
                        )
                    })
                }



                {
                    MobileAccessories && MobileAccessories.map((e, i) => {
                        return (
                            <HotItemCard key={e.image} name={e.name} price={e.price} image={e.image} index={i} />
                        )
                    })
                }

                <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
            </div>
        </div>
    )
}

export default Hotaccessories