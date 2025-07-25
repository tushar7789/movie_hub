import React from 'react'
import { ButtonPropsInterface } from '@/interface/pageInterface';

const Button: React.FC<ButtonPropsInterface> = ({ buttonProps: { height, width, bgcolor, text, cursor } }) => {
    const buttonStyle = {
        "height": height,
        "width": width,
        "backgroundColor": bgcolor,
        "cursor": cursor,
        "display": "inline-flex",
        "position": "relative" as any,
        "left": "100px",
        "borderRadius": "5px",
        "justifyContent": "center",
        "alignItems": "center"
    }

    return (
        <div
            style={buttonStyle}
            id="add_fav_button"
        >
            {text}
        </div>
    )
}

export default Button;