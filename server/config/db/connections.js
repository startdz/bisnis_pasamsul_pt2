import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const {connect} = mongoose
const Connections = async () => {
    try {
        await connect(process.env.MONGO_CONNECTIONS_MERN)
        console.log(`Database MongoDB Connected!`)
    } catch(error) {
        throw error
    }
}

export default Connections