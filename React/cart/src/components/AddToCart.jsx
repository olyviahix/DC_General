import React from "react"

const AddToCart = () =>{
    return(

        <div class='addToCart'>
            <form>
                <label>
                    Enter Item:
                    <input type="text" name="name" />
                </label>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default AddToCart