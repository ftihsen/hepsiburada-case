import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './BasketModal.css';

import { Badge, BasketModalCard, Modal } from 'components';
import { deleteCart } from 'store/actions';

const modalDto = { open: false, data: {} };

function BasketModal() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(modalDto);

  const basketData = useSelector((state) => state.basket.data);

  return (
    <div className="basket-button-container">
      <button className="basket-button">
        <Badge content={basketData.length} />
        Sepetim
      </button>

      <div className="basket-button-modal-container">
        <div className="basket-button-modal-top" />
        <div style={{ flex: 1, padding: 20, overflow: 'auto' }}>
          {basketData.length > 0 ? (
            basketData.map((product) => (
              <BasketModalCard
                onClickDelete={(res) => setModal({ open: true, data: res })}
                key={product.productId}
                data={product}
              />
            ))
          ) : (
            <p>Sepetinizde henüz ürün bulunmamaktadır</p>
          )}
        </div>
      </div>
      <Modal
        open={modal.open}
        headerTitle="Ürünü silmek istediğinize emin misiniz?"
        contentText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall...."
        onClickSuccess={() => {
          dispatch(deleteCart(modal.data));
          setModal({ ...modalDto });
        }}
        onClickCancel={() => setModal({ ...modalDto })}
        onDismiss={() => setModal({ ...modalDto })}
      />
    </div>
  );
}

export default BasketModal;
