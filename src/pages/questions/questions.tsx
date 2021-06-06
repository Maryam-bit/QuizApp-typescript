import React from 'react'

const Questions = () => {
    return (
        <div>
            <h1>questions</h1>
            <div className="question">
                How are you?
            </div>
            <form>
                            <label>
                                <input type="radio" name="opt" required/>
                                fine
                            </label>
                            <br />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Questions