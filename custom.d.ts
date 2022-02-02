import { Connection } from 'mongoose'

declare global {
    const mongoose: any
}

export const mongoose = global.mongoose || new Connection()

if (process.env.NODE_ENV !== 'production') global.mongoose = mongoose