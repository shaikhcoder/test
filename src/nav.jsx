import React,{useContext} from "react";
import { Name } from ".";
import "./nav.css"
import { home , contact , project } from "./action";
import  { useSelector, useDispatch } from "react-redux";


function Nav(){

const state = useSelector(state => state.Changer);

const dispatch = useDispatch();

const Named = useContext(Name)




return <>
<nav className="Nav">
<ul className="Nav_head">
<li className={state.home? "List_nav active":"List_nav"} onClick={()=> dispatch(home())}>Home</li>
<li className={state.contact? "List_nav active":"List_nav"} onClick={()=> dispatch(contact())}>Contact</li>
<li className={state.project? "List_nav active":"List_nav"} onClick={()=> dispatch(project())}>Project</li>
<li className={"List_nav"}> {Named}</li>
</ul>

</nav>
</>
}

export default Nav