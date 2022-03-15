import { useEffect } from 'react'

export default function FourOhFour() {
    useEffect(() => {window.location.href = '/404'},[])
    return <>
    <div></div>
    </>
}