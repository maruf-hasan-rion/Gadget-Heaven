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
const addCart = (id) => {
    // get all previously saved gadget data
    const carts = getAllCarts()
    // const isExist = carts.find(item => item.product_id == gadget.product_id)
    // console.log(isExist);
    if (carts.includes(id)) {
        toast.error('Gadget already exists in Cart!')
    }
    else {
        carts.push(id)
        localStorage.setItem('carts', JSON.stringify(carts))
        toast.success('Successfully added to Cart!')
    }
}

// remove a gadget from local storage
const removeCart = (id) => {
    // get all previously saved coffee data
    const carts = getAllCarts()
    const remaining = carts.filter(iD => iD != id)
    localStorage.setItem('carts', JSON.stringify(remaining))
    // console.log('r:', remaining);
    toast.success('Successfully removed from Cart!')
}
// const removeAllCart = () => {
//     // get all previously saved coffee data
//     const carts = getAllCarts()
//     // const remaining = carts.filter(iD => iD != id)
//     localStorage.setItem('carts', JSON.stringify())
//     // console.log('r:', remaining);
//     toast.success('Successfully removed All Cart!')
// }



const getAllWishList = () => {
    const all = localStorage.getItem('wishlist')
    if (all) {
        const wishlist = JSON.parse(all)
        return wishlist
    } else {
        return []
    }
}
const addWishList = (id) => {
    const wishlist = getAllWishList()
    if (wishlist.includes(id)) {
        toast.error('Gadget already exists in Wishlist!')
    }
    else {
        wishlist.push(id)
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
        toast.success('Successfully added to Wishlist!')
    }
}
const removeWishList = (id) => {
    const wishlist = getAllWishList()
    const remaining = wishlist.filter(iD => iD != id)
    localStorage.setItem('wishlist', JSON.stringify(remaining))
    toast.success('Successfully removed from wishlist!')
}

export { addCart, getAllCarts, removeCart, getAllWishList, addWishList, removeWishList }

