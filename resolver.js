import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '3.218.78.185',
  user: 'orders_user',
  password: 'strongpassword',
  database: 'orders_db'
});

const resolvers = {
  Mutation: {
    async createOrder(_, { userId, productId, quantity }) {
      const [result] = await pool.query(
        'INSERT INTO orders (userId, productId, quantity, status) VALUES (?, ?, ?, ?)',
        [userId, productId, quantity, 'pending']
      );

      const [rows] = await pool.query(
        'SELECT * FROM orders WHERE id = ?',
        [result.insertId]
      );

      const order = rows[0];
      order.created_at = new Date(order.created_at).toISOString();
      return order;
    }
  }
};

export default resolvers;