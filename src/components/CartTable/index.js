import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../reducers/cartSlice";
import CartItem from "./CartItem";

export default function CartTable() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id, size) => {
    return () => {
      dispatch(removeFromCart({ id, size }));
    }
  }

  return (
    <section class="cart">
      <h2 class="text-center">Корзина</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Итого</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, row) => 
            <CartItem item={item} row={row} onRemove={handleRemove} key={item.id + item.size} />
          )}
          <tr>
            <td colspan="5" class="text-right">Общая стоимость</td>
            <td>{items.reduce((sum, item) => sum + (item.price), 0).toLocaleString()} руб.</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
