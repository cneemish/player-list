import mongoose from "mongoose";
import { PlayerSchema } from "../models/players-model";

const Player = mongoose.model('Player', PlayerSchema); // 

// Function to add new player to the database using async 

export const addNewPlayer = async (req, res)=>{
    let newPlayer = new Player(req.body);

    try {
        const player = await newPlayer.save();
        res.json(player);

    } catch (err){
        res.send(err);
    }
}

// Function to get all players using async

export const getPlayers = async (req, res)=>{
    try {
        const player = await Player.find({})
        res.json(player);
    } catch (err){
        res.send(err);
    }
}

// Function to get player by ID using async

export const getPlayerByID = async (req, res) => {
    try {
        const player = await Player.findById(req.params.PlayerID)
        res.json(player);
    } catch (err) {
        res.send(err);
    }
}

// Function to update player details using async

export const updatePlayer = async (req, res) =>{
    try {
        const player = await Player.findOneAndUpdate({_id: req.params.PlayerID}, req.body,{new:true, useFindAndModify: false});
            res.json(player);
    } catch (err) {
        res.send(err);
    }
}

//function to delete player by ID using async

export const deletePlayer = async (req,res) =>{
    try {
    let player = await Player.findByIdAndDelete({_id: req.params.PlayerID});
        res.json({message: "Deleted Succefully"});
    } catch (err) {
        res.send(err);
    }
}