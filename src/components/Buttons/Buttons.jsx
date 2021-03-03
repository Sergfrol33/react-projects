import React from "react";
import cn from "classnames";
import './buttons.css'

const Buttons = () => {
    const [text, setText] = React.useState(() => {
        return (
            <div>
                first
            </div>
        )
    })
    const [active, setActive] = React.useState('')
    const [result, setResult] = React.useState(false)
    const buttons = ['first', 'second', 'third', 'fourth']
    const switchTextAndButton = (content) => {

        setActive(content)
        switch (content) {
            case 'first':
                return setText(
                    <>
                        first
                    </>
                )
            case 'second':
                return (
                    setText(
                        <>
                            second
                        </>
                    )
                )
            case 'third':
                return (
                    setText(
                        <>
                            third
                        </>
                    )
                )
            case 'fourth':
                return (
                    setText(
                        <>
                            fourth
                        </>
                    )
                )
            default:
                return null
        }
    }
    return (
            <div className="buttons">
                <div className="buttons__row">
                    {buttons.map((name, index) => {
                        return <button key={index} className={cn({
                            'buttons__button': 'buttons__button',
                            'buttons__button--is-active': active === name ? 'buttons__button--is-active' :
                                name === 'first' && result === false
                        },)} onClick={(event) => {
                            if (event.currentTarget.value !== 'first') {
                                setResult(!!event.currentTarget.value)
                            }
                            switchTextAndButton(name)
                        }
                        } value={name}>{name}</button>
                    })
                    }
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
    )
}

export default Buttons;
