import React from "react"

export const NoteCard = ({title, content}) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}