const Changer = (state = {} ,action)=>{

if(action.type === "home")
return {'home' : true, 'contact' : false, 'project' : false, }
else if(action.type === "contact")
return {'home' : false, 'contact' : true, 'project' : false, }
else if(action.type === "project")
return {'home' : false, 'contact' : false, 'project' : true, }

return {'home' : true, 'contact' : false, 'project' : false, }

}

export default Changer

