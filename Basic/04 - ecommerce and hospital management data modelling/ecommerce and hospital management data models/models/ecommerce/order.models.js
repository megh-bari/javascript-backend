import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity:{
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    price:{
        type:Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems:{
        type:[orderItemSchema],
    },
    address:{
        tyep: String,
        required: true,
    },
    status:{
        tyep:String,
        enum: ["PENDING", "CANCLLED", "DELIVERED"],
        default:"PENDING"
    }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);
