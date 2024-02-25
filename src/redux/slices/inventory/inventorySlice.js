import { createAsyncThunk } from "@reduxjs/toolkit"
const noConnectionInventory = require("../../../assets/utils/inventory.json")

const initialState = {
  inventory: [],
  status: "idle",
  error: null,
}

export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/items"
      ).then((response) => {
        if (!response.ok) {
          throw new Error("Server Error")
        } else {
          return response
        }
      })
      const myJson = response.json()
      return myJson
    } catch (error) {
      console.log(
        "A problem has ocurred with the Fetch request: " + error.message
      )
      return { data: noConnectionInventory }
    }
  }
)
