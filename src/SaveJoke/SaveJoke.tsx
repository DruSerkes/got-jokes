import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { jokeData } from '../types';


interface SaveJokeProps {
	joke?: jokeData;
	isLoading: boolean;
}

export const SaveJoke = ({ joke, isLoading }: SaveJokeProps) => {
	const [showModal, setShowModal] = useState(false);

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

	const handleSaveJoke = () => {
		let favorites: jokeData[] | string = localStorage.getItem('favorites') || [];
		if (favorites && typeof favorites === 'string') favorites = JSON.parse(favorites);
		if (joke) {
			const newFavorites = [joke, ...favorites];
			localStorage.setItem('favorites', JSON.stringify(newFavorites));
		}
		handleClose();
	};

	return (
		<>
			<Button
				variant="info"
				onClick={handleShow}
				disabled={isLoading ? true : false}
				className='my-3'>
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