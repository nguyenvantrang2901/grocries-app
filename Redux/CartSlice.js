const {createSlice} = require("@reduxjs/toolkit")

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers: {
        addToCart:(state,actions)=>{
            const isAvailable= state.find(
                (value)=>value.name == actions.payload.name
            )
            if(isAvailable){
                actions.payload['quantity'] +=1
            }else{
                state.push({
                    ...actions.payload,
                    quantity:1
                })
            }
        },
        removeToCart:(state, actions)=>{
            const newList = state.filter(
                (value)=> value.name != actions.payload.name
            )
            return (state= newList)
        },
        increQuantity:(state, actions)=>{
            const isAvailable = state.find(
                (value)=> value.name == actions.payload.name
            )
            if (isAvailable) {
                isAvailable.quantity ++
            } else {
                console.log("Not available")
            }
        },
        decreQuantity:(state, actions)=>{
            const isAvailable = state.find(
                (value)=> value.name == actions.payload.name
            )
            isAvailable.quantity <= 1 ? isAvailable.quantity=1:isAvailable.quantity--
        }
    }
})

export const {
    addToCart, 
    removeToCart, 
    increQuantity, 
    decreQuantity
} = cartSlice.actions
export default cartSlice.reducer
