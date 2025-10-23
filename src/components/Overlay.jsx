import './Overlay.css'

const Overlay = () => {

    return(
        <>
        
        {/* Logotipo del desarrollo */}
        <div className="logo-container">
            <img src="/logotipo.png" alt="Logo" />
            <div className="logo-text">INNOVATION AND TECHNOLOGY</div>
        </div>
        

        
        {/* Navigation Words */}
        <div
            style={{
            position: 'absolute',
            top: '40px',
            right: '20px',
            display: 'flex',
            flexDirection: 'row',
            gap: '120px',
            zIndex: 10,
            transform: 'translateX(-50px)'
        }}
        >
        
            <a 
            href="https://sordomadaleno.com/projects" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                fontSize: '25px',
                color: 'white',
                fontWeight: '500',
                textDecoration: 'none',
                cursor:'pointer',
                transition: 'opacity 0.3s'
            }} 
            onMouseOver={(e) => e.target.style.opacity = '0.7'} 
            onMouseOut={(e) => e.target.style.opacity = '1'}
            >PROJECTS</a>

            <a 
            href="http://sordomadaleno.com/studio" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
                fontSize: '25px',
                color: 'white',
                fontWeight: '500',
                textDecoration: 'none',
                cursor:'pointer',
                transition: 'opacity 0.3s'
            }} 
            onMouseOver={(e) => e.target.style.opacity = '0.7'} 
            onMouseOut={(e) => e.target.style.opacity = '1'}
            >STUDIO</a>

            <span 
            style={{
                fontSize: '25px',
                color:'white',
                fontWeight: '500',
                cursor:'pointer'
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.7'} 
            onMouseOut={(e) => e.target.style.opacity = '1'}
            >TEAM</span>

            <span 
            style={{
                fontSize: '25px',
                color:'white',
                fontWeight: '500',
                cursor: 'pointer'               
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.7'} 
            onMouseOut={(e) => e.target.style.opacity = '1'}
            >HOME</span>
        </div>

        
        </>

    )

}


export default Overlay

