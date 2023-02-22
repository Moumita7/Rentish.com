import React from 'react'

const NetBanking = () => {
  return (
    <>
    <div className='Credit_heading' style={{marginTop:"-20px",marginBottom:"10px"}}>
    <div>
        <p className='Credit_content_head' style={{fontSize:"20px"}}>Net Banking</p> 
        <p>Amount: ₹2380.0</p>
    </div>
    <div style={{marginTop:"30px"}}>
        <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png" alt="sdv" />
    </div>
  </div>
  <div className='upiPayment'>
    <img src="https://zoomcar-assets.zoomcar.com/images/original/f380ffaa7f80bdc586f469a53a3caea8887d84a4.png?1584601955" alt="" />
    <p>Hdfc Bank</p>
    <input type="checkbox" className='inputcheck'/>
  </div>

  <div className='upiPayment'>
    <img src="https://zoomcar-assets.zoomcar.com/images/original/312f0e8f319287aa09b1e96b45a7d82cabf6184a.png?1584601979" alt="" />
    <p>ICICI Netbanking</p>
    <input type="checkbox" className='inputcheck'/>
  </div>

  <div className='upiPayment'>
    <img src="https://zoomcar-assets.zoomcar.com/images/original/d79d466d40fc7df794e2e1c907db212e52d4f47f.png?1584601931" alt="" />
    <p>Axis Bank</p>
    <input type="checkbox" className='inputcheck'/>
  </div>
  <div className='cardsubmmit'>
        
        
        <button style={{marginTop:"5px"}} >PAY ₹2380.0</button>
    </div>

  

    </>
  )
}

export default NetBanking