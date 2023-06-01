import React from "react"
import './Step3.css'

function Step3(){
    const [addons, setAddons] = React.useState([])

    function selectAddons(event){
        if(event.target.classList.contains('inputs')){
            const rawPrice=event.target.nextElementSibling.lastChild.innerHTML.split('')[2]
            const titleAddon=event.target.nextElementSibling.childNodes[2].firstChild.innerHTML
            const newEntry = {
                title : titleAddon,
                price : rawPrice
            }
            if(addons.length===0){
                const newArray = [...addons]
                newArray.push(newEntry)
                setAddons(newArray)
            }else{
                addons.forEach((entry)=>{
                    if(entry.title===newEntry.title){
                        const newArray = [...addons]
                        const index = newArray.indexOf(newEntry)
                        newArray.splice(index, 1)
                        setAddons(newArray)
                    }else{
                        const newArray = [...addons]
                        newArray.push(newEntry)
                        setAddons(newArray)
                    }
                })  
            }     
        }
    }

    return(
            <form className='pick' onClick={selectAddons}>
                <h1 className='title'>Pick add-ons</h1>
                <h2 className='subtitle'>Add-ons help enhance your gaming experience.</h2>
                <div className='inputBox'>

                    <div className='pickInputBox'>
                        <input type="checkbox" id='online' name='online' className='inputs pickInputs'/>
                        <label className="pickLabels labels" htmlFor="online">
                            <span className='fa-regular fa-square fa-xl icons '></span>
                            <span className='fa-solid fa-square-check fa-xl check inactive'></span>
                            <div className="textWrap pickLabels--textWrap">
                                <p className="pickTitle inputTitle">Online service</p>
                                <p className="pickDescription inputDescription">Access to multiplayer games</p>
                            </div>
                            <p className="pickPrice inputDescription">+$1/mo</p>
                        </label>
                    </div>

                    <div className='pickInputBox'>
                        <input type="checkbox" id='storage' name='storage' className='inputs pickInputs'/>
                        <label className="pickLabels labels" htmlFor="storage">
                            <span className='fa-regular fa-square fa-xl icons '></span>
                            <span className='fa-solid fa-square-check fa-xl check inactive'></span>
                            <div className="textWrap pickLabels--textWrap">
                                <p className="pickTitle inputTitle">Larger storage</p>
                                <p className="pickDescription inputDescription">Extra 1TB of cloud save</p>
                            </div>
                            <p className="pickPrice inputDescription">+$2/mo</p>
                        </label>
                        
                    </div>

                    <div className='pickInputBox'>
                        <input type="checkbox" id='profile' name='profile' className='inputs pickInputs'/>
                        <label className="pickLabels labels" htmlFor="profile">
                            <span className='fa-regular fa-square fa-xl icons '></span>
                            <span className='fa-solid fa-square-check fa-xl check inactive'></span>
                            <div className="textWrap pickLabels--textWrap">
                                <p className="pickTitle inputTitle">Customizable profile</p>
                                <p className="pickDescription inputDescription">Custom theme on your profile</p>
                            </div>
                        <p className="pickPrice inputDescription">+$2/mo</p>
                        </label>
                    </div>
                </div>
            </form>
    )
}
export {Step3}