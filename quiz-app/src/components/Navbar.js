import React from 'react';

function Navbar() {
    return (           
            <nav class="navbar navbar-expand-lg bg-body-tertiary shadow ">
                <div class="container-fluid">
                <a class="navbar-brand ms-5 text-style" href="#link"
                    >QuizVerse</a
                >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <ul class="navbar-nav justify-content-end me-5">
                    <li class="nav-item p-3">
                    <a class="nav-link" href="#link" >Sources</a>
                    </li>
                    
                    <li class="nav-item p-3">
                    <a class="nav-link" href="#link" >About</a>
                    </li>
                    <li class="nav-item p-3">
                    <a class="nav-link" href="#link">Contact</a>
                    </li>
                </ul>
                </div>
            </nav>
        
        )
    
}

export default Navbar;