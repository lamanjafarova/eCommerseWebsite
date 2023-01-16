import React from 'react'
import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"
const Offcanvas = ({addBasket, setAddBasket}) => {
const renderTotal = () => {
        let total = 0;
        addBasket.map(element => {
          total+= +element.price;
        })
        return total
      }
 const handleRemove = (id) => {
        let newBasket = addBasket.filter((el) => el.id !== id);
        setAddBasket(newBasket);
      }
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
      setOpen(true);
    };
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
    const onClose = () => {
      setOpen(false);
    };
  return (
    <>
        <Space>
        <Button type="primary" onClick={showDrawer}>
      Open Basket
        </Button>
      </Space>
      <Drawer
        title="SHOPPING CART"
        placement={placement}
        width={400}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Link to={"add-basket"}>
            <Button type="primary" onClick={onClose}>
              Go To Basket
            </Button></Link>
          </Space>
        }
      >
        <p>Total: €{renderTotal()}</p>
        {addBasket.map((element) => {
            return <div className='offcanvas'>
                <img src={element.imgUrlOne} alt="" />
                <div className="about">
                <p>{element.name}</p>
                <p>€{element.price}</p>
                <button onClick={() => handleRemove(element.id)}>Remove</button>
                </div>
            </div>
        })}
      </Drawer>
    </>
  )
}

export default Offcanvas