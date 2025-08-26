import { Card, CardContent, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ResetPage(){
  const navigate = useNavigate();
  return (
    <Card className="p-6" style={{maxWidth:420, margin:"64px auto"}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>RESET</Typography>
        <form onSubmit={(e)=>{e.preventDefault(); navigate("/dashboard");}}>
          <TextField label="Email" name="email" fullWidth margin="normal" type="email" />
          <Button variant="contained" type="submit" fullWidth>Send reset link</Button>
        </form>
      </CardContent>
    </Card>
  )
}