"use client"
import React from 'react'

const EventsBtn = ({ href }) => {
    return (
        <span onClick={() => {
            window.open(href, "_blank")
        }} className="cursor-pointer text-sm text-[#007bff] hover:underline">
            read more &gt;
        </span>)
}

export { EventsBtn }