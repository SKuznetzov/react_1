import React from 'react'
import 'error-indicator.css'

const ErrorIndicator = () => {
    return (
        <div>
            <span className="error-indicator">
                <span>something has gone terribly wrong</span>
                <span>(but we already sent droids to fix it)</span>
            </span>
        </div>
    )
}

export default ErrorIndicator


