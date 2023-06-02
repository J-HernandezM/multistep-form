import React from "react"
import './Step3.css'

function Step3({addons, setAddons}){
    
    //Derivated state for check svg logic
    let idsChecked = []
    addons.forEach((entry)=>{idsChecked.push(entry.id)})
    function selectAddons(event){
        if(event.target.classList.contains('inputs')){
            //Define the new entry to the state array
            const idAddon=event.target.id
            const rawPrice=event.target.nextElementSibling.lastChild.innerHTML.split('')[2]
            const titleAddon=event.target.nextElementSibling.childNodes[2].firstChild.innerHTML
            const newEntry = {
                title : titleAddon,
                id : idAddon,
                price : rawPrice
            }
            //Find the index
            let index
            addons.find((entry)=>{
                if(entry.title==newEntry.title){
                    index = addons.indexOf(entry)
                }
            })
            //Evaluate wether to erase or push using the index or the abscense of it
            if(!index && index!==0){
                const newArray = [...addons]
                newArray.push(newEntry)
                setAddons(newArray)
            }else if(index || index===0){
                const newArray = [...addons]
                newArray.splice(index, 1)
                setAddons(newArray)
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
                            <span className={`fa-regular fa-square fa-xl ${!idsChecked.includes('online')?'icons':'inactive'} `}></span>
                            <span className={`fa-solid fa-square-check fa-xl ${idsChecked.includes('online')?'check':'inactive'}`}></span>
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
                            <span className={`fa-regular fa-square fa-xl ${!idsChecked.includes('storage')?'icons':'inactive'} `}></span>
                            <span className={`fa-solid fa-square-check fa-xl ${idsChecked.includes('storage')?'check':'inactive'}`}></span>
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
                            <span className={`fa-regular fa-square fa-xl ${!idsChecked.includes('profile')?'icons':'inactive'} `}></span>
                            <span className={`fa-solid fa-square-check fa-xl ${idsChecked.includes('profile')?'check':'inactive'}`}></span>
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