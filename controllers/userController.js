import Userr from "../Models/userModels.js";

const getUsers = async (req, res) => {
    try {

        let user = await Userr.find({})
        if (!user) {
            res.status(400).json({ error: 'not found' })
        } else {
            res.status(200).json(user)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json( error)

    }
}

export {getUsers}