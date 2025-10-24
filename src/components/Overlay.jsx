import './Overlay.css'
import { useState } from 'react'

const Overlay = ({ isMobile }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
        
        {/* Logotipo del desarrollo */}
        <div className="logo-container">
            <img src="/logotipo.png" alt="Logo" />
            <div className="logo-text">INNOVATION AND TECHNOLOGY</div>
        </div>
        

        {/* Desktop Navigation */}
        {!isMobile && (
            <div className="desktop-nav">
                <a 
                href="https://sordomadaleno.com/projects" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link"
                >PROJECTS</a>

                <a 
                href="http://sordomadaleno.com/studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
                >STUDIO</a>

                <span className="nav-link">TEAM</span>

                <span className="nav-link">HOME</span>
            </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
            <button 
                className="mobile-menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        )}

        {/* Mobile Menu Overlay */}
        {isMobile && menuOpen && (
            <div className="mobile-menu-overlay">
                <button 
                    className="mobile-menu-close"
                    onClick={() => setMenuOpen(false)}
                >
                    ×
                </button>
                
                <nav className="mobile-menu-nav">
                    <a 
                        href="https://sordomadaleno.com/projects" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                    >
                        PROJECTS
                    </a>
                    <a 
                        href="http://sordomadaleno.com/studio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                    >
                        STUDIO
                    </a>
                    <span onClick={() => setMenuOpen(false)}>TEAM</span>
                    <span onClick={() => setMenuOpen(false)}>HOME</span>
                </nav>
            </div>
        )}

        
        </>

    )

}


export default Overlay

