import toast from 'react-hot-toast'

// get all gadgets from local storage
const getAllCarts = () => {
    const all = localStorage.getItem('carts')

    if (all) {
        const carts = JSON.parse(all)
        // console.log(carts)
        return carts
    } else {
        // console.log([])
        return []
    }
}

// add a gadget to local storage
const addCart = gadget => {
    // get all previously saved gadget data
    const carts = getAllCarts()
    const isExist = carts.find(item => item.product_id == gadget.product_id)
    if (isExist) return toast.error('Gadget already exists!')

    carts.push(gadget)
    localStorage.setItem('carts', JSON.stringify(carts))
    toast.success('Successfully added!')
}

// remove a coffee from local storage
const removeCart = id => {
    // get all previously saved coffee data
    const carts = getAllCarts()
    const remaining = carts.filter(gadget => gadget.product_id != id)
    localStorage.setItem('carts', JSON.stringify(remaining))
    toast.success('Successfully Removed!')
}

export { addCart, getAllCarts, removeCart }
