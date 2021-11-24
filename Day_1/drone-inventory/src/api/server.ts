let token = `74a281f8b6bf5dcbe273a161ada6808064f0fc9e95e480a2`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-kl.herokuapp.com/api/drones`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any={}) => {
        const response = await fetch(`https://drone-inventory-kl.herokuapp.com/api/drones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create drone')
        }
        return await response.json()
    },
    update: async (id:string, data: any={}) => {
        const response = await fetch(`https://drone-inventory-kl.herokuapp.com/api/drones/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update drone')
        }
        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://drone-inventory-kl.herokuapp.com/api/drones/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Failed to delete drone')
        }
        return await response.json()
    }
}