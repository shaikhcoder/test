import React,{useState,useEffect} from "react";
import "./nav.css"
function Nav(){
const [select_text , Take_Text] = useState("")




useEffect(()=>{
console.log(select_text)
console.log("Resource Type Change")
return ()=>{
console.log("return")
}

},[select_text])

return <>
<nav className="Nav">
<ul className="Nav_head">
<li className="List_nav" onClick={()=> Take_Text("Home")}>Home</li>
<li className="List_nav" onClick={()=> Take_Text("Contact")}>Contact</li>
<li className="List_nav" onClick={()=> Take_Text("Project")}>Project</li>
</ul>

</nav>
</>
}

export default Nav