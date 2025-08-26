import { Alert, Container } from "@mui/material";
export default function ErrorPage(){
  return (
    <Container style={{marginTop:48}}>
      <Alert severity="error">Incorrect credentials. Try again.</Alert>
    </Container>
  )
}