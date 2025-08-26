import { Card, CardContent, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function LoginPage(){
  const navigate = useNavigate();
  return (
    <Card className="p-6" style={{maxWidth:420, margin:"64px auto"}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>LOGIN</Typography>
        <form onSubmit={(e)=>{e.preventDefault(); navigate("/dashboard");}}>
          <TextField label="Email" name="email" fullWidth margin="normal" type="email" />
        <TextField label="Password" name="password" fullWidth margin="normal" type="password" />
          <Button variant="contained" type="submit" fullWidth>Log in</Button>
        </form>
      </CardContent>
    </Card>
  )
}