// import React, { 
//     createContext, 
//     useContext,
//     useState,
//     useEffect
// } from "react"
// import { useAuth } from "./authContext"
// import { mutate } from 'swr'

// const TeamContext = createContext()

// export const TeamProvider = props => {

//     const { user } = useAuth()

//     const [teamId, setTeamId] = useState(false)

//     // unbake
//     useEffect(() => {
//         try{
//             const storedValue = JSON.parse(window.localStorage.getItem("team"))
//             // if there is no localstorage preference
//             if(!storedValue) setTeamId(user.memberships[0].team.id)
//             if(user.memberships.find(membership => 
//                 membership.team.id === storedValue
//             )){
//                 // if there is a preference, and the user is a member of the team
//                 setTeamId(parseInt(storedValue))
//             } else {
//                 // if there is a preference, but the user is not a member of the team
//                 setTeamId(user.memberships[0].team.id)
//             }
//         }catch(err){
//             // if there was an error parsing the json
//             setTeamId(user.memberships[0].team.id)
//         }
//     }, [user])

//     // bake
//     useEffect(() => {
//         if(teamId) {
            
//             window.localStorage.setItem("team", JSON.stringify(teamId))
//             fetch("/api/v1/auth/switch-team", {
//                 method: "PUT",
//                 body: JSON.stringify({
//                     teamId: teamId
//                 }),
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             })
//         }
//     }, [teamId])

//     return(
//         <TeamContext.Provider value={{
//             teamId,
//             setTeamId: newValue => setTeamId(parseInt(newValue))
//         }} {...props}/>
//     )
// }

// export const useTeam = () => useContext(TeamContext)