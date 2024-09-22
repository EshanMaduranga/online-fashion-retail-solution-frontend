import React from 'react'

const ViewPageItem = () => {
  return (
    <div className="viewPageProCntCard">
        <div className="viewPageProCntCardImgCnt">
            <img src={require(`../Asset/ProductAssets/${6}.jpg`)} alt="" />
        </div>
        <p className="viewPageProCntCardHdTxt">Women Fit And Flare Blue, Red Dress In Sri Lanka</p>
        <span>2300.00 LKR</span>
        <div className="viewPageFreeShp">Free Shipping</div>
        <div className="viewPageCshOnDel">Cash on Delivery</div>
    </div>
  )
}

export default ViewPageItem
