import React, { useState ,useEffect} from 'react'
import "./Navbar.css"
const Navbar = () => {
  const[on,setOn]=useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleMenu = () => {
    setOn(!on);
    console.log(on) // Toggle the on state when the image is clicked
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);


    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);
  return (
    <div className='parent'>
      <div>
        <img src='/Vector.png' alt='logo' />
      </div>
      <div>
        {(!on || screenWidth >768 )&& (
 <ul className="plist">
 <li >SIGN IN</li>
 <li >LEGAL</li>
 <li >LICENSES</li>
 <li >SECURITY</li>
 <li >CAREERS</li>
 <li >PRESS</li>
 <li >SUPPORT</li>
 <li >STATUS</li>
 <li >CODEBLOG</li>
</ul>
        )}
       
      </div>
      <div>
      <div className="eye">
  <div className="inner-eye">
    <div className="iris"></div>
  </div></div>

      </div>
      <img  onClick={toggleMenu}  className="x" style={{backgroundColor:"wheat"}} src={on?"/menu-bar.png":"/close.png"} alt='im' />
     </div>
     
  )
}

export default Navbar