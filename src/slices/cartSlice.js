import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast"

const initialState = {
    cart: localStorage.getItem("cart")// cart mai course details store karna ka liya
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    total: localStorage.getItem("total")
        ? JSON.parse(localStorage.getItem("total")) // total prices of courses
        : 0,
    totalItems: localStorage.getItem("totalItems") // total courses
        ? JSON.parse(localStorage.getItem("totalItems"))
        : 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, value) => {
            const course = value.payload;
            const index = state.cart.findIndex((item) => item._id === course._id);
            if (index >= 0) {
                // If the course is already in the cart, do not modify the quantity
                toast.error("Course already in cart");
                return;
            }
            // push course in cart
            state.cart.push(course);
            // update to total course and price
            state.totalItems++;
            state.total += course.price;

            // Update to localstorage
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("total", JSON.stringify(state.total))
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems))

            // show toast
            toast.success("Course added to cart")

        },
        removeFromCart: (state, value) => {
            const course = value.payload;
            const index = state.cart.findIndex((item) => item._id === course._id);
            if (index >= 0) {
                // push course in cart
                state.cart.splice(index,1);
                // update to total course and price
                state.totalItems--;
                state.total -= course.price;

                // Update to localstorage
                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("total", JSON.stringify(state.total))
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems))

                // show toast
                toast.success("Course removed from cart")
            }
        },
        resetCart:(state)=>{
            state.cart = []
            state.total = 0
            state.totalItems = 0
            localStorage.removeItem("cart");
            localStorage.removeItem("total");
            localStorage.removeItem("totalItems");

        },


    }
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;