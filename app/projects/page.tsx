"use client"
import Navbar from '../../components/Navbar';
import Box from '@mui/material/Box'; // Import Box from Material-UI
import ProjectCardList from '../../components/ProjectCardList'; // Adjust the path as needed
import AddPostForm from '../../components/AddPostForm'; // Adjust the path as needed
import Footer from '../../components/Footer'; // Adjust the path as needed

export default function Projects() {
    return (
        <div>
            <Navbar />
            <Box sx={{ display: "flex" }}>
                <ProjectCardList />
                <AddPostForm />
            </Box>
            <Footer />
        </div>
    );
}