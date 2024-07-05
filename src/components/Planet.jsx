import { Typography } from "@mui/material"

export const Planet = (props) => {
  return (
    <div>
      <Typography variant="h5">Name: {props.name}</Typography>
    </div>
  )
}