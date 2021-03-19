import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { SubmitHandler, FormHandles } from '@unform/core'
import {Modal} from '../Modal';
import {Input} from '../Input';
import {iFood} from '../Food';

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: iFood) => void;
  editingFood: iFood;
}

export const ModalEditFood = function({isOpen, setIsOpen, handleUpdateFood, editingFood}:ModalEditFoodProps) {
  const formRef = createRef<FormHandles>();

  const handleSubmit: SubmitHandler<iFood> = data => {
    handleUpdateFood(data);
    setIsOpen();
  };
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}