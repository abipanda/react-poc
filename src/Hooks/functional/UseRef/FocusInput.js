import React, { useEffect, useRef } from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        console.log("useEffect")
        inputRef.current.focus()
    })

    return (
        <div>
            <input ref={inputRef} type='text' />
            <input type='text' />
        </div>
    )
}

export default FocusInput
