import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://frozen-beyond-80162.herokuapp.com/user/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data);
               if(data.role=="admin"){
                setAdmin(data.role);
               }
                setAdminLoading(false);
            })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;