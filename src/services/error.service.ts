export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ValidationError"
  }
}

export class ConnectionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ConnectionError"
  }
}

export class DatabaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "DatabaseError"
  }
}

export class ShopError extends Error {
  constructor(message: string){
    super(message)
    this.name = "ShopError"
  }
}