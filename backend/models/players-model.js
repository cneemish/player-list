import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema ({

    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: false
    },
    age:{
        type: Number,
        required: true
       // valeOf: () => {18}
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number
    },
    isCoach:{
        type: Boolean,
        default: false
    },
    currentTeam:{
        type: String
    },
    isStatePlayer:{
        type:Boolean,
        default: false
    },
    playingPosition:{
        type: String
    },
    speed:{
        type: Number,
        enum:[1,2,3,4,5],
    },
    strength:{
        type: Number,
        enum:[1,2,3,4,5],
    },
    endurance:{
        type: Number,
        enum:[1,2,3,4,5]
    },
    ability:{
        type: Number,
        enum:[1,2,3,4,5]
    },
    techniques:{
        type: Number,
        enum:[1,2,3,4,5]
    },
    created_date:{
        type: Date,
        default: Date.now
    }



})