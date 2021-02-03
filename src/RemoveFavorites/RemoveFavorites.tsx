import * as React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


interface RemoveFavoritesProps {
    viewingFavorites: boolean;
    haveFavorites: boolean;
    clearFavorites: () => void;
}

export const RemoveFavorites = ({ viewingFavorites, haveFavorites, clearFavorites }: RemoveFavoritesProps) => {
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const handleShowRemoveModal = () => setShowRemoveModal(true);
    const handleClose = () => setShowRemoveModal(false);
    const handleClearFavorites = () => {
        clearFavorites();
        setShowRemoveModal(false);
    };
    return (
        <>
            { viewingFavorites && haveFavorites &&
                (<Button
                    variant="warning"
                    onClick={handleShowRemoveModal}
                    className='my-4'>
                    Clear Favorites
                </Button>)
            }
            <Modal show={showRemoveModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to clear your favorites?
              <br />
                    <small className="text-warning">This action cannot be undone!!</small>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                          </Button>
                    <Button variant="danger" onClick={handleClearFavorites}>
                        Remove All
                          </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};