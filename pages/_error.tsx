import { useEffect } from 'react'

export default function ErrorPage () {
    useEffect(() => {window.location.href = '/404'},[])
    return <>
    <div></div>
    </>
}