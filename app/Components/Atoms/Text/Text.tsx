import React from 'react'

type Props = {
    text:string,
    variant:"title"|"head"|"subtitle"|"description"|"smalltitle"|"button"
}

const Text = (props: Props) => {
    const {text,variant} = props;
    let style = "";
    switch(variant){
        case "title":
            style="";
        case "head":
            style="";
        case "subtitle":
            style="";
        case "description":
            style="";
        case "smalltitle":
            style="";
        case "button":
            style="";
        default: style="";
    }
  return (
    <div className={`${style}`}>
        {text}
    </div>
  )
}