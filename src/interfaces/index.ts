import { App, User } from './types'

// Sequelize
export interface iDataTypes {
  UUID: string
  UUIDV4(): string
  STRING: string
  BOOLEAN: boolean
  TEXT: string
  INTEGER: number
  DATE: string
  FLOAT: number
}

export interface iApp extends App {
  id: string
  createdAt: string
  updatedAt: string
}

export interface iUser extends User {
  id: string
  token: string
  createdAt: string
  updatedAt: string
}

// Models
export interface iModels {
  App: any
  User: any
  sequelize: any
}
