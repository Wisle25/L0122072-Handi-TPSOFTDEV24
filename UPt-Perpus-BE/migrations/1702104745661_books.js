exports.up = (pgm) => {
    pgm.createTable('books', {
      id: {
        type: 'VARCHAR(50)',
        primaryKey: true
      },
      name: { 
        type: 'varchar(1000)', 
        notNull: true 
      },
      createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
      author: {
        type: 'VARCHAR(50)',
        notNull: true
      },
      category: {
        type: 'VARCHAR(50)',
        notNull: true
      }
    })
}

exports.down = pgm => {
    pgm.dropTable('books')
}