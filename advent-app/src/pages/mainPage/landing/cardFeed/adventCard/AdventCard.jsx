import {Box, Card, Modal} from "@mui/material";
import './AdventCard.css';
import {useState} from "react";
import AdventModal from "../../../../../components/adventModal/AdventModal";
import Confetti from "../../../../../components/confetti/Confetti";

const AdventCard = ({book}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalClose = () => setModalOpen(false);

    const [isShaking, setIsShaking] = useState(false);

    const handleModalOpen = () => {
        let date = new Date(book.date);
        date.setHours(new Date(book.date).getHours() - 3)
        if (date <= new Date()) {
            setModalOpen(true)
        } else {
            setIsShaking(true);
            setTimeout(() => {
                setIsShaking(false); // Reset after animation
            }, 1000);
        }
        //Todo сделать всплывашку об ошибке

    }

    return (
        <Box>
            <Card className={`advent-card card-${book.id} ${book.grade}-shade ${isShaking ? 'shaking' : ''}`} onClick={handleModalOpen}></Card>
            {modalOpen ? <Confetti/> : null}
            <AdventModal data={book} modalOpen={modalOpen} onClose={handleModalClose} />
        </Box>
    );
};

export default AdventCard;