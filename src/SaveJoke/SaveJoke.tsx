import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { jokeData } from '../types';


interface SaveJokeProps {
	joke?: jokeData;
	viewingFavorites: boolean;
	saveFavoriteJoke: () => void;
}

export const SaveJoke = ({ joke, viewingFavorites, saveFavoriteJoke }: SaveJokeProps) => {
	const [showModal, setShowModal] = useState(false);

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

	const handleSaveJoke = () => {
		saveFavoriteJoke();
		handleClose();
	};

	return (
		<>
			<Button
				variant="info"
				onClick={handleShow}
				disabled={viewingFavorites ? true : false}
				className='my-4'>
				Save to Favorites
      		</Button>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Confirm</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to save this joke to your favorites?</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-danger" onClick={handleClose}>
						Cancel
          			</Button>
					<Button variant="success" onClick={handleSaveJoke}>
						Save
          			</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}