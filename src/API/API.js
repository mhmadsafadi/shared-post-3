export const addDelete = (id) => {
    return fetch("https://hakathon2023.onrender.com/api/post/delete/"+ id, {
    method: "DELETE",
    headers: { 
      "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
   }}).then((res) => res.json())
  };
  export const update = () => {
    return fetch("https://hakathon2023.onrender.com/api/post/update/"+ id,{
    method:"PUT",
    headers: { 
      "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
   }}).then((res) => res.json())
  };