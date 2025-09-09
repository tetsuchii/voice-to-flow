import React, { useRef, useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Input,
  Alert,
  LinearProgress,
  Divider,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AdminUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef();

  const handleFileSelect = (event) => {
    if (!event.target.files.length) return;
    setUploading(true);
    setMessage('');
    // Simulate uploading - no actual upload.
    setTimeout(() => {
      setUploading(false);
      setMessage('Excel file uploaded successfully! (Simulated)');
      fileInputRef.current.value = null;
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ width: '100%', padding: 5 }}>
        <Box textAlign="center" mb={3}>
          <CloudUploadIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Admin Excel feltöltés
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 1 }}>
            Upload your XLSX or CSV order data for bulk management.
          </Typography>
        </Box>
        <Box sx={{ mb: 2, textAlign: 'center' }}>
          <label htmlFor="file-upload">
            <Input
              id="file-upload"
              type="file"
              inputProps={{ accept: '.csv,.xls,.xlsx' }}
              style={{ display: 'none' }}
              onChange={handleFileSelect}
              inputRef={fileInputRef}
              disabled={uploading}
            />
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<CloudUploadIcon />}
              disabled={uploading}
            >
              Select File
            </Button>
          </label>
        </Box>
        {uploading && (
          <Box sx={{ width: '100%', mb: 2 }}>
            <LinearProgress color="secondary" />
            <Typography variant="caption" color="text.secondary">
              Uploading...
            </Typography>
          </Box>
        )}
        {message && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" color="text.secondary">
          Only admin users have access to this page.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AdminUpload;
