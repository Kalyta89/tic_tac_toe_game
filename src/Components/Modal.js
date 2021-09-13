import React from 'react'
import "../Style/modal.css"

const Modal = (props) => {
    const {active, 
         // setActive,
        firstName, 
        setFirstName,
        secondName,
        setSecondName, 
        submitName,
        setSubmitName} = props;
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitName({firstName: firstName, 
                        secondName: secondName})  
    }

    return (
        <div className={active 
                        && (submitName.firstName === '' 
                        || submitName.secondName === '')? "modal active": "modal"} onClick={(e) => e.stopPropagation()}>
            <div className={active 
                        && (submitName.firstName === '' 
                        || submitName.secondName === '')? "modal__content active": "modal__content"} onClick={(e) => e.stopPropagation()}>
                <form className="form" onSubmit={handleSubmit}>
                    <p>First name:</p>
                    <input type="text" name="firstname" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <p>Second name:</p>
                    <input type="text" name="secondname" value={secondName} onChange={e => setSecondName(e.target.value)}/>
                    <p>Add player names:</p>
                    <input type="submit" value="Enter"/>
                </form>
            </div>
        </div>
    )
}

export default Modal
