import { AppBar, Toolbar, Typography, Container, Card, CardContent } from "@mui/material";
export default function DashboardPage(){
  return (
    <>
      <AppBar position="static"><Toolbar><Typography variant="h6">Dashboard</Typography></Toolbar></AppBar>
      <Container style={{marginTop:24}}>
        <Card><CardContent><Typography variant="h5">Welcome</Typography></CardContent></Card>
      </Container>
    </>
  )
}