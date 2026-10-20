import React from 'react'

export default function footer(props) {
    return (
        <footer className={`footer mb-auto py-2 text-center bg-${props.mode}`}>
            <div className="container">
                <span className="text-muted">Made by <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill mx-1 text-danger" viewBox="0 0 16 16">
                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg> CodeWithSajid </span>
            </div>
        </footer>
    )
}
