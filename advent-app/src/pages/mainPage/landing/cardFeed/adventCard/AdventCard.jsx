import {Box, Card, Modal} from "@mui/material";
import './AdventCard.css';
import {useState} from "react";
import AdventModal from "../../../../../components/adventModal/AdventModal";

const AdventCard = ({book}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalClose = () => setModalOpen(false);

    const handleModalOpen = () => {
        if (new Date(book.date) <= new Date()) {
            setModalOpen(true)
        }
        //Todo сделать всплывашку об ошибке

    }

    return (
        <Box>
            <Card className={`advent-card card-${book.id}`} onClick={handleModalOpen}></Card>
            <AdventModal data={book} modalOpen={modalOpen} onClose={handleModalClose} />
        </Box>
    );
};

export default AdventCard;